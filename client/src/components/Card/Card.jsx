const Card = ({game}) => {
    console.log(game)
    return (
        
        <div>
           <h1>{game.name}</h1>
           <h2>Genres: {game.genres.map(genre => genre.name).join(', ')}</h2>
           <img src={game.image} width='300px' height='auto' alt="Loading..." />
        </div>
    )
}

export default Card