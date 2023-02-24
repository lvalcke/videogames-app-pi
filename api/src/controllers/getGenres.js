const axios = require('axios');
require('dotenv').config();
const { API_KEY } = process.env;
const { Genre } = require('../db.js')

// 

const getGenres = async ( req, res ) => {
    try {
        // Primero pregunto si hay algo en la base de datos
        const db = await Genre.findAll();
        // Si no hay nada, pido los generos de la API y los guardo en db
        if(db.length === 0){
            const resp = await axios(`https://api.rawg.io/api/genres?key=${API_KEY}`);
            
            const genresMap = resp.data.results.map( gen => {
                return {
                    id : gen.id,
                    name : gen.name
                }} );    
            await Genre.bulkCreate(genresMap);
            // Retorno el array con los generos y si ya estaban en la db, entonces retorno el resultado de la busqueda
            res.status(200).json(genresMap)    
            }else{
            return res.status(200).json(db)    
            }
    } catch (error) {
        res.status(404).send(error.message)
    }
}

module.exports = getGenres;