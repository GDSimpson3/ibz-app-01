import Link from 'next/link'
// import '../styles'
export default function PersonalHeaderEN() {
  return (
    <header>
      <h1 style={{textAlign:"center"}}>A list of each Personal website run by IBZ</h1>

      {/* <h1 className='heading'><u>Welcome, Please select a language before you continue.</u></h1> */}
      {/* <h1 className='heading'><u>Willkommen, bitte wählen Sie eine Sprache aus, bevor Sie fortfahren.</u></h1> */}
      <hr />
  
      <Link href="/EN/personal/Railway-GS-site" >
          <button className='Button'>Railway-Personal-site</button>
      </Link>
    
      <Link href="/EN/personal/Render-GS-site" >
          <button className='Button'>Render-Personal-site</button>
      </Link>
   
      <Link href="/EN/personal/Heroku-GS-site" >
          <button className='Button'>Heroku-Personal-site</button>
      </Link>
      <Link href="/EN/personal/Vercel-GS-site" >
          <button className='Button'>Vercel-Personal-site</button>
      </Link>
     
      <hr/>

    </header>
  )
}