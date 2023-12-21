import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import HeroImg from "../Assets/hero.png"
import Footer from "../Components/Footer";
import Resources from "../Components/Resources";




function ResourcesPage(){
    return(
        <>
        <Navbar />
        <Hero 
        heroName="hero"
        heroImage={HeroImg}
        title="Resources"
        />
        <Resources/>

        
        <Footer/>
        </>
    )
}

export default ResourcesPage;