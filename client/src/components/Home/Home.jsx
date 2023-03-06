import { useSelector } from "react-redux"
// import { useState } from "react";
import Cards from '../Cards/Cards.jsx'


const Home = () => {
    
    let allGames = useSelector(state => state.allGames);
    
    // let gamesByName = useSelector(state => state.gamesByName);
    // const [ games, setGames ] = useState([])
    // console.log(gamesByName)
    
    // if(!gamesByName && !games.length) { 
    //         setGames(allGames.map(game => {
    //         return {
    //          ...game,
    //          genres: game.genres.map(genre => genre.name).join(', ')
    //         }   
    //      }))}
         
    // const handleSettingGames = () => {
    //         setGames(gamesByName.map(game => {
    //             return {
    //             ...game,
    //             genres: game.genres.map(genre => genre.name).join(', ')
    //             }
    //         }))
// }
     
    return (
        <div>
            <Cards games={allGames}/>
        </div>
    )
}

export default Home;