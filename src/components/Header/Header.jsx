import { Component } from "react";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import s from "./header.module.scss";

class Header extends Component {
  render() {
    return (
      <BrowserRouter>
        <header className={s.header}>
          <figure className={s.logo}>
            <img src="" alt="Logo" />
          </figure>
          <nav className={s.menu}>
            <ul>
              <li>
                <Link to={"/"}> Inicio</Link>
              </li>
              <li>
                <Link to={"/livrosdoados"}>Livros Doados</Link>
              </li>
              <li>
                <Link to={"/querodoar"}> Quero Doar</Link>
              </li>
            </ul>
          </nav>
          <section className={s.busca}>
            <input type="search" placeholder="O que você procura?" />
            <button>
              <MagnifyingGlass size={24} color="#fff" />
            </button>
          </section>
        </header>
        <Routes>
          {/* <Route path="/" element={} />
          <Route path="/livrosdoados" element={} />
          <Route path="/querodoar" element={} />
        </Routes> */}
      </BrowserRouter>
    );
  }
}

export default Header;
