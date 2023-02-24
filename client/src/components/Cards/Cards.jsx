import Card from '../Card/Card.jsx'


const Cards = ({ games }) => {
    return (
        <div>
            { games.length ? games.map(game => <Card game={game} key={game.id}/>) : <p>Loading...</p>}
        </div>
    )
}

export default Cards