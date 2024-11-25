import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./GlobalStyles/globalStyles.scss";
import Header from "./components/Header/Header";
import Home from "./pages/home/Home";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
