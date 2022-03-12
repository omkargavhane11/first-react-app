import "./App.css";
// import { MovieList } from "./MoviePage";
import { NavLink, Routes, Route, useParams } from "react-router-dom";
import { Colorbox } from "./colorgame";

//MoviePage
// import { Movie } from "./MovieDetail"; ---> its deleted

// MovieDetails.js
// import { useState } from "react";
import Badge from '@mui/material/Badge';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Home } from "./Home";
import { MovieList } from "./MovieList";

import { useState } from "react";





export default function App() {
  const ogMovieData = [
    {
        name: "RRR",
        poster: "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
        rating: 8.8,
        summary: "RRR is an upcoming Indian Telugu-language period "
    },
    {
        name: "Iron man 2",
        poster: "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
        rating: 7,
        summary: "With the world now aware that he is Iron Man, "
    },
    {
        name: "No Country for Old Men",
        poster: "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
        rating: 8.1,
        summary: "A hunter's life takes a drastic turn when he "
    },
    {
        name: "Jai Bhim",
        poster: "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
        summary: "A tribal woman and a righteous lawyer battle in court ",
        rating: 8.8
    },
    {
        name: "The Avengers",
        rating: 8,
        summary: "Marvel's The Avengers (classified under the name ",
        poster: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg"
    },
    {
        name: "Interstellar",
        poster: "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
        rating: 8.6,
        summary: "When Earth becomes uninhabitable in the future, a "
    },
    {
        name: "Baahubali",
        poster: "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
        rating: 8,
        summary: "In the kingdom of Mahishmati, Shivudu falls in love "
    },
    {
        name: "Ratatouille",
        poster: "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
        rating: 8,
        summary: "Remy, a rat, aspires to become a renowned French "
    }
];
const [MovieData, setMovieData] = useState(ogMovieData);


  return (
    <div className="App">
      <div className="navbar">
        <NavLink className="navlink" to="/">Home</NavLink>
        <NavLink className="navlink" to="/movies">Movies</NavLink>
        {/* <NavLink className="navlink" to="/addmovie">Add movie</NavLink> */}
        <NavLink className="navlink" to="/colorgame">Color game</NavLink>

      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<MovieList />} />
        <Route path="/movies/:id" element={<MovieDetails movielist={MovieData} setMovieData={setMovieData} />} />
        <Route path="/colorgame" element={<Colorbox />} />
      </Routes>
    </div>
  );
}


function MovieDetails({movielist}) {
  const { id } = useParams(); //extract if from URL 
  const movie = movielist[id];
  console.log(movie);

  return (
    <h2>This is movie {movie.name}</h2> 
  )
};


