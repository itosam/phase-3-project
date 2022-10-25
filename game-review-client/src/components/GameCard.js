
const GameCards = ({id, title, price, image, genre}) => {
    return(
        <div>
            <h1>{title}</h1>
            <img src={image} alt={title}/>
            <p>{genre}</p>
            <p>{price}</p>
        </div>
    )
}

export default GameCards