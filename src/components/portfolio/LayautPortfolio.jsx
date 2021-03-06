import React from "react";
import styled from "styled-components";
import BgMain from "./BgMain";
import Letrero from "./Letrero";
import NavBarPortfolio from "../portfolio/navbar/NavBarPortfolio";
import Social_Bar from "./social_bar/Social_Bar";

const LayautPortfolioMain = styled.main`
  width: 100%;
  height: auto;
  display: grid;
`;

const LayautPorfolio = () => {
  return (
    <>
      <LayautPortfolioMain>
        <BgMain />
        <NavBarPortfolio />
        <Letrero />
        <Social_Bar />
      </LayautPortfolioMain>
    </>
  );
};

export default LayautPorfolio;
