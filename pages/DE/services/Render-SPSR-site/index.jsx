// import SeviceHeaderEN from '../../../../components/services-header'
import SeviceHeaderEN from '../../../../components/serviceheader-de';
export default function functionEN() {
    // var dates = Date.now()
    console.log("%cFetch status: Green", "color: green; font-size: 25px");
  
    // console.log("It was a success");
    return (
      // test
      <div className="container-div">
        {/* <UberHeaderEN /> */}
        <SeviceHeaderEN/>
        <br />
        <h2 className="Main-h2">Render, SPSR Webseite:</h2>
        <button className='Button'><a target="_blank" rel="noopener noreferrer"   href="https://spsr-ibz.onrender.com/">Link </a></button>
        <p className="ptagmrgin">
        Stand ab 10/01/23 (DD/MM/YY): Online
         <br/>
         Rahmen: React JS
         <br/>
         Hosting-Plattform: Render free
         <br/>
         Domain: https://spsr-ibz.onrender.com/
        </p>
      </div>
    );
  }