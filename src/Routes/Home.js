import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import HeroImg from "../Assets/hero.png"
import Introduction from "../Components/Introduction";
import Resources from "../Components/Resources";
import Promoting from "../Components/Promoting";
import Footer from "../Components/Footer";

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
        <Introduction/>
        <Resources/>
        <Promoting/>
        <Footer/>
        </>
    )
}

export default Home;