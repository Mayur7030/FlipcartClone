import React from "react";
import { Box, styled } from "@mui/material";
import NavBar from "./NavBar";
import Banner from "./Banner";

const Component = styled(Box)`
  padding: 10px 10px;
  background: #f2f2f2;
`;

function Home() {
  return (
    <>
      <NavBar></NavBar>
      <Component>
        <Banner></Banner>
      </Component>
    </>
  );
}

export default Home;
