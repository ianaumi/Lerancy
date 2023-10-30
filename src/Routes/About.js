import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import HeroImg from "../Assets/hero.png"

function About(){
    return(
        <>
        <Navbar/>
        <Hero
        heroName="hero-mid"
        heroImage={HeroImg}
        />
        </>
    )
}

export default About;