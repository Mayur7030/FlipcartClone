import Header from "./components/header/Header";
import Home from "./components/home/Home";
import { Box } from "@mui/material";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Box style={{ marginTop: 54 }}>
        <Home></Home>
      </Box>
    </div>
  );
}

export default App;
