function Card({ title, description , image}){

    function handleClick(title){
        console.log("Button clicked!", title);
    }
    return(
        <div className="card">
            <div className="card-content">
                <h3>{title}</h3>
                <img src={image} alt="Card Image" />
                <p>{description}</p>
                <button onClick={()=>handleClick(title)}>Click Me</button>
            </div>
        </div>
    )
}

export default Card;