import React from "react";
import "./styles.css";
import { useState } from "react";

const musicLibrary = {
  SteveAoki: [
    { name: "MIC Drop", rating: "4/5" },
    { name: "Pursuit Of Hapiness", rating: "5/5" },
    { name: "Waste It On Me", rating: "5/5" }
  ],

  MartinGarrix: [
    {
      name: "Scared to Be Lonely",
      rating: "5/5"
    },
    {
      name: "In The Name Of Love",
      rating: "5/5"
    },
    {
      name: "Summer Days",
      rating: "5/5"
    }
  ],
  Marshmellow: [
    {
      name: "Come & Go",
      rating: "5/5"
    },
    {
      name: "Be Kind",
      rating: "5/5"
    },
    {
      name: "Happier",
      rating: "5/5"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("Marshmellow");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1>
        {" "}
        Music{" "}
        <span role="img" aria-label="music">
          {" "}
          🎼
        </span>{" "}
      </h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Checkout the music I ❤️. Select an artist to know more.{" "}
      </p>

      <div>
        {Object.keys(musicLibrary).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {musicLibrary[selectedGenre].map((music) => (
            <li
              key={music.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {music.name} </div>
              <div style={{ fontSize: "smaller" }}> {music.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
