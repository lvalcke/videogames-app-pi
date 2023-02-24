const { Videogame } = require('../db.js');
const axios = require('axios');
require('dotenv').config();
const { API_KEY } = process.env;

const getVideogamesById = async ( req, res ) => {
    try {
        // Si el id que me llega por props es un numero, lo busco en la API. Si no, lo busco en la DB.
        const { id } = req.params;
        if(!isNaN(id)){
            const game = await axios(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`);
            res.status(200).json(game.data);
        }else{
            const game = Videogame.findByPk(id);
            res.status(200).json(game);
        }
    } catch (error) {
        res.status(400).send(error.message)
    }
    
}

module.exports = getVideogamesById;