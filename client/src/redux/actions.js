import axios from 'axios';

export const GET_ALLGAMES = 'GET_ALLGAMES'
export const GET_GENRES = 'GET_GENRES'
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

export const getGenres = () =>{
    return async (dipatch) => {
        const resp = await axios(`${url}/genres`)

        return dipatch({
            type: GET_GENRES,
            payload: resp.data
        })
    }
}

