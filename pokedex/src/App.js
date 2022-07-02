import './App.css';
import Home from './pages/Home';
import Details from './pages/Details';
import Pokedex from './pages/Pokedex';
import {BrowserRouter , Routes, Route } from 'react-router-dom';
import {PokemonsContext} from './context/PokemonsContext'
import { useEffect, useState } from 'react';
import axios from 'axios';



function App() {

  const [pokemons, setPokemons] = useState([])

  useEffect(()=>{
    axios.get("https://pokeapi.co/api/v2/pokemon-form/?limit=20&offset=0")
    .then((response)=>{
      console.log(setPokemons(response.data.results))
    }).catch((err)=>{
      console.log(err.response)

    })
  },[])
  return (
    <div className="App">
      {pokemons.length&&<PokemonsContext.Provider value={pokemons}>
      <BrowserRouter>
      <Routes>
      <Route path={"/"} element={<Home/>}/>
      <Route path={"/pokedex"} element={<Pokedex/>}/>
      <Route path={"/detail"} element={<Details/>}/>
      </Routes>
      </BrowserRouter>
      </PokemonsContext.Provider>}


    </div>
  );
}

export default App;
