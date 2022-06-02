import React, { useState } from "react";
import "./App.css";
import Search from "./components/Search";
import Home from "./components/Home";
import Description from "./components/Description";
import {Routes, Route } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
function App() {
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState({});
  const handleClose = () => setShow(!show);
  const addHandle = (inputs) => {
    setMovies((m) => m.concat({...inputs,id:uuidv4()}));
    setShow(false);
  };
  const [movies, setMovies] = useState([
    {
      id:uuidv4(),
      title: "Ambulance",
      description:"Ayant besoin d'argent pour couvrir les frais médicaux de sa femme, un vétéran fait équipe avec son frère adoptif pour voler 32 millions de dollars à une banque de Los Angeles.",
      posterURL: "https://m.media-amazon.com/images/M/MV5BYjUyN2VlZGEtNGEyZC00YjViLTgwYmQtZDJiM2FlOTU3Mjg2XkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_FMjpg_UX1000_.jpg",
      rating: 5,
      videoLink:"https://youtu.be/7NU-STboFeI"
    },
    {
      id:uuidv4(),
      title: "Joker(2019)",
      description: "Arthur Fleck, un comédien affligé par des troubles mentaux, se voit mis de côté par la société. S'amorce ensuite une descente aux enfers emplie de révoltes .",
      posterURL: "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
      rating: 4,
      videoLink:"https://youtu.be/zAGVQLHvwOY"
    },
    {
      id:uuidv4(),
      title: "Fast and Furious",
      description: "A la suite de plusieurs attaques de camions, la police de L.A. décide d'enquêter sur le milieu des street racers. Brian, un jeune policier, est chargé d'inflitrer la bande de Toretto, qui figure, avec celle de son rival Johnny Tran, au premier rang des suspects.",
      posterURL: "https://prod.cdn.bbaws.net/TDC_Blockbuster_-_Production/960/628/4280008836-po-reg-medium_orig-1635317868539.jpg",
      rating: 4,
      videoLink:"https://youtu.be/FUK2kdPsBws"
    },
    {
      id:uuidv4(),
      title: "The Batman",
      description: " Cela fait deux ans que Bruce Wayne a enfilé le costume de Batman et lutte contre le crime qui sévit à Gotham. Lorsqu'un tueur s'en prend à l'élite de la ville, disséminant des indices à l'attention du justicier masqué, Batman découvre ce qui se trame réellement à Gotham.",
      posterURL: "https://cdn.europosters.eu/image/750/posters/the-batman-downpour-i123456.jpg",
      rating: 3,
      videoLink:"https://youtu.be/mqqft2x_Aa4"
    },
  ]);
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light sticky-top bg">
        <div className="container-fluid">
          <div className="navbar-brand"><h1>POPCORN</h1></div>
          <div className="cc">
            <Search onSearch={(s) => setSearch(s)} />
          </div>
        </div>
      </nav>
      <Routes>
          <Route path="/description/:id" element={<Description movies={movies} />} />
          <Route path="/" element={ <Home addHandle={addHandle} handleClose={handleClose} movies={movies} show={show} search={search}   />} />
      </Routes>
     
      
    </div>
  );
}

export default App;
