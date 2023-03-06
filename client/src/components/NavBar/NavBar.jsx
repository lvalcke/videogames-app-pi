import { NavLink } from "react-router-dom";
import { getAllGames, getGenres } from '../../redux/actions.js';
import { useEffect } from "react";
import { useDispatch } from 'react-redux';



const NavBar = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllGames())
        dispatch(getGenres())
    },[])
    // const onSearch = (name) => {
    //     dispatch(getGamesByName(name))
    // }
    return (
        <div>
            <div>
             <h1>Videojuegos App</h1>
            </div>
            <div>
             <NavLink to='/home' >Home</NavLink>
            </div>
            <div>
             <NavLink to='/createForm' >Crear videojuego</NavLink>
            </div>
            
        </div>
    )
}

export default NavBar