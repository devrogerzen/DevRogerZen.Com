import React from "react";
import styled from "styled-components";
import { Parpadea } from "../../helpers/Parpadea";
/* import LogoDRogerZ from '../../images/1200DevRogerZen_Logon.png' */

const LetreroContainer = styled.div`
  grid-area: letrero;
  width: 100%;
  height: 100vh;
  display: flex;
  position: absolute;
  flex-direction: column;
  overflow: hidden;
  color: #fff;
  justify-content: center;
  z-index: 10;
  font-family: Gameplay;
  letter-spacing: 2px;
  font-weight: 100;
  text-transform: uppercase;

`;
const LetreroText = styled.h1`
  font-size: 2.5rem;
  margin-left: 5vw;
  margin-bottom: 10vh;
  vertical-align: center;

  @media (max-width: 968px) {
    font-size: 1.5rem;
  }
`
/* const LogoDrogerZ = styled.img`
width: 200px;
margin-left: 5vw;

` */
const Letrero = () => {
  return (
    <LetreroContainer>
      {/* <LogoDrogerZ src={LogoDRogerZ} alt="Logon DevRogerZen" /> */}
      <LetreroText>Roger <br/> Jimenez <br/> Programador <Parpadea>|</Parpadea></LetreroText>
    </LetreroContainer>
  );
};

export default Letrero;
