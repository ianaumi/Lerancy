import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import HeroImg from "../Assets/hero.png"
import Footer from "../Components/Footer";

function Resources(){
    return(
        <>
        <Navbar />
        <Hero 
        heroName="hero"
        heroImage={HeroImg}
        title="Resources"
        />
        <Footer/>
        </>
    )
}

export default Resources;