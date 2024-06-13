import React, {useState,useEffect} from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/blogposts.module.css'
import Head from 'next/head'
const Slug = (props) => {
const [blog,setBlog] = useState(props.myprops)
return (
    <div className={styles.container}>
    <Head>
    <title>{blog && blog.title}</title>
    <meta name='description' content={blog && blog.description} />
    </Head>
      <h1 className={styles.title}>{blog && blog.title}</h1>
    <hr />
    <p className={styles.description}>{blog && blog.description}</p>
    <p className={styles.content}>{blog && blog.content}</p>
    <p className={styles.author}>{blog && blog.author}</p>
    </div>
  )
}

export async function getServerSideProps(context){
  const {Slug} = context.query
  const string = 'http://localhost:3000/api/getblog?slug='+Slug
  const data = await fetch(string)
  const myprops = await data.json()
    return{
  props:{myprops},
  }

}

export default Slug