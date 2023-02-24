import { useSelector } from "react-redux"
import Cards from '../Cards/Cards.jsx'

const Home = () => {
    const allGames = useSelector(state => state.allGames);
    return (
        <div>
            <Cards games={allGames}/>
        </div>
    )
}

export default Home