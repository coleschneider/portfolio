import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from './styles.module.scss';
import { Button } from 'components/Button';
import classNames from 'classnames';
import { SummaryCard } from 'components/SummaryCard';
export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.landingSection}>
        <div className={classNames(styles.landing, styles.sectionContainer)}>
          <img
            src="/profile.jpg"
            alt="Profile"
            className={styles.landingPhoto}
          />
          <div className={styles.landingTextContainer}>
            <h1 className={styles.landingText}>
              Hi, I am Cole, Creative Frontend Developer
            </h1>
            <div className={styles.landingDesc}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </div>
            <div className={styles.downloadBtnWrapper}>
              <Button
                target="_blank"
                to={'/Cole Schneider - Resume.pdf'}
                variant="primary"
                className={styles.downloadBtn}
              >
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.postsSection}>
        <div className={styles.sectionContainer}>
          <div className={styles.postsActions}>
            <div className={styles.recent}>Recent posts</div>
            <div className={styles.viewAll}>View all</div>
          </div>
          <div className={styles.cardsWrapper}>
            <SummaryCard
              title="Making a design system from scratch"
              date="12 Feb 2020"
              tags={['Design', 'Patterns']}
              summary="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
            />
            <SummaryCard
              title="Creating pixel perfect icons in Figma"
              date="12 Feb 2020"
              tags={['Design', 'Patterns']}
              summary="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
            />
          </div>
        </div>
      </section>
    </main>
  );
}
