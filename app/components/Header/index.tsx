'use client';

// import React, { useRef } from 'react';
// import Image from 'next/image';
import styles from './styles.module.scss';
// import { motion, useCycle } from 'framer-motion';
// import { useDimensions } from '../../hooks/useDimensions';

// const Path = (props) => (
//   <motion.path
//     fill="transparent"
//     strokeWidth="3"
//     stroke="hsl(0, 0%, 18%)"
//     strokeLinecap="round"
//     {...props}
//   />
// );

// export const MenuToggle = ({ toggle }) => (
//   <button onClick={toggle} className={styles.btnToggle}>
//     <svg width="23" height="23" viewBox="0 0 23 23">
//       <Path
//         variants={{
//           closed: { d: 'M 2 2.5 L 20 2.5' },
//           open: { d: 'M 3 16.5 L 17 2.5' },
//         }}
//       />
//       <Path
//         d="M 2 9.423 L 20 9.423"
//         variants={{
//           closed: { opacity: 1 },
//           open: { opacity: 0 },
//         }}
//         transition={{ duration: 0.1 }}
//       />
//       <Path
//         variants={{
//           closed: { d: 'M 2 16.346 L 20 16.346' },
//           open: { d: 'M 3 2.5 L 17 16.346' },
//         }}
//       />
//     </svg>
//   </button>
// );

// const sidebar = {
//   open: (height = 1000) => ({
//     clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
//     transition: {
//       type: 'spring',
//       stiffness: 20,
//       restDelta: 2,
//     },
//   }),
//   closed: {
//     clipPath: 'circle(30px at 40px 40px)',
//     transition: {
//       delay: 0.5,
//       type: 'spring',
//       stiffness: 400,
//       damping: 40,
//     },
//   },
// };

// const navVariants = {
//   open: {
//     transition: { staggerChildren: 0.07, delayChildren: 0.2 },
//   },
//   closed: {
//     transition: { staggerChildren: 0.05, staggerDirection: -1 },
//   },
// };
// const variants = {
//   open: {
//     y: 0,
//     opacity: 1,
//     transition: {
//       y: { stiffness: 1000, velocity: -100 },
//     },
//   },
//   closed: {
//     y: 50,
//     opacity: 0,
//     transition: {
//       y: { stiffness: 1000 },
//     },
//   },
// };

// const colors = ['#FF008C', '#D309E1', '#9C1AFF', '#7700FF', '#4400FF'];

// export const MenuItem = ({ i }) => {
//   const style = { border: `2px solid ${colors[i]}` };
//   return (
//     <motion.li
//       variants={variants}
//       whileHover={{ scale: 1.1 }}
//       whileTap={{ scale: 0.95 }}
//       className={styles.listItem}
//     >
//       <div className="icon-placeholder" style={style} />
//       <div className="text-placeholder" style={style} />
//     </motion.li>
//   );
// };
// const Navigation = () => (
//   <motion.ul variants={navVariants} className={styles.listContainer}>
//     {itemIds.map((i) => (
//       <MenuItem i={i} key={i} />
//     ))}
//   </motion.ul>
// );

// const itemIds = [0, 1, 2, 3, 4];

// export const Header = () => {
//   const [isOpen, toggleOpen] = useCycle(false, true);
//   const containerRef = useRef(null);
//   const { height } = useDimensions(containerRef);
//   console.log(height);
//   return (
//     <motion.nav
//       className={styles.nav}
//       initial={false}
//       animate={isOpen ? 'open' : 'closed'}
//       custom={height}
//       ref={containerRef}
//     >
//       <motion.div className={styles.background} variants={sidebar} />
//       <Navigation />
//       <MenuToggle toggle={() => toggleOpen()} />
//     </motion.nav>
//   );
// };

import { motion } from 'framer-motion';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const links = [
  { label: 'Home', url: '/' },
  { label: 'About', url: '/about' },
  { label: 'Blog', url: '/blog' },
  { label: 'Contact', url: 'contact' },
];

const active = {
  color: 'white',
};

const inactive = {
  color: 'black',
};

export const Header = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <>
      <nav className={styles.nav}>
        <motion.ul className={styles.listContainer}>
          {links.map(({ label, url }, index) => {
            const isActive = index === activeIndex;

            return (
              <motion.li
                key={index}
                onClick={() => setActiveIndex(index)}
                className={styles.listItem}
              >
                <div
                  onClick={() => setActiveIndex(index)}
                  className={styles.item}
                >
                  {isActive ? (
                    <motion.span layoutId="shadow" className={styles.shadow} />
                  ) : null}
                  <Link href={url} style={isActive ? active : inactive}>
                    {label}
                  </Link>
                </div>
              </motion.li>
            );
          })}
        </motion.ul>
      </nav>
    </>
  );
};

export default Header;
