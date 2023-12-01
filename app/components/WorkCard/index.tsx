import React from 'react';
import styles from './styles.module.scss';
type Props = {
  date: string;
  category: string;
  title: string;
  description: string;
  src: string;
};
export const WorkCard: React.FunctionComponent<Props> = ({
  src,
  description,
  title,
  date,
  category,
}) => {
  return (
    <div className={styles.wrapper}>
      <img src={src} alt="" className={styles.workImage} />
      <div className={styles.workDescWrapper}>
        <div className={styles.title}>{title}</div>
        <div className={styles.detailsWrapper}>
          <div className={styles.date}>{date}</div>
          <div className={styles.category}>{category}</div>
        </div>
        <div className={styles.description}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </div>
      </div>
    </div>
  );
};
