import { useSelector } from "react-redux"
import { useState,useEffect } from "react";
import Cards from '../Cards/Cards.jsx'


const Home = () => {
    
    let allGames = useSelector(state => state.allGames);
    let gamesByName = useSelector(state => state.gamesByName);

    const [ games, setGames ] = useState([])

    useEffect(() => {
        if(gamesByName.length){
            setGames(gamesByName)
        }else if(allGames.length){
            setGames(allGames)
        }
        
    },[allGames,gamesByName])   

    
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
            <Cards games={games}/>
        </div>
    )
}

export default Home;