import Link from 'next/link'
// import '../styles'
export default function HeaderClientEN() {
  return (
    <header>
      <h1 style={{textAlign:"center"}}>A list of each client website run by IBZ</h1>

      {/* <h1 className='heading'><u>Welcome, Please select a language before you continue.</u></h1> */}
      {/* <h1 className='heading'><u>Willkommen, bitte wählen Sie eine Sprache aus, bevor Sie fortfahren.</u></h1> */}
      <hr />
  
      <button className='Button'><a target="_blank" rel="noopener noreferrer"   href="https://tenor.com/en-GB/view/empty-shelves-john-travolta-confused-where-huh-gif-16456244">Link (external)</a></button>
      <button className='Button'><a target="_blank" rel="noopener noreferrer"   href="https://tenor.com/en-GB/view/fresh-prince-room-empty-alone-will-s-mith-gif-11321840">Link (external)</a></button>

      <hr/>

    </header>
  )
}