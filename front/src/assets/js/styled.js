import styled from "styled-components";

export const Exemple1 = styled.button`
  width: 150px;
  height: 60px;
  background: black;
  border-radius: 5px;
  color: white;
  font-size: 20px;
  &:hover {
    background: blue;
  }
`;

export const Exemple2 = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

<<<<<<< HEAD
export const NavBar = styled.nav`
  position: fixed;
  height: 9vh;
  width: 100vw;
  background-color: #666666;
  bottom: 0;
`;
=======
export const LogoImg = styled.div`
    width: 40%;
    height:40%;
    position:absolute;
    transform:translate(-50%,-40%);
    top:40%;
    left:50%;
`

export const Icon = styled.div`
    position:absolute;
    transform:translate(-50%,-80%);
    top:80%;
    left:50%;
`
export const MainContainer = styled.div`
    background: radial-gradient(circle at top left,#070048, #3218B1, #3E25BD, #5437DC, #E12BFF 90%);
    min-height:100vh;
`
>>>>>>> 281b2364383fd1b2019a0fb3bcc8d4350a1079ac
