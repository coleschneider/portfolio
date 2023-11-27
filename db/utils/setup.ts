import { getConnection } from '@db/client';
import { Post } from '../entities/Post';
import { Tag } from '../entities/Tag';
import { getBlogPosts } from './blog';
const setup = async () => {
  try {
    const connection = await getConnection();
    const posts = getBlogPosts();
    const titles = posts.map((post) => post.title);
    const postsExisting = await connection
      .createQueryBuilder(Post, 'post')
      .where('post.title IN (:...titles)', { titles })
      .getMany();
    const postsExistingByTitle = postsExisting.reduce((acc, post) => {
      acc[post.title] = post;
      return acc;
    }, {} as Record<string, Post>);
    const neededToCreate = posts.filter(
      (post) => !Object.hasOwn(postsExistingByTitle, post.title)
    );
    const tagRepo = connection.getRepository(Tag);
    const postRepo = connection.getRepository(Post);
    const insertValues = neededToCreate.map(
      async ({ title, tags: tagsStr, summary, path }) => {
        const tags = tagsStr
          .split(', ')
          .map((tagStr) => tagRepo.create({ name: tagStr }));
        const tagsToSave = await tagRepo.save(tags);

        const post = postRepo.create({ title, summary, path });
        post.tags = tagsToSave;
        await postRepo.save(post);
      }
    );

    await Promise.all(insertValues);
  } catch (e) {
    console.log(e);
  }
};

setup();
