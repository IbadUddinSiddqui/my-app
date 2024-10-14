import VideoBackground from "../VideoBackground";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import cssContact from "./page.module.css";

function About() {
  return (
    <>
      <VideoBackground />
      

<div className={cssContact.maincontent}>
      <Header />
      <div className={cssContact.content}>
        <h1 className={cssContact.h1}>This is Contact Page</h1>
        <p className={cssContact.p}>Some description about the page or company.</p>
        </div><Footer />
      </div>

    </>
  );
}

export default About;
