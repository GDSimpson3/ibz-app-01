// import UberHeaderEN from "../../../../components/enheader";


// export default function functionEN() {
//     // var dates = Date.now()
//     console.log("%cFetch status: Green", "color: green; font-size: 25px");
  
//     // console.log("It was a success");
//     return (
//       // test
//       <div className="container-div">
//         <UberHeaderEN />
//         <br />
//         <h2 className="Main-h2">Heroku, Personal website:</h2>
//         <button className='Button'><a target="_blank" rel="noopener noreferrer"   href="https://lbzspsrprod.herokuapp.com/">Link </a></button>
//         <p className="abtmep">
//          Status as of 10/01/23 (DD/MM/YY): Suspended
//          <br/>
//          Framework: React
//          <br/>
//          Hosting platform: Heroku free tier (prior to the 28th november)
//          <br/>
//          Domain: https://lbzspsrprod.herokuapp.com/
//         </p>
//       </div>
//     );
//   }
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
        <h2 className="Main-h2">Heroku, Personal website:</h2>
        <button className='Button'><a target="_blank" rel="noopener noreferrer"   href="https://lbzspsrprod.herokuapp.com/">Link </a></button>
        <p className="ptagmrgin">
         Status as of 10/01/23 (DD/MM/YY): Suspended
         <br/>
         Framework: React JS
         <br/>
         Hosting platform: Heroku free tier (prior to the 28th november)
         <br/>
         Domain: https://lbzspsrprod.herokuapp.com/
        </p>
      </div>
    );
  }