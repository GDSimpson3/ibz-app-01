// import Header from "../components/header";
import Comson from "../../components/commingsoon";
import UberHeaderEN from "../../components/enheader"
import FooterEN from "../../components/footerEN";
import News from "../../components/news";
import NewsEN from "../../components/newsEN";
// import Comson from '../../components/commingsoon'
export default function AboutPage() {
  return (
    <>
    <div className="header-heading">
      <h1><u> Ibz web productions //</u></h1>
      {/* <h3>Ibz.Vercel.App</h3> */}
<UberHeaderEN/>

    </div>
<div className="mainflex">
  <div className="left-box">
<h3><>Newly updated</></h3>
{/* <News/> */}
<Comson url={"https://rausnichts.vercel.app/"} text={"Raus nichts"}/>
<Comson url={"https://ibz.vercel.app/"} text={"New IBZ website layout"}/>
<Comson url={"https://ibz.vercel.app/"} text={"New global components"}/>
<h3><>Comming soon</></h3>
<Comson text={"Text to speach beta"}/>
<Comson text={"Three new client sites"}/>
<Comson text={"IBZ mail"}/>

  </div>
  <div className="right-box">
    <h3>News</h3>
<NewsEN/>

  </div>
</div>
{/* <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /> */}
{/* <FooterEN/> */}
    </>
  );
}