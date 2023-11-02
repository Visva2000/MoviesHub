import React, { useState } from "react";
import Movies from "./Pages/Movies";
import Header from "./components/header";
import { Stack } from "@mui/material";
import "./App.css";

const HomePage = () => {
  
  const [products, setProducts] = useState([]);
  const[apiStatus,setApiStatus] = useState('');

  return (
    <Stack >
      <Header setProducts={setProducts} setApiStatus={setApiStatus} />
      <Movies products={products} apiStatus={apiStatus} />
    </Stack>
  )
}

export default HomePage