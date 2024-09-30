import Header from "./components/header/Header.jsx";
import Home from "./components/home/Home.jsx";
import { Box } from "@mui/material";
import DataProvider from "./components/context/DataProvider.jsx";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <DataProvider className="App">
      <BrowserRouter>
        <Header></Header>
        <Box style={{ marginTop: 54 }}>
          <Home></Home>
        </Box>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
