import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PokemonCard from "./components/PokemonCard";

function App() {
  return (
    <div className="App container">
      <Header />
      <PokemonCard />
      <Footer />
    </div>
  );
}

export default App;
