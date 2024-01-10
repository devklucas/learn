import styled from 'styled-components'
import {Link} from 'react-router-dom'

const Container = styled.div`
background-color: bisque;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
gap:25px;
font-size: 1.7rem;
h2{
    font-weight: 100;
}
.link{
text-decoration:none;
color: grey;
}
`

export const Main = () => {
    return(
        <Container>
            <h1>Em construção</h1>
            <h2>Esta quase pronto, enquanto isso</h2>
            <Link to='/home' className='link'>Acessar site demo</Link>
        </Container>
    )
}