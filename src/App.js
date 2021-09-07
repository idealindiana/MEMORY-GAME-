import "./App.css";
import React, { useState, useEffect } from "react";

const url = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail";

export default function App() {
  const [openCard, setopenCard] = useState([]);
  const [matched, setMatched] = useState([]);

  const pokemons = [
    { id: 211, name: "balbasaur" },
    { id: 218, name: "wartotle" },
    { id: 219, name: "blastoise" },
    { id: 220, name: "abhcmfolr" },
    { id: 221, name: "ldormrvk" },
    { id: 222, name: "mdodkvmr" },
    { id: 223, name: "dnfkform" },
    { id: 224, name: "fjvofmrh" },
  ];

  // let make a pair of each pokemons

  const pairOfPokemons = [...pokemons, ...pokemons];

  //open only that card which was matched
  const handleFlip = (index) => {
    setopenCard((opened) => [...opened, index]);
  };
  useEffect(() => {
    if (openCard < 2) return;
    const firstmatch = pairOfPokemons[openCard[0]];
    const secondmatch = pairOfPokemons[openCard[1]];

    if (secondmatch && firstmatch.id === secondmatch.id) {
      setMatched([...matched, firstmatch.id]);
    }
    if (openCard.length === 2) setTimeout(() => setopenCard([]), 1000);
  }, [openCard]);

  return (
    <div className="app">
      <div className="cards">
        {pairOfPokemons.map((pokemon, index) => {
          // let's flip the card with flipped css class
          let flipcard = false;

          // if open card now index of current card then open the card
          if (openCard.includes(index)) flipcard = true;
          if (matched.includes(pokemon.id)) flipcard = true;
          return (
            <div
              className={`pokemon-card ${flipcard ? "flipped" : ""}`}
              key={index}
              onClick={() => handleFlip(index)}
            >
              <div className="inner">
                <div className="front">
                  <img
                    src={`${url}/${pokemon.id}.png`}
                    alt="pokemon"
                    width="100"
                  />
                </div>
                <div className="back"></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
