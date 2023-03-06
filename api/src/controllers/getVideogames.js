const axios = require('axios');
require('dotenv').config();
const { API_KEY } = process.env;
const { Videogame, Genre } = require('../db.js')

const getVideogames = async ( req, res ) => {
    try {
        // Creo un arreglo e inserto los llamados a axios
        let promises = [];
        for (let i = 1; i < 6; i++){
            let apiGet = await axios(`https://api.rawg.io/api/games?key=${API_KEY}&page=${i}`);
            promises.push(apiGet);
        };
        
        // Le aplico PromiseAll al arreglo de axios y guardo el resultado mapeado en un nuevo array
        promises = (await Promise.all(promises)).map( prom => prom.data.results.map( videogame => {
            return{
                id:videogame.id,
                name:videogame.name,
                background_image:videogame.background_image,
                rating:videogame.rating,
                genres:videogame.genres.map(genre => {
                    return {
                        name: genre.name
                    }
                }),
            }
        }))
        // Para que me quede ne un solo array, creo una nueva varible con un array vacio y le concateno cada uno de los arrays de las respuestas de las promesas.
        let allVideogames = [];
        promises.map(games => { allVideogames = allVideogames.concat(games) })
        // Traigo los juegos q pueda tener en la db y los concateno con a allVideogames
        let dbVideogames = await Videogame.findAll({
            attributes:['id','name','background_image','rating'],
            include: [{
                model:Genre,
                attributes:['name'],
                through:{
                    attributes:[]
                }
            }]
        })
        const resp = [...dbVideogames, ...allVideogames]
        res.status(200).json(resp)
    } catch (error) {
        res.status(400).send(error.message)
    }

}

module.exports = getVideogames;