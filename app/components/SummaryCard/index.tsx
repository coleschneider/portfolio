import styles from './styles.module.scss';
import classNames from 'classnames';
import Link from 'next/link';

type Props = {
  id: number;
  title: string;
  date: string;
  tags?: string[];
  summary: string;
};
export const SummaryCard: React.FunctionComponent<Props> = async ({
  id,
  title,
  date,
  tags = [],
  summary,
}) => {
  return (
    <Link className={styles.cardWrapper} href={`/blog/${id}`}>
      <div className={styles.goCorner}>
        <div className={styles.goArrow}>→</div>
      </div>
      <div className={styles.cardTitle}>{title}</div>
      <div className={styles.cardDetails}>
        <div className={styles.date}>{date}</div>
        <span className={styles.separator}>|</span>
        <div className={styles.tags}>{tags.join(', ')}</div>
      </div>
      <div className={styles.cardSummary}>{summary}</div>
    </Link>
  );
};
