import Link from 'next/link'
// import '../styles'
export default function HeaderEN() {
  return (
    <header>
      <h1 style={{textAlign:"center"}}>Status of each service run by IBZ</h1>

      {/* <h1 className='heading'><u>Welcome, Please select a language before you continue.</u></h1> */}
      {/* <h1 className='heading'><u>Willkommen, bitte wählen Sie eine Sprache aus, bevor Sie fortfahren.</u></h1> */}
      <hr />
  
     
      <Link href="/EN/services/Render-SPSR-site" >
        <button className='Button'>SPSR-ENT-Site</button>
      </Link>
  
      <Link href="/EN/services/Render-Blog-site" >
          <button className='Button'>Render-Blog-site</button>
      </Link>
    
    
      <Link href="/EN/services/Vercel-IBZ-site" >
          <button className='Button'>Vercel-IBZ-site</button>
      </Link>
      <Link href="/EN/services/Vercel-rausNichts" >
          <button className='Button'>Raus nichts site</button>
      </Link>
      <hr/>

    </header>
  )
}