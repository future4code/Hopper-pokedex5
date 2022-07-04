import {useNavigate} from "react-router-dom"
import styled from "styled-components"
import { PokemonsContext } from "../context/PokemonsContext";
import React,{useContext} from "react";

const Header = styled.header`
display:flex;
justify-content:space-between;
background: linear-gradient(180deg, rgba(120,19,29,1) 0%, rgba(191,39,42,1) 43%, rgba(179,61,67,0.8575805322128851) 100%);
font-family: 'Pokemon Solid', sans-serif;
`
const Body = styled.body`
display:flex;
flex-wrap:wrap;
background-color:#87CEEB;
width:100%;
height:100%;
`
const Cards = styled.div`
display:grid;
position:relative;
border:2px solid black;
width:200px;
height:300px;
margin-left:50px;
margin-top:10px;
background: rgb(224,231,73);
border-radius:7px;
`
const Button = styled.button`
display:flex;
justify-content:space-between;
width:100px;
height:40px;
margin-top:10px;
margin-right:10px;
`
const ButtonsCard = styled.button`
width:100px;
height:43px;

`
const Div = styled.div`
display:flex;
flex-direction:row;

`
const H2 = styled.h2`
display:flex;
justify-content:center;
-webkit-text-stroke: 0.5px #1E90FF;
color: #FFFF00;
margin-left:550px;
font-size:30px;
`
const Imagem = styled.img`
margin-top:10px;
margin-left:10px;
width:175px;


`



function Home(){
    const navigate = useNavigate();
    const pokemons = useContext(PokemonsContext);

    const pokemonsList = pokemons.map((pokemon, id)=>{
        return <Cards key={id}>
        <Imagem src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id+1}.png`}></Imagem>
        <h2>{pokemon.name}</h2>
        <Div>
        
       <ButtonsCard onClick={()=>navigate("/detail")}>Detalhes</ButtonsCard>
       
       <ButtonsCard>Adicionar a pokedex</ButtonsCard>
       </Div>

       </Cards>
    })


    return(
        <div>
            <Header>
                <H2>Lista de Pokemons</H2>
                <Button onClick={()=>navigate("/pokedex")}>Ir para Pokedex</Button>
                
            </Header>
            <Body>
                 {pokemonsList}           
            
            </Body>

        </div>
        
    )

}

export default Home;