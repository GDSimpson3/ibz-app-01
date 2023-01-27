import Link from 'next/link'
// import '../styles'
export default function UberHeaderEN() {
  return (
    <header>
      <h1 style={{textAlign:"center"}}>
Bitte wählen Sie aus, welche Art von Website Sie anzeigen möchten</h1>

      {/* <h1 className='heading'><u>Welcome, Please select a language before you continue.</u></h1> */}
      {/* <h1 className='heading'><u>Willkommen, bitte wählen Sie eine Sprache aus, bevor Sie fortfahren.</u></h1> */}
      <hr />
  
      {/* <Link href="/EN/Railway-GS-site" >
          <button className='Button'>Railway-Personal-site</button>
      </Link>
      <Link href="/EN/Render-SPSR-site" >
        <button className='Button'>SPSR-ENT-Site</button>
      </Link>
      <Link href="/EN/Render-GS-site" >
          <button className='Button'>Render-Personal-site</button>
      </Link>
      <Link href="/EN/Render-Blog-site" >
          <button className='Button'>Render-Blog-site</button>
      </Link>
      <Link href="/EN/Heroku-GS-site" >
          <button className='Button'>Heroku-Personal-site</button>
      </Link>
      <Link href="/EN/Vercel-GS-site" >
          <button className='Button'>Vercel-Personal-site</button>
      </Link>
      <Link href="/EN/Vercel-IBZ-site" >
          <button className='Button'>Vercel-IBZ-site</button>
      </Link> */}
       <Link href="/DE/clients" >
          <button className='Button'>Klient(in) Websites</button>
      </Link>
      <Link href="/DE/personal" >
        <button className='Button'>Persönlich Websites</button>
      </Link>
      <Link href="/DE/services" >
          <button className='Button'>Dienstleistungen</button>
      </Link>
     
      <hr/>

    </header>
  )
}