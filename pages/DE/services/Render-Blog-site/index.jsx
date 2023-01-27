// import SeviceHeaderEN from '../../../../components/services-header'
// import SeviceHeaderEN from '../../../../components/serviceheader-de';
import seviceHeaderEN from "../../../../components/services-header";
import SeviceHeaderDE from "../../../../components/serviceheader-de";
export default function functionEN() {
    // var dates = Date.now()
    console.log("%cFetch status: Green", "color: green; font-size: 25px");
  
    // console.log("It was a success");
    return (
      // test
      <div className="container-div">
        {/* <UberHeaderEN /> */}
        <SeviceHeaderDE/>
        <br />
        <h2 className="Main-h2">Render, Blog Webseite:</h2>
        <button className='Button'><a target="_blank" rel="noopener noreferrer"   href="https://blogs-ibzspsrprod.onrender.com/">Link </a></button>
        <p className="ptagmrgin">
        Stand ab 10/01/23 (DD/MM/YY): Suspended by IBZ
         <br/>
         Rahmen: React JS
         <br/>
         Hosting-Plattform: Render free
         <br/>
         Domain: https://blogs-ibzspsrprod.onrender.com/
        </p>
      </div>
    );
  }