import { useState } from "react";

export function Colorbox() {
  const [color, setColor] = useState("none");
  const styles = {
    backgroundColor: color,
    height: "30px",
    fontSize: "20px",
    textAlign: "center"
  };

  const [colorlist, setColorlist] = useState([
    "yellow",
    "red",
    "crimson",
    "teal"
  ]);

  return (
    <div>
      <input
        onChange={(c) => setColor(c.target.value)}
        style={styles}
        placeholder="Enter a color"
      ></input>
      <button
        onClick={() => setColorlist(["...colorlist", color])}
        className="lg-btn"
      >
        Add Color
      </button>
      {colorlist.map((nm) => (
        <Newcolorbox color={nm} />
      ))}
    </div>
  );
}

function Newcolorbox({ color }) {
  const styles = {
    backgroundColor: color,
    height: "30px",
    margin: "10px",
    width: "400px",
    fontSize: "20px",
    textAlign: "center"
  };
  return <div className="newbox" style={styles}></div>;
}
