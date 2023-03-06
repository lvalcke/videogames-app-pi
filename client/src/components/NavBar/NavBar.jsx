import { NavLink, useNavigate,useLocation } from "react-router-dom";
import { getAllGames, getGamesByName, getGenres } from '../../redux/actions.js';
import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import SearchBar from '../SearchBar/SearchBar.jsx'
import styled from "styled-components";


const NavBar = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()
    useEffect(() => {
        dispatch(getAllGames())
        dispatch(getGenres())
    },[])
    const onSearch = (name) => {
        dispatch(getGamesByName(name))
        navigate('/home')
    }
    
    return (
        <StyledNav style={{display: location.pathname==='/'? 'none': 'flex'}}>
            <div>
             <h1>Videojuegos App</h1>
            </div>
            <div>
             <NavLink className='navLink' to='/home' >Home</NavLink>
            </div>
            <div>
             <NavLink className='navLink' to='/createForm' >Crear videojuego</NavLink>
            </div>
            <div>
             <SearchBar onSearch={onSearch}/>         
            </div>
        </StyledNav>
    )
}

const StyledNav = styled.div`
    align-items: center;
    justify-content: space-around;
    color: #740496;
    background-color: #222222;
    .navLink {
        font-size: 30px;
        font-weight: bold;
        text-decoration: none;
    }
`

export default NavBar