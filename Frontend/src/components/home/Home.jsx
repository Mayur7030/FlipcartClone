import React from "react";
import { Box, styled } from "@mui/material";
import NavBar from "./NavBar";
import Banner from "./Banner";
import Slide from "./Slide";
import { useEffect } from "react";
import { getProducts as listProducts } from "../redux/actions/productActions";
import { useDispatch, useSelector } from "react-redux";

const Component = styled(Box)`
  padding: 10px 10px;
  background: #f2f2f2;
`;

function Home() {
  const getProducts = useSelector((state) => state.getProducts);

  const { products } = getProducts;
  console.log(products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  return (
    <>
      <NavBar />
      <Component>
        <Banner />
        {/* <MidSlide products={products} /> */}
        {/* <MidSection /> */}
        <Slide
          data={products}
          title="Discounts for You"
          timer={false}
          multi={true}
        />
        <Slide
          data={products}
          title="Suggested Items"
          timer={false}
          multi={true}
        />
        <Slide
          data={products}
          title="Top Selection"
          timer={false}
          multi={true}
        />
        <Slide
          data={products}
          title="Recommended Items"
          timer={false}
          multi={true}
        />
      </Component>
    </>
  );
}

export default Home;
