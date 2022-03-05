import { Counter } from "./Counter";
import {useState} from "react";

export function MovieDetail ({ url, name, rating,summary }) {
  const [show,setShow] = useState(false);
  const ratingstyles={
    color: rating > 7.9 ? "green":"red",
  };
  const paraStyle={
    display:"hidden"
  };
  return (
    <div className="maindiv">
      <img src={url} alt="No image" />
      <div className="details">
        <div className="inner-detail">  
        <h3>{name}</h3>
        <h3 style={ratingstyles}>⭐{rating}</h3>
        </div>
        {/* <button onClick={() => useState(show)}>Toggle</button> */}
        <p style={paraStyle}>{summary}</p>
        <Counter />
      </div>
    </div>
  );
}
