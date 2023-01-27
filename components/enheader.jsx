import Link from 'next/link'
// import '../styles'
export default function UberHeaderEN() {
  return (
    <header>
      {/* <h1 style={{textAlign:"center"}}>Please Select what type of website you would like to view</h1> */}

      {/* <h1 className='heading'><u>Welcome, Please select a language before you continue.</u></h1> */}
      {/* <h1 className='heading'><u>Willkommen, bitte wählen Sie eine Sprache aus, bevor Sie fortfahren.</u></h1> */}
      {/* <hr /> */}
  
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
       <Link href="/EN/clients" >
          <button className='Button'>Client sites</button>
      </Link>
      <Link href="/EN/personal" >
        <button className='Button'>Personal sites</button>
      </Link>
      <Link href="/EN/services" >
          <button className='Button'>Services</button>
      </Link>
     
      {/* <hr/> */}
      {/* <Link href="/EN/clients" >
          <>Client sites</> 
      </Link>
      <Link href="/EN/personal" >
        <>Personal sites</>
      </Link>
      <Link href="/EN/services" >
          <>Services</>
      </Link> */}
     

    </header>
  )
}