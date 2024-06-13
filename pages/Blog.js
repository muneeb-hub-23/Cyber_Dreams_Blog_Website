import React, { useEffect, useState } from 'react'
import styles from '../styles/blogposts.module.css'
import Link from 'next/link'


const Blog = (props) => {
const [blogs,setBlogs] = useState(props.myprops)

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

export async function getServerSideProps(context){

   let data = await fetch('http://localhost:3000/api/blogs')
   let myprops = await data.json()
   return {
    props: {myprops},
   }
}
export default Blog