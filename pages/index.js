import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <script defer data-domain="jaspermayone.com" src="https://plausible.jaspermayone.com/js/script.js"></script>
      <Head>
        <title>Jasper Mayone | Site Coming Soon</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          We&rsquo;ll be back soon!
        </h1>
        <div>
          <p>Sorry for the inconvenience but we&rsquo;re performing some maintenance at the moment. If you need to you can always <a href="mailto:#">contact us</a>, otherwise we&rsquo;ll be back online shortly!</p>
          <p>&mdash; The Team</p>
        </div>
      </main>
    </>
  )
}
