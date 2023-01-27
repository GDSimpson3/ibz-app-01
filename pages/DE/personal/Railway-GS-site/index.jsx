// import UberHeaderEN from "../../../components/enheader";
import PersonalHeaderEN from "../../../../components/personal-header"

export default function functionEN() {
    // var dates = Date.now()
    console.log("%cFetch status: Green", "color: green; font-size: 25px");
  
    // console.log("It was a success");
    return (
      // test
      <div className="container-div">
        {/* <UberHeaderEN /> */}
        <PersonalHeaderEN/>
        <br />
        <h2 className="Main-h2">Railway, Persönliche Webseite:</h2>
        <button className='Button'><a target="_blank" rel="noopener noreferrer"   href="https://ibzspsrprod.up.railway.app/">Link </a></button>
        <p className="ptagmrgin">
         stand ab 10/01/23 (DD/MM/YY): Suspended
         <br/>
         Rahman: React JS
         <br/>
         Hosting-Plattform: Railway free
         <br/>
         Domain: https://ibzspsrprod.up.railway.app/
        </p>
      </div>
    );
  }