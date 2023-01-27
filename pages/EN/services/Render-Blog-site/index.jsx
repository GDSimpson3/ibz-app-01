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
        <h2 className="Main-h2">Render, Blog site:</h2>
        <button className='Button'><a target="_blank" rel="noopener noreferrer"   href="https://blogs-ibzspsrprod.onrender.com/">Link </a></button>
        <p className="ptagmrgin">
         Status as of 10/01/23 (DD/MM/YY): Suspended by IBZ
         <br/>
         Framework: React JS
         <br/>
         Hosting platform: Render free
         <br/>
         Domain: https://blogs-ibzspsrprod.onrender.com/
        </p>
      </div>
    );
  }