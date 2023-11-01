import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import HeroImg from "../Assets/HeroImahe.png"

function Home(){
    return(
        <>
        <Navbar/>
        <Hero
        heroName="hero"
        heroImage={HeroImg}
        title="Lerancy"
        text="Explore the web with confidence"
        />
        </>
    )
}

export default Home;