import {useNavigate} from "react-router-dom"
import styled from "styled-components"

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
const Cards = styled.div`
display:grid;
position:relative;
border:2px solid black;
width:200px;
height:300px;
margin-left:30px;
margin-top:10px;
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
height:50px;
margin-top:145px;

`
const Div = styled.div`
display:flex;
flex-direction:row;

`
const H2 = styled.h2`
display:flex;
justify-content:center;
margin-left:550px;
font-size:30px;
`



function Home(){
    const navigate = useNavigate()

    return(
        <div>
            <Header>
                <H2>Lista de Pokemons</H2>
                <Button onClick={()=>navigate("/pokedex")}>Ir para Pokedex</Button>
                
            </Header>
            <Body>
                <Cards>
                 <h2>Imagem do pokemon</h2>
                 <Div>
                 
                <ButtonsCard onClick={()=>navigate("/details")}>Detalhes</ButtonsCard>
                
                <ButtonsCard>Adicionar a pokedex</ButtonsCard>
                </Div>

                </Cards>
            
            
            </Body>

        </div>
        
    )

}

export default Home;