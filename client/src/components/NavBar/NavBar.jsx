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
    return (
        <div>
            <h1>Videojuegos App</h1>
            <NavLink to='/home' >Home</NavLink>
            <NavLink to='/createForm' >Crear videojuego</NavLink>
        </div>
    )
}

export default NavBar