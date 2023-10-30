import './HeroStyles.css';

function Hero(props){
    return(<>
        <div className={props.heroName}>
            <img alt="HeroImg" src={props.heroImage}/>
        </div>

        <div className="hero-text">
            <h1>{props.title}</h1>
            <p>{props.text}</p>
        </div>
        </>
    )
}

export default Hero;