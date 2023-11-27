import { SummaryCard } from '@components/SummaryCard';
import { getBlogPosts, getAllBlogPosts } from '@db/utils/blog';

import styles from './styles.module.scss';
export default async function BlogPage() {
  const posts = getBlogPosts();
  const p = await getAllBlogPosts();
  return (
    <section className={styles.blogSection}>
      <h1 className={styles.leadText}>Blog</h1>
      <div className={styles.postsContainer}>
        {posts.map((post) => (
          <SummaryCard
            key={post.slug}
            title={post.title}
            summary={post.summary}
            date={post.publishedAt}
            // tags={post.metadata}
          />
        ))}
      </div>
    </section>
  );
}
