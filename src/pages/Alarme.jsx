import alarme from '../assets/alarme.pdf'
import styled from 'styled-components'

const IframeStyled = styled.iframe`
width: 100%;
height:100%;
border-radius: 8px;
border: 5px solid grey;
position: absolute;
bottom: 0;
`
export const Alarme = () => {
    return(
        <IframeStyled src={alarme}>
        </IframeStyled>
    )
}