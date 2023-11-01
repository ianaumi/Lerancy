import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import HeroImg from "../Assets/HeroImahe.png"


function Resources(){
    return(
        <>
        <Navbar />
        <Hero 
        heroName="hero"
        heroImage={HeroImg}
        title="Resources"
        />
        </>
    )
}

export default Resources;