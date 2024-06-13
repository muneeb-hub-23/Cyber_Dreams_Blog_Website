import React, {useState,useEffect} from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/blogposts.module.css'
import Head from 'next/head'
const Slug = () => {
  const router = useRouter()
  const {Slug} = router.query

  const [blog,setBlog] = useState([])
useEffect(()=>{
  fetch('http://localhost:3000/api/getblog?slug='+Slug).then((data)=>{
    return data.json();
  }).then((parsed)=>{
    setBlog(parsed)

  })
},[])
  return (
    <div className={styles.container}>
    <Head>
    <title>{blog.title}</title>
    <meta name='description' content={blog.description} />
    </Head>
      <h1 className={styles.title}>{blog.title}</h1>
    <hr />
    <p className={styles.description}>{blog.description}</p>
    <p className={styles.content}>{blog.content}</p>
    <p className={styles.author}>{blog.author}</p>
    </div>
  )
}

export default Slug