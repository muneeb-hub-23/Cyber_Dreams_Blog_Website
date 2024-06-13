import React from 'react'
import styles from '../styles/blogposts.module.css'
import Link from 'next/link'


const Blog = () => {


  return (
    <div>
            <div className={styles.content}>
              <Link className={styles.link} href={'/blogposts/How to build AI'}>
              <div className={styles.blog}>
                <h3>How to build AI</h3>
                <p>In This blog i will teach you Next JS from 0 to 100</p>
              </div></Link>
              <Link className={styles.link} href={'/blogposts/How to build Web Apps'}>
              <div className={styles.blog}>
                <h3>How to build Web Apps</h3>
                <p>In This blog i will teach you Next JS from 0 to 100</p>
              </div></Link>
              <Link className={styles.link} href={'/blogposts/How to build Softwares'}>
              <div className={styles.blog}>
                <h3>How to build Softwares</h3>
                <p>In This blog i will teach you Next JS from 0 to 100</p>
              </div></Link>
            </div>
    </div>
  )
}

export default Blog