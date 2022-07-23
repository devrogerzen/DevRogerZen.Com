import React from "react";
import styled from "styled-components";
import BgMain from "./BgMain";
import Letrero from "./Letrero";
import NavBarPortfolio from "./NavBarPortfolio";

const LayautPortfolioMain = styled.main`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-areas:
    logon navbar navbar navbar
    letrero letrero aside aside
    socialnet footer footer footer;
`;

const LayautPorfolio = () => {
  return (
    <LayautPortfolioMain>
      <BgMain />
      <NavBarPortfolio />
      <Letrero />
    </LayautPortfolioMain>
  );
};

export default LayautPorfolio;
