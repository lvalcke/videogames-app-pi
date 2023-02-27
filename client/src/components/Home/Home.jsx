import { useSelector } from "react-redux"
import Cards from '../Cards/Cards.jsx'

const Home = () => {
    let allGames = useSelector(state => state.allGames);
    allGames = allGames.map(game => {
        return {
         ...game,
         genres: game.genres.map(genre => genre.name).join(', ')
        }   
     })
    return (
        <div>
            <Cards games={allGames}/>
        </div>
    )
}

export default Home