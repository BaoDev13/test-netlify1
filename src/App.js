import "./App.scss";
import Header from "./components/Header";
import Container from "react-bootstrap/Container";

import AppRoutes from "./routes/AppRoutes";

import Body from "./components/Body";

function App() {
  return (
    <>
      <div className="app-container">
        <Header />

        {/* <Container className="containerr"> */}
        <AppRoutes />
        {/* </Container> */}
      </div>
    </>
  );
}

export default App;
