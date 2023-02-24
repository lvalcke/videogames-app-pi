import axios from 'axios';

export const GET_ALLGAMES = 'GET_ALLGAMES'
const url = 'http://localhost:3001'

export const getAllGames = () =>{
    return async (dipatch) => {
        const resp = await axios(`${url}/videogames`)

        return dipatch({
            type: GET_ALLGAMES,
            payload: resp.data
        })
    }
}

