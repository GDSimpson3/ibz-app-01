import Link from 'next/link'
import PersonalHeaderEN from '../../../components/personal-header-de'
// import '../styles'
export default function UberHeaderEN() {
  return (
    <header>
      {/* <h1 style={{textAlign:"center"}}>A list of each Personal website run by IBZ</h1> */}

      {/* <h1 className='heading'><u>Welcome, Please select a language before you continue.</u></h1> */}
      {/* <h1 className='heading'><u>Willkommen, bitte wählen Sie eine Sprache aus, bevor Sie fortfahren.</u></h1> */}
      {/* <hr /> */}
  
      {/* <Link href="/EN/Railway-GS-site" >
          <button className='Button'>Railway-Personal-site</button>
      </Link>
    
      <Link href="/EN/Render-GS-site" >
          <button className='Button'>Render-Personal-site</button>
      </Link>
   
      <Link href="/EN/Heroku-GS-site" >
          <button className='Button'>Heroku-Personal-site</button>
      </Link>
      <Link href="/EN/Vercel-GS-site" >
          <button className='Button'>Vercel-Personal-site</button>
      </Link>
      */}
      <PersonalHeaderEN/>
      {/* <hr/> */}

    </header>
  )
}