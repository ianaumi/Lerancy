function ResourcesData (props) {
    return(
        <div className="card">
            <div className="image">
                <img src={props.image} alt="image"/>
            </div>
            <h4>{props.heading}</h4>
            <p>{props.text}</p>
        </div>
    )
}

export default ResourcesData;

