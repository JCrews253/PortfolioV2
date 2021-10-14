import { Container } from "@mui/material";
import AppBar from "./components/AppBar";
import GitGraph from "./components/GitGraph";

function App() {
  return (
    <div className="App">
      <AppBar />
      <Container>
        <GitGraph />
      </Container>
    </div>
  );
}

export default App;
