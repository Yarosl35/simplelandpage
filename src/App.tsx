import classes from './App.module.scss'
import { Container } from "react-bootstrap";

import TheHeader from "./components/TheHeader";
import MainContainer from './components/MainContainer'

function App() {
  return (
    <Container fluid className={classes.App}>
      <TheHeader />
      <MainContainer />
    </Container>
  );
}

export default App;
