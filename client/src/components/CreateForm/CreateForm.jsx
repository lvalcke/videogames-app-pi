import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { url } from "../../redux/actions";
import { getAllGames } from "../../redux/actions";
import validations from "./Validations.js";

const CreateForm = () => {
  const [gameData, setGameData] = useState({
    name: "",
    description: "",
    released: "",
    background_image: "",
    rating: "",
    platforms: "",
    genres: [],
  });

  const [errors, setErrors] = useState({
    // name: "",
    // description: "",
    // released: "",
    // background_image: "",
    // rating: "",
    // platforms: "",
    // genres: "",
  });

  const dispatch = useDispatch();

  let allGenres = useSelector((state) => state.genres);

  const handleInputChange = (event) => {
    setGameData({
      ...gameData,
      [event.target.name]: event.target.value,
    });

    setErrors(
      validations({
        ...gameData,
        [event.target.name]: event.target.value,
      })
    );
    console.log(gameData);
  };

  const handleAddGenre = (event) => {
    event.preventDefault();
    if (!gameData.genres.includes(event.target.name)) {
      setGameData({
        ...gameData,
        genres: [...gameData.genres, event.target.name],
      });
      setErrors(
        validations({
          ...gameData,
          genres: [...gameData.genres, event.target.name],
        })
      );
    } else {
        setGameData({
            ...gameData,
            genres: gameData.genres.filter(genre => genre !== event.target.name)
          })
          setErrors(
            validations({
              ...gameData,
              genres: gameData.genres.filter(genre => genre !== event.target.name)
            })
        );
        }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const game = {
      ...gameData,
      rating: parseInt(gameData.rating),
      genres: gameData.genres.map((genre) => parseInt(genre)),
    };
    !game.background_image.length && delete game.background_image;
    dispatch(getAllGames());
    const newGame = await axios.post(`${url}/videogames`, game);
    return newGame;
  };
  return (
    <form>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          value={gameData.name}
          onChange={handleInputChange}
        />
        {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          name="description"
          value={gameData.description}
          onChange={handleInputChange}
        />
        {errors.description && (
          <p style={{ color: "red" }}>{errors.description}</p>
        )}
      </div>

      <div>
        <label htmlFor="background_image">Image:</label>
        <input
          type="text"
          name="background_image"
          value={gameData.background_image}
          onChange={handleInputChange}
        />
        {errors.background_image && (
          <p style={{ color: "red" }}>{errors.background_image}</p>
        )}
      </div>

      <div>
        <label htmlFor="rating">Rating:</label>
        <input
          type="text"
          name="rating"
          value={gameData.rating}
          onChange={handleInputChange}
        />
        {errors.rating && <p style={{ color: "red" }}>{errors.rating}</p>}
      </div>

      <div>
        <label htmlFor="platforms">Platforms:</label>
        <input
          type="text"
          name="platforms"
          value={gameData.platforms}
          onChange={handleInputChange}
        />
        {errors.platforms && <p style={{ color: "red" }}>{errors.platforms}</p>}
      </div>

      <div>
        <label htmlFor="released">Release:</label>
        <input
          type="date"
          name="released"
          value={gameData.released}
          onChange={handleInputChange}
        />
        {errors.released && <p style={{ color: "red" }}>{errors.released}</p>}
      </div>

      <div>
        {allGenres.map((genre) => (
          <button name={genre.id} onClick={handleAddGenre} key={genre.id}>
            {genre.name}
          </button>
        ))}
        {errors.genres && <p style={{ color: "red" }}>{errors.genres}</p>}
      </div>

      <button type="submit" disabled={Object.keys(errors).length? true : false} onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
};

export default CreateForm;
