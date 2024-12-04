import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./GlobalStyles/globalStyles.scss";
import Header from "./components/Header/Header";
import Home from "./pages/home/Home";
import Footer from "./components/Footer/Footer";
import Doacao from "./pages/doacao/doacao";
import Doados from "./pages/doados/Doados";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/querodoar" element={<Doacao />} />
          <Route path="/livrosdoados" element={<Doados />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
