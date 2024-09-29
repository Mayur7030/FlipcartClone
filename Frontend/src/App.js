import Header from "./components/header/Header.jsx";
import Home from "./components/home/Home.jsx";
import { Box } from "@mui/material";
import DataProvider from "./components/context/DataProvider.jsx";

function App() {
  return (
    <DataProvider className="App">
      <Header></Header>
      <Box style={{ marginTop: 54 }}>
        <Home></Home>
      </Box>
    </DataProvider>
  );
}

export default App;
