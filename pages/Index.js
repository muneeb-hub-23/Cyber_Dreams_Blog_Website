import React from 'react'
import styles from "../styles/page.module.css";
import Image from "next/image";
import Navbar from '@/components/Navbar';
const Index = () => {
  return (
    <div className={styles.main}>
        <h1 className={styles.heading1}>Cyber Dreams</h1>
    <p>This Blog is Made By Muneeb Baig To Update You About Latest Tech</p>
    <Image className={styles.logoimage} src='/logo.png' alt='Logo For Cyber' width={200} height={200} priority='lazyOnLoad'/>

        </div>
  )
}

export default Index