import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

const Header = styled.header`
display:flex;
justify-content:space-between;
background: linear-gradient(180deg, rgba(120,19,29,1) 0%, rgba(191,39,42,1) 43%, rgba(179,61,67,0.8575805322128851) 100%);
font-family: 'Pokemon Solid', sans-serif;
`

const Body = styled.body`
display:flex;
background-color:#f5fffa;
width:100%;
height:90vh;
`
const Button = styled.button`
display:flex;
justify-content:space-between;
width:100px;
height:40px;
margin-top:10px;
margin-right:10px;
`
const H2 = styled.h2`
display:flex;
justify-content:center;
font-size:35px;
-webkit-text-stroke: 0.5px #1E90FF;
color: #FFFF00;
`

function Details(){

    const navigate = useNavigate();
    const [details, setDetails] = useState([]);
    

   

    useEffect(()=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon${details}`)
        .then((response)=>{
            console.log(response.data.results)
            setDetails(response.data.results)
        })

    },[])


    return(
        <div>
            <Header>
            <Button onClick={()=>navigate("/")}>Voltar</Button>
            <H2>Detalhes</H2>
            <Button onClick={()=>navigate("/pokedex")}>Ir para Pokedex</Button>
            </Header>

            <Body>
              {details.map((detalhe,id)=>{
                return <div key={id}>
                    {detalhe.name}
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id + 1}.png`}/>
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${id + 1}.png`}/>
                    
                </div>
                

              })}
            </Body>
        </div>
    )
}

export default Details;