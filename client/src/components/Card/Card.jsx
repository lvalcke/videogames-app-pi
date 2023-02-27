import styled from 'styled-components';

const Card = ({game}) => {
    return (
        
        <div>
           <h1>{game.name}</h1>
           <h2>Genres: {game.genres}</h2>
           <img src={game.image} width='300px' height='auto' alt="Loading..." />
        </div>
    )
}

const StyledCard = styled.div`
width: 450px;
`;

export default Card