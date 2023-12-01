import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from './styles.module.scss';
import { Button } from '@components/Button';
import classNames from 'classnames';
import { SummaryCard } from '@components/SummaryCard';
import { WorkCard } from '@components/WorkCard';
const introText = `I'm a passionate frontend software engineer dedicated to crafting
seamless and engaging user experiences. With a keen eye for design
and a knack for turning ideas into interactive realities, I thrive
on the ever-evolving challenges of web development. Let's build
something extraordinary together.`;
export default function Home() {
  return (
    <main className={styles.main}>
      <section>
        <div className={classNames(styles.landing, 'container')}>
          <img
            src="/profile.jpg"
            alt="Profile"
            className={styles.landingPhoto}
          />
          <div className={styles.landingTextContainer}>
            <h1 className={styles.landingText}>
              Hi, I am Cole, Frontend Developer
            </h1>
            <div className={styles.landingDesc}>{introText}</div>
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
        <div className="container">
          <div className={styles.postsActions}>
            <div className="section-description">Recent posts</div>
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
      <section>
        <div className="container">
          <div className="section-description">Work experience</div>
          <div className={styles.experienceWrapper}>
            <WorkCard
              title="Juniper Square"
              date="2020"
              description="Modern real estate investrment"
              category="Engineering"
              src="/junipersquare.png"
            />
            <WorkCard
              title="Juniper Square"
              date="2020"
              description="Modern real estate investrment"
              category="Engineering"
              src="/junipersquare.png"
            />
            <WorkCard
              title="Juniper Square"
              date="2020"
              description="Modern real estate investrment"
              category="Engineering"
              src="/junipersquare.png"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
