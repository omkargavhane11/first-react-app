import "./App.css";
// import { MovieList } from "./MoviePage";
import { NavLink, Routes, Route, useParams } from "react-router-dom";
import { Colorbox } from "./colorgame";

//MoviePage
// import { Movie } from "./MovieDetail"; ---> its deleted
import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

// MovieDetails.js
import { Counter } from "./Counter";
// import { useState } from "react";
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import InfoIcon from '@mui/icons-material/Info';
import { useNavigate } from "react-router-dom";



export default function App() {
  // const [MovieData, setMovieData] = useState(ogMovieData);

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

  return (
    <div className="App">
      <div className="navbar">
          <NavLink className="navlink" to="/">Home</NavLink>
          <NavLink className="navlink" to="/movies">Movie list</NavLink>
          <NavLink className="navlink" to="/colorgame">Color game</NavLink>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<MovieList />} />
        <Route path="/movies/:abc" element={<MovieD />} />
        <Route path="/colorgame" element={<Colorbox />} />
      </Routes>
    </div>
  );
}


function MovieD({ url, name, rating, summary }) {
  
  const { abc} = useParams();
  const ratingstyles = {
    color: rating > 7.9 ? "green" : "red",
    margin: "5px",
  }; 
  return (
    <div className="maindiv">
      <img src={url} alt="No image" />
      <div className="details">
        <div className="inner-detail">
          <h3>
            {abc}
            
          </h3>
          <h3 style={ratingstyles}>⭐{rating}</h3>
        </div>
        <p >{summary}</p>
      </div>
    </div>
  );
}


function MovieList() {
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
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const newMovie = {
    name: name,
    poster: poster,
    rating: rating,
    summary: summary,
  };
  return (
    <div className="App">

      <div className="addmovieform">
        <TextField placeholder="Enter a name" onChange={(event) => setName(event.target.value)} label="Name" variant="standard" />
        <TextField placeholder="Enter poster url/path" onChange={(event) => setPoster(event.target.value)} label="Poster url/path" variant="standard" />
        <TextField placeholder="Enter a rating" onChange={(event) => setRating(event.target.value)} label="Rating" variant="standard" />
        <TextField placeholder="Enter a summary" onChange={(event) => setSummary(event.target.value)} label="Summary" variant="standard" />

        <Button variant="contained" onClick={() => {
          // copy the original list and add movie to it
          setMovieData([...MovieData, newMovie]);
        }}>Add Movie</Button>

      </div>

      <div className="moviedatadiv">
        {MovieData.map((nm,index) => <Movies name={nm.name} url={nm.poster} rating={nm.rating} summary={nm.summary} id={index} />)}
      </div>
    </div>
  );
}



// MovieDetails.js
function Movies({ url, name, rating, summary }) {
  const [show, setShow] = useState(true);
  const ratingstyles = {
    color: rating > 7.9 ? "green" : "red",
    margin: "5px",
  };
  const para = {
    display: show ? "block" : "none",
    // height: "70px",
  }

  const navigate = useNavigate("");
  return (
    <div className="maindiv">
      <img src={url} alt="No image" />
      <div className="details">
        <div className="inner-detail">
          <h3>
            {name}
            <IconButton onClick={() => setShow(!show)} aria-label="Toggle discription" color="primary">
              {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
            <IconButton onClick={() => navigate(`/movies/${name}`)}
              color="primary">
              <InfoIcon />
            </IconButton>
          </h3>
          <h3 style={ratingstyles}>⭐{rating}</h3>
        </div>
        <p style={para}>{summary}</p>
        <Counter />
      </div>
    </div>
  );
}


function Home() {
  return (
    <div>
      <h2>Welcome to Home Page 🏠</h2>
    </div>
  );
}