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
        <h2 className="Main-h2">Vercel, Raus-Nichts Webseite:</h2>
        <button className='Button'><a target="_blank" rel="noopener noreferrer"   href="https://rausnichts.vercel.app/">Link </a></button>
        <p className="ptagmrgin">
        Stand ab 10/01/23 (DD/MM/YY): Online
         <br/>
         Rahmen: Next JS
         <br/>
         Hosting-Plattform: Vercel free
         <br/>
         Domain: https://rausnichts.vercel.app/
        </p>
      </div>
    );
  }