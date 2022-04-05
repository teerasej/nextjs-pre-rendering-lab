import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Hello from '../components/hello'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
        <Hello/>
        <Link href={'/StaticGenerationPost'}>Static Generation</Link>
    </div>
  )
}

export default Home
