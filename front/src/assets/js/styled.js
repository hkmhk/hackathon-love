
import styled from 'styled-components';

export const ButtonFiltre = styled.button`
    background-image: linear-gradient(to right, #673AB7 0%, #512DA8 51%, #673AB7 100%);
    border-radius: 20px;
    width: 10rem;
    height:2rem;
    color: white;
    border: inherit;
`;

export const Exemple2 = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

export const TitleMain = styled.h1`
    font-family: "Avenir Next", sans-serif;
    text-align: center;
    font-weight: bold;
    font-size: 1.8rem;
    color: white;
    position:absolute;
    width:100%;
    transform:translate(-50%,-67%);
    top:67%;
    left:50%;
`;

export const NameCharacter = styled.h2`
    font-family: "Avenir Next", sans-serif;
    font-weight: light;
    font-size: 2rem;
    color: white;
`;

export const Pourcentage = styled.h3`
    font-family: "Avenir Next", sans-serif;
    font-weight: bold;
    font-size: 1.5rem;
    color: white;
`;

export const InformationsTitle = styled.h4`
    font-family: "Avenir Next", sans-serif;
    font-weight: regular;
    font-size: 1.3rem;
    color: white;
`;

export const Paragraphes = styled.p`
    font-family: "Avenir Next", sans-serif;
    font-weight: regular;
    font-size: 1.1rem;
    color: white;
`;

export const LogoImg = styled.div`
    width: 55%;
    height:55%;
    position:absolute;
    transform:translate(-50%,-40%);
    top:40%;
    left:50%;
`

export const Icon = styled.div`
    position:absolute;
    transform:translate(-50%,-80%);
    top:85%;
    left:50%;
`
export const MainContainer = styled.div`
    background: radial-gradient(circle at top left,#070048, #3218B1, #3E25BD, #5437DC, #E12BFF 90%);
    min-height:100vh;
`
export const ButtonPage = styled.button`
    background: ${props => props.couleur ? props.couleur : "white"};
    border-radius: 20px;
    width: 10rem;
    height:2rem;
    color:  ${props => props.colorText ? props.colorText : "red"};
    border: inherit;
`;
