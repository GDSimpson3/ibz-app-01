import Link from 'next/link'
import FooterEN from "../../../components/footerEN";
// import '../styles'
import HeaderClientEN from '../../../components/client-header-de'
export default function UberHeaderEN() {
  return (
    <header>
      {/* <h1 style={{textAlign:"center"}}>A list of each client website run by IBZ</h1> */}

      {/* <h1 className='heading'><u>Welcome, Please select a language before you continue.</u></h1> */}
      {/* <h1 className='heading'><u>Willkommen, bitte wählen Sie eine Sprache aus, bevor Sie fortfahren.</u></h1> */}
      {/* <hr /> */}
  
<HeaderClientEN/>
      {/* <hr/> */}
      <br /><br /><br />
      {/* <footer>
<FooterEN/></footer> */}
    </header>
  )
}