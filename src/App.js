import { useState } from "react";
import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import { Routes, Route, useLocation } from "react-router-dom";
import About from "./components/About/About.jsx";
import Detail from "./components/Detail/Detail.jsx";
import Form from './components/Forms/Form.jsx';

function App() {
  const [characters, setCharacters] = useState([]);
  const [ShowCards, setShowCards] = useState(false)
  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          if (!ShowCards) setShowCards(true);
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
  }

  const onClose = (id) => {
    // [ 4, 5, 7]
    setCharacters(characters.filter((char) => char.id !== id));
  };

  const location = useLocation();

  return (
    <div className="App" style={{ padding: "25px" }}>
      {location.pathname !== '/' && <NavBar onSearch={onSearch} /> }
      <hr />
      <Routes>
        <Route exact path="/" element= {<Form/>}/>
        <Route path="/About" element={<About />} />
        <Route
          path="/Home"
          element={<Cards characters={characters}  onClose={onClose} ShowCards={ShowCards} />}
        />
        <Route path="/detail/:detailId" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;