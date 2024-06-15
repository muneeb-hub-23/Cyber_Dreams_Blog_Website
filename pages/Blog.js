import React, { useEffect, useState } from 'react'
import styles from '../styles/blogposts.module.css'
import Link from 'next/link'
import InfiniteScroll from 'react-infinite-scroll-component';
import Image from 'next/image';

const Blog = (props) => {
const [blogs,setBlogs] = useState(props.myprops)
const [end,setEnd] = useState(7)
const [hasMore,setHasMore] = useState(true)
const fetchMoreData = async () => {
  setTimeout(async () => {
    let link = `http://localhost:3000/api/blogs/?end=${end}`
    let newblogs = await fetch(link)
    newblogs = await newblogs.json()
    if(newblogs.length === blogs.length){
      setHasMore(false)
    }else{
      setBlogs(newblogs)
      setEnd(end+2)
    }

  }, 1000);
};
  return (
<div className={styles.content}>


<InfiniteScroll
    dataLength={blogs.length}
    next={fetchMoreData}
    hasMore={hasMore}
    loader={<Image src={'/Skateboarding.gif'} alt='loading image' width={50} height={50} />}
    endMessage={<p>Blogs End</p>}
  >
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
  </InfiniteScroll>


</div>
  )
}

export async function getServerSideProps(context){

   let data = await fetch('http://localhost:3000/api/blogs/?end=3')
   let myprops = await data.json()
   return {
    props: {myprops},
   }
}
export default Blog