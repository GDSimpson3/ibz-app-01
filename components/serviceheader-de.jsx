import Link from 'next/link'
// import '../styles'
export default function seviceHeaderDE() {
  return (
    <header>
      <h1 style={{textAlign:"center"}}>Status jedes von IBZ betriebenen Dienstes
</h1>

      {/* <h1 className='heading'><u>Welcome, Please select a language before you continue.</u></h1> */}
      {/* <h1 className='heading'><u>Willkommen, bitte wählen Sie eine Sprache aus, bevor Sie fortfahren.</u></h1> */}
      <hr />
  
     
      <Link href="/DE/services/Render-SPSR-site" >
        <button className='Button'>SPSR-ENT-Siete</button>
      </Link>
  
      <Link href="/DE/services/Render-Blog-site" >
          <button className='Button'>Render-Blog-siete</button>
      </Link>
    
    
      <Link href="/DE/services/Vercel-IBZ-site" >
          <button className='Button'>Vercel-IBZ-siete</button>
      </Link>
      <hr/>

    </header>
  )
}