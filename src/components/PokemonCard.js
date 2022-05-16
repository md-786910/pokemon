import React, { useState, useEffect } from "react";
import pokemonImages from "../images/poke.jpeg";

function PokemonCard() {
  const [query, setQuery] = useState("charizard");
  const [pokemon, setPokemon] = useState();
  const [load, setLoad] = useState(false);

  //   const url = "https://pokeapi.co/api/v2/pokemon/charizard";
  //   const ListUrl = "https://pokeapi.co/api/v2/pokemon/";

  const textSearch = (e) => {
    const val = e.target.value;
    setQuery(val);
  };

  const setText = async () => {
    if (query === "") {
      alert("Please search valid pokemon");
    } else {
      setLoad(true);

      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${query}`);

      if (res.status === 200) {
        const data = await res.json();
        setLoad(false);
        setPokemon(data);
      } else {
        setLoad(false);
        return alert("invalid pokemon");
      }
    }
  };

  useEffect(() => {
    setText();
  }, []);
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Pokemon
              <br className="hidden lg:inline-block" />
              Get Ready To Search
            </h1>
            <p className="mb-8 leading-relaxed">
              <b>
                Short for “pocket monsters,” Pokémon exists as a TV show, a
                trading card game, video games and toys
              </b>
              The Pokémon themselves are creatures that live in the wild or with
              their owner (as in your kid), referred to as their trainer. The
              trainer's goal is to “catch them all” and, by all, we mean all
              800+ of them
            </p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover  object-center rounded"
              alt="hero"
              src={pokemonImages}
            />
          </div>
        </div>
      </section>

      <div className="container">
        <section className="lg:w-1/2 w-100 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:mx-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
          <div className="relative mb-4">
            <label for="email" className="leading-7 text-sm text-gray-600">
              <b>Search Pokemon</b>
            </label>
            <input
              type="text"
              id="text"
              name="text"
              value={query}
              onChange={textSearch}
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
            <button
              className=" inline-flex text-white mt-4 bg-indigo-500 border-0 py-2 px-3 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              onClick={setText}
            >
              search Pokemon
            </button>

            {load ? (
              <button className=" inline-flex text-white mt-4 bg-indigo-500  py-2 px-3  rounded text-sm">
                loading...
              </button>
            ) : (
              ""
            )}
          </div>
        </section>
      </div>

      <div className="p-10">
        <section className=" container text-gray-600 body-font overflow-hidden shadow-lg border border-gray-300 border-2">
          <div className="container px-5 py-24 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
              <img
                alt="ecommerce"
                className="w-1/4 md:h-100 md:w-100  h-50 object-contain object-center rounded"
                src={pokemon && pokemon.sprites.other.dream_world.front_default}
              />
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 className="text-sm title-font text-gray-500 tracking-widest">
                  Pokemon Name
                </h2>
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                  {pokemon && pokemon.name}
                </h1>

                <div className="container">
                  <div className="leading-relaxed mt-3 shadow-sm flex justify-between">
                    <div className="fly">
                      <h5 className="font-bold">Fire / Flying</h5>
                      <h5>Type</h5>
                    </div>
                    <div className="fly">
                      <h5 className="font-bold">Weight</h5>
                      <h5>{pokemon && pokemon.weight} kg</h5>
                    </div>
                    <div className="fly">
                      <h5 className="font-bold">Height</h5>
                      <h5>{pokemon && pokemon.height / 100} m</h5>
                    </div>
                  </div>
                  <hr />
                  <div className="startdust mt-3 leading-relaxed  shadow-sm flex justify-between">
                    <div className="fly">
                      <h5 className="font-bold">StartDust</h5>
                      <h5>{Math.floor(Math.random() * 10000 + 1)}</h5>
                    </div>
                    <div className="fly">
                      <h5 className="font-bold"> charizard candy</h5>
                      <h5>{Math.floor(Math.random() * 200 + 1)}</h5>
                    </div>
                  </div>
                </div>

                <div className=" mt-4  item-center">
                  <div className="title-font w-100 rounded-full bg-indigo-500 p-4 font-medium text-2xl text-gray-900"></div>

                  <button className="rounded-full w-10 h-10 bg-gray-200 border-0 inline-flex items-center justify-center text-gray-500 mt-3">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeLidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default PokemonCard;
