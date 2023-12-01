import { GetStaticPropsContext } from 'next';
import { viewBlogPost } from '@db/utils/blog';

const BlogPage = async ({ params }: GetStaticPropsContext<{ id: string }>) => {
  const post = await viewBlogPost(params.id);
  console.log(post);
  // const post = await viewBlogPost(id);
  // console.log(post);
  // return <h1 className={styles}></h1>;
  return (
    <div>
      Hello there, The following post title is: \<h1>{post.title}</h1>
      <br />
      <br />
      and has a total view count of {post.views.length}
    </div>
  );
};

export default BlogPage;
