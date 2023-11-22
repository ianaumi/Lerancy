import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import HeroImg from "../Assets/hero.png"
import Footer from "../Components/Footer";

function About(){
    return(
        <>
        <Navbar/>
        <Hero
        heroName="hero-mid"
        heroImage={HeroImg}
        title="About"
        />
        <Footer/>
        </>
    ) 
}

export default About;