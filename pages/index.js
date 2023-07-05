import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>kadxpress</title>
        <meta name="description" content="Best courier service company" />
        <link rel="icon" href="/rob.png" />
      </Head>

      <main className="">
        kadxpress property here!
        Goto <Link href="https://kadxpress.com" legacyBehavior>Home</Link>
      </main>

      
    </div>
  )
}
