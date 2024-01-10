import styled from 'styled-components'
import pdf from '../assets/acessControl.pdf'

const IframeStyled = styled.iframe`
width: 100vw;
height: 100vh;
`
export const AcessControl = () => {
    return(
        <IframeStyled src={pdf}/>
        )
}