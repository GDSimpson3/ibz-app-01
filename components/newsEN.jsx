// import News from "./news";

import { Inter } from '@next/font/google'

import News from '../components/news'
const inter = Inter({ subsets: ['latin'] })

export default function NewsEN() {
  return (
    <>
 
  


<News name={'New App!'} text={'The brand new App is here!'} date={"10/23/2"} />
<News name={'German? old?'} text={'Sorry german, we will update you soon'} date={"10/01/23"} />
<News name={'News!'} text={'The brand new News look!'} date={"10/01/23"} />
<News name={'Footer?'} text={'The brand new Footer is here (scroll for "here")'} date={"05/01/23"} />
<News name={'New website'} text={'You are viewing the brand new website'} date={"31/12/22"} />

    </>
  )
}
