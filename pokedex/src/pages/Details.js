import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
display:flex;
justify-content:space-between;
background: rgb(19,28,120);
background: linear-gradient(180deg, rgba(19,28,120,1) 0%, rgba(57,91,189,1) 43%, rgba(236,224,38,0.8575805322128851) 100%);
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
`

function Details(){

    const navigate = useNavigate()
    return(
        <div>
            <Header>
            <Button onClick={()=>navigate("/")}>Voltar</Button>
            <H2>Detalhes</H2>
            <Button onClick={()=>navigate("/pokedex")}>Ir para Pokedex</Button>
            </Header>

            <Body></Body>
        </div>
    )
}

export default Details;