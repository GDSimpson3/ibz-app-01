import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import UberHeaderHOME from '../components/header'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Ibz website </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Warning, this app is not constantly updating, please use the website: </h1>
      <h1>Achtung, diese App wird nicht ständig aktualisiert, bitte verwenden Sie die Website:</h1>
       < a href="https://ibz.vercel.app"><h1>CLICK HERE: ibz.vercel.app</h1></a>
       < a href="https://ibz.vercel.app"><h1>KLICKE HIER: ibz.vercel.app</h1></a>
<h1>26/01/23</h1>
      <br /><br /><br /><br />
    <UberHeaderHOME/>
    </>
  )
}
