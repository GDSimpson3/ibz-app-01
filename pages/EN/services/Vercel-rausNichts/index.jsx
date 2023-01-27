import SeviceHeaderEN from '../../../../components/services-header'
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
        <h2 className="Main-h2">Vercel, Raus-Nichts site:</h2>
        <button className='Button'><a target="_blank" rel="noopener noreferrer"   href="https://rausnichts.vercel.app/">Link </a></button>
        <p className="ptagmrgin">
         Status as of 10/01/23 (DD/MM/YY): Online
         <br/>
         Framework: Next JS
         <br/>
         Hosting platform: Vercel free
         <br/>
         Domain: https://rausnichts.vercel.app/
        </p>
      </div>
    );
  }