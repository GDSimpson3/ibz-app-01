import Link from 'next/link'
// import '../styles'
export default function UberHeaderHOME() {
  return (
    <header>

      {/* <h1 className='heading'><u>Welcome, Please select a language before you continue.</u></h1> */}
      {/* <h1 className='heading'><u>Willkommen, bitte wählen Sie eine Sprache aus, bevor Sie fortfahren.</u></h1> */}
      <hr />
      <Link href="/EN" >
        <button className='Button'>English</button>
      </Link>
      <Link href="/DE" >
          <button className='Button'>Deutsch</button>
      </Link>
      <hr/>
      <h1 className='animationheader'></h1>

    </header>
  )
}