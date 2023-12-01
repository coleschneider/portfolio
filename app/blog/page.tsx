import { SummaryCard } from '@components/SummaryCard';
import { getBlogPosts, getAllBlogPosts } from '@db/utils/blog';

import styles from './styles.module.scss';
export default async function BlogPage() {
  const posts = await getAllBlogPosts();
  console.log(posts);
  return (
    <section>
      <div className="container">
        <h1 className={styles.leadText}>Blog</h1>
        <div className={styles.postsContainer}>
          {posts.map((post) => (
            <SummaryCard
              key={post.id}
              id={post.id}
              title={post.title}
              summary={post.summary}
              date={post.createdAt.toString()}
              // tags={post.metadata}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
