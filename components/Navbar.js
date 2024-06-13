import React from 'react'
import styles from "../styles/page.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
    <ul>
      <li><Link className={styles.link} href={'/Index'}>Home</Link></li>
      <li><Link className={styles.link} href={'/About'}>About</Link></li>
      <li><Link className={styles.link} href={'/Blog'}>Blog</Link></li>
      <li><Link className={styles.link} href={'/Contact'}>Contact</Link></li>
    </ul>
  </nav>
  )
}

export default Navbar