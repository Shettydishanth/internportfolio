
import About from "./About";
import Myself from "./Myself";
import Skills from "./Skills";
import Project from "./Project";
import Contact from "./Contact";
import Footer from "./Footer";

function Home(){
    return (
        <>
        
        <Myself/>
        { <About/> }
        <Skills/>
        { <Project/> }
        <Contact/>
        <Footer/>
        </>
    )
}
export default Home;