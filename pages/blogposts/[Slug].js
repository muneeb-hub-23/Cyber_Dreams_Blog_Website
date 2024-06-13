import React from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/blogposts.module.css'
const Slug = () => {
  const router = useRouter()
  const {Slug} = router.query
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{Slug}</h1>
    <hr />
    <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. In est porro sunt odit eius iste id expedita quia aliquam enim sapiente, et odio. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum ad error exercitationem consequatur distinctio facilis, labore explicabo ipsa ipsam, fugit neque reiciendis eum quibusdam repellat, laborum et enim! Quod autem nobis rerum nemo doloribus fugit saepe voluptas! Dolor explicabo enim minima dolores repudiandae temporibus quibusdam?</p>
    </div>
  )
}

export default Slug