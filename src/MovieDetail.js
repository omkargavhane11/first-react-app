import { Counter } from "./Counter";
import { useState } from "react";
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import InfoIcon from '@mui/icons-material/Info';
import {useNavigate} from "react-router-dom";


export function Movie({ url, name, rating, summary ,id  }) {
  const [show, setShow] = useState(true);
  const ratingstyles = {
    color: rating > 7.9 ? "green" : "red",
    margin: "5px",
  };
  const para = {
    display: show ? "block" : "none",
    height: "70px",
  }

  const navigate= useNavigate("");
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

            <IconButton onClick={()=> navigate(`/movies/${name}`)}
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
