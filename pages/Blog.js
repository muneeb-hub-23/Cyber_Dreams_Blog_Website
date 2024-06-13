import React, { useEffect, useState } from 'react'
import styles from '../styles/blogposts.module.css'
import Link from 'next/link'


const Blog = () => {
const [blogs,setBlogs] = useState([])
useEffect(()=>{
  fetch('http://localhost:3000/api/blogs').then((data)=>{
    return data.json();
  }).then((parsed)=>{
    setBlogs(parsed)
  })
},[])

  return (
<div className={styles.content}>
      {blogs.map((blog)=>(
        <div key={blog.title}>
          <Link className={styles.link} href={`/blogposts/${blog.title}`}>
          <div className={styles.blog}>
            <h3>{blog.title}</h3>
            <p>{blog.description}</p>
          </div>
          </Link></div>
        ))
      }
</div>
  )
}

export default Blog