import {styled} from 'styled-components'
import {Link} from 'react-router-dom'
import logo from '../assets/logo.png'
const Container = styled.div`
background-color: bisque;
min-height: 100vh;
display: flex;
justify-content: space-between;
align-items: center;
padding: 15%;
gap:10px;
h1{
    font-size:4rem;
    font-weight: lighter;
}
.link{
    text-decoration: none;
    background-color: #ED7D31;
    color:black;
    border-radius: 4px;
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width:20rem;
    min-height: 5rem;
    font-size:1.2rem;
    color:white;
}
// telas menos que 1024x650
@media only screen and (max-width:1023px) {
display: flex;
flex-direction: column;
justify-content: center;
gap:20px;
}
h1{
    font-size:3rem;
}
.link{
    min-width: 18rem;
    min-height: 4rem;
}
`
const Logo = styled.img`
position: absolute;
right: 0px;
bottom: 0px;
width: 130px;
height: 100px;
border-radius: 8px;

`
const BoxButtons = styled.div`
display: flex;
flex-direction: column;
gap:10px;
`
export const Home = () => {
    return(
        <Container>
            <h1>Treinamentos emive</h1>
            <BoxButtons>
            <Link to='/alarme.pdf'  className='link'>Alarme</Link>
            <Link to='/acessControl.pdf' className='link'>Controle de acesso</Link>
            <Link to='/cftv.pdf'  className='link'>CFTV</Link>
            </BoxButtons>
            <Logo src={logo}/>
        </Container>
    )
}