import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <script defer data-domain="singlefeather.com" data-api="/subdirectory/api/event" src="/subdirectory/js/script.js"></script>

      <Head>
        <title>Single Feather | Under Construction</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          🚧 Site Under Construction... 🚧
        </h1>
        <Image
          src="https://s3.singlefeather.com/cdn/gifs/minionsslap-gif-4519908.gif"
          alt="Minions Engineering GIF"
          width={500}
          height={277}
        />
        <div>
          <p>Sorry for the inconvenience but we&rsquo;re performing some maintenance at the moment. If you need to you can always <a href="mailto:webmaster@singlefeather.com">contact us (click here)</a>, otherwise we&rsquo;ll be back online shortly!</p>
          <p>~ The Web & Development Team @ Single Feather LLC</p>
        </div>
        <footer className={styles.footer}>
          <a
            href="https://singlefeather.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <span className={styles.logo}>
              <Image src="/vercel.svg" alt="Single Feather Logo" width={72} height={16} />
            </span>
          </a>
        </footer>
      </main>
    </>
  )
}
