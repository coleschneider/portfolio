import { getBlogPosts } from '../../db/blog';

export default function BlogPage() {
  const posts = getBlogPosts();
  // return <h1 className={styles}></h1>;
  return <h1>hello</h1>;
}
