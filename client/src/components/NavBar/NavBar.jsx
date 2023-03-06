import { NavLink, useNavigate } from "react-router-dom";
import { getAllGames, getGamesByName, getGenres } from '../../redux/actions.js';
import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import SearchBar from '../SearchBar/SearchBar.jsx'


const NavBar = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        dispatch(getAllGames())
        dispatch(getGenres())
    },[])
    const onSearch = (name) => {
        dispatch(getGamesByName(name))
        navigate('/home')
    }
    
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
            <div>
             <SearchBar onSearch={onSearch}/>         
            </div>
        </div>
    )
}

export default NavBar