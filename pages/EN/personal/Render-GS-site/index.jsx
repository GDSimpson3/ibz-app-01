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
        <h2 className="Main-h2">Render, Personal website:</h2>
        <button className='Button'><a target="_blank" rel="noopener noreferrer"   href="https://ibzspsrprod.onrender.com/">Link </a></button>
        <p className="ptagmrgin">
         Status as of 10/01/23 (DD/MM/YY): Online
         <br/>
         Framework: React JS
         <br/>
         Hosting platform: Render free
         <br/>
         Domain: https://ibzspsrprod.onrender.com/
        </p>
      </div>
    );
  }