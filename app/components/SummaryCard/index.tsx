import styles from './styles.module.scss';
import classNames from 'classnames';
type Props = {
  title: string;
  date: string;
  tags: string[];
  summary: string;
};
export const SummaryCard: React.FunctionComponent<Props> = ({
  title,
  date,
  tags,
  summary,
}) => {
  return (
    <div className={styles.cardWrapper}>
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
    </div>
  );
};
