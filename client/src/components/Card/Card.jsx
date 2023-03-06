import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Card = ({game}) => {
    return (
        <Link to={`/detail/${game.id}`}>
        <div>
           <h1>{game.name}</h1>
           <h2>Genres: {game.genres}</h2>
           <img src={game.background_image} width='300px' height='auto' alt="Loading..." />
        </div>        
        </Link>
    )
}

const StyledCard = styled.div`
width: 450px;
`;

export default Card