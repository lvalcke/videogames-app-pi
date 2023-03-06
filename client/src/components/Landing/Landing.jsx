import { useNavigate } from "react-router-dom"
import styled from "styled-components";

const Landing = () => {
    const navigate = useNavigate();
    
    return (
        <StyledLanding>
            <button onClick={() => navigate('/home')}>START</button>
        </StyledLanding>
    )
}

const StyledLanding = styled.div`
    background-image: url('https://wallpaper.dog/large/10927286.jpg');
    background-size: cover;
    height: 100vh;
    width: 100%;
    box-sizing: content-box;
    display: flex;
    justify-content: center;
    align-items: center;
    button {
        font-size: 35px;
        background-color: #740496;
        width: 130px;
        height: 130px;
        border-radius: 50%;
        font-weight: bold;
    }
    button:hover {
        background-color: #54036d;
        cursor: pointer;
    }
`

export default Landing