import React from "react";
import { Box, styled } from "@mui/material";
import NavBar from "./NavBar";
import Banner from "./Banner";
import { useEffect } from "react";
import getProducts  from "../redux/actions/productActions";
import { useDispatch, useSelector } from "react-redux";

const Component = styled(Box)`
  padding: 10px 10px;
  background: #f2f2f2;
`;

function Home() {
  const {products}= useSelector((state) => state.getProducts);
  console.log(products);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
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
