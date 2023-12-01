import fs from 'fs';
import path from 'path';
import { getConnection } from '../client';
import { Post } from '@db/entities';

type Metadata = {
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
  tags: string;
  content: string;
};
type BlogPost = Metadata & {
  path: string;
  content: string;
  slug: string;
};
function parseFrontmatter(fileContent: string) {
  let frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  let match = frontmatterRegex.exec(fileContent);
  let frontMatterBlock = match![1];
  let content = fileContent.replace(frontmatterRegex, '').trim();
  let frontMatterLines = frontMatterBlock.trim().split('\n');
  let metadata: Partial<Metadata> = {};

  frontMatterLines.forEach((line) => {
    let [key, ...valueArr] = line.split(': ');
    let value = valueArr.join(': ').trim();
    value = value.replace(/^['"](.*)['"]$/, '$1'); // Remove quotes
    metadata[key.trim() as keyof Metadata] = value;
  });

  return { ...metadata, content } as Metadata;
}

function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx');
}

function readMDXFile(filePath: string) {
  let rawContent = fs.readFileSync(filePath, 'utf-8');
  return parseFrontmatter(rawContent);
}

function getMDXData(dir: string): BlogPost[] {
  let mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((filePath) => {
    let slug = path.basename(filePath, path.extname(filePath));
    const metadata = readMDXFile(path.join(dir, filePath));
    return {
      ...metadata,
      slug,
      path: filePath,
    };
  });
}

export function getBlogPosts() {
  return getMDXData(path.join(process.cwd(), 'content'));
}

function getBlogPostsByTitle(): Record<string, BlogPost> {
  return getBlogPosts().reduce((postsByTitle, post) => {
    postsByTitle[post.title] = post;
    return postsByTitle;
  }, {});
}
export const getAllBlogPosts = async () => {
  const datasource = await getConnection();
  const byTitle = getBlogPostsByTitle();

  const posts = await datasource
    .getRepository(Post)
    .find({ loadEagerRelations: true });

  const resultPromise = posts.map(async (post) => {
    const postWithContent = byTitle[post.title];

    const viewCount = await post.getViewCount();
    return {
      ...post,
      content: postWithContent.content,
      viewCount,
    };
  });
  const allPosts = await Promise.all(resultPromise);

  return allPosts;
};

export const viewBlogPost = async (id: number) => {
  const datasource = await getConnection();
  const post = await datasource
    .getRepository(Post)
    .findOneOrFail({ where: { id } });
  await post.viewPost();
  return post;
};
