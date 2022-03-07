import "./App.css";
import { MovieList } from "./MoviePage";
import { NavLink, Routes, Route, useParams } from "react-router-dom";
import {Colorbox} from "./colorgame";

export default function App() {
  
  return (
    <div className="App">
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/movies">Movie list</NavLink>
        </li>
        <li>
          <NavLink to="/colorgame">Color game</NavLink>
        </li>
      </ul>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<MovieList />} />
        <Route path="/movies/:name" element={<MovieD />} />
        <Route path="/colorgame" element={<Colorbox />} />
      </Routes>
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

function MovieD(){
  const {name} = useParams();
  return (
    <div>
      <h1>Movie detail of {name} </h1>
    </div>
  );
}