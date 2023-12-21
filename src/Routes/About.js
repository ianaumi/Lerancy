import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import HeroImg from "../Assets/hero.png"
import Footer from "../Components/Footer";
import AboutUs from "../Components/AboutUs";


function About(){
    return(
        <>
        <Navbar/>
        <Hero
        heroName="hero-mid"
        heroImage={HeroImg}
        title="About"
        />
        <AboutUs/>
        <Footer/>
        </>
    ) 
}

export default About;