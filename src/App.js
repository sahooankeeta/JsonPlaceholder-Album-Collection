import * as React from "react";
import { Header, Home } from "./components";
import { BrowserRouter } from "react-router-dom";
import Container from "@mui/material/Container";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  return (
    <BrowserRouter>
      <Container maxWidth="xl">
        <Header />
        <ToastContainer />
        <Home />
      </Container>
    </BrowserRouter>
  );
};
export default App;
