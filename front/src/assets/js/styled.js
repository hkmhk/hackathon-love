
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
    font-family: "Roboto", sans-serif;
    text-align: center;
    font-weight: 800;
    font-size: 1.8rem;
    color: white;
    position:absolute;
    width:100%;
    transform:translate(-50%,-67%);
    top:67%;
    left:50%;
`;

export const NameCharacter = styled.h2`
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 2rem;
    letter-spacing: 2px;
    line-height: 2.5rem;;
    color: white;
    position: absolute;
    top: 30%;
`;

export const Pourcentage = styled.h3`
    font-family: "Roboto", sans-serif;
    font-weight: 900;
    font-size: 1.5rem;
    color: white;
    margin-top: 10px;
    position: absolute;
    left: 53%;
`;

export const InformationsTitle = styled.h4`
    font-family: "Roboto", sans-serif;
    font-weight: 100;
    font-size: 1.4rem;
    color: white;
    border-bottom: 1px solid rgba(255,255,255, 0.7);
    width:100%;
    margin-top: 5rem;
    margin-bottom: 1rem;
    padding-bottom : 5px;
`;

export const Paragraphes = styled.p`
    font-family: "Roboto", sans-serif;
    font-weight: 300;
    font-size: 1rem;  
    color: white;
    margin-bottom: 0;
`;

export const LogoImg = styled.div`
    width: 200px;
    height:auto;
    position:absolute;
    transform:translate(-50%,-50%);
    top:40%;
    left:50%;
`

export const ProfileImg = styled.div`
    width: 100%;
    height:45vh;
    background:${props => props.image ? `url(${props.image})` : ""};
    background-position: top center;
    background-size:cover;
    background-repeat: no-repeat;
    overflow:hidden;
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
    margin: ${props => props.marg ? props.marg : "5px 0"};
    background: ${props => props.couleur ? props.couleur : "white"};
    border-radius: 20px;
    width: ${props => props.wth ? props.wth : "auto"};
    height:${props => props.hth ? props.hth : "30px"}
    color:  ${props => props.colorText ? props.colorText : "#BD10E0"};
    border: inherit;
    overflow: hidden;
    cursor: pointer;
`;

export const InputLogin = styled.input`
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    font-weight: 300;
    background: transparent;
    border:none;
    border-bottom: 1px solid white;
    color: white;
    cursor: pointer;
    margin-bottom: 40px;
    width:100%;
    ::placeholder {
        color: white;
        font-weight: 300;
    }
    :focus{
        outline:none;
    }
`;


export const Container = styled.div`
    width:100%;
    min-height: 100vh;
    display:flex;
`


export const BoxLogin = styled.div`
    position:absolute;
    transform:translate(-50%, -70%);
    left:50%;
    top: 80%;
    text-align:center;
    width:80%;
`

export const UserPicture = styled.div`
    width:170px;
    height:170px;
    border-radius:50%;
    background:rgba(255, 255, 255, 0.2);
    transform:translateY(-60%);
`

