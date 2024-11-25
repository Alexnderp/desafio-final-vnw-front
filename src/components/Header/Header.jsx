import { MagnifyingGlass } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import s from "./header.module.scss";

export default function Header() {
  return (
    <>
      <header className={s.header}>
        <figure className={s.logo}>
          <img src="" alt="Logo" />
        </figure>
        <nav className={s.menu}>
          <ul>
            <li>
              <Link className={s.link} to={"/"}>
                {" "}
                Inicio
              </Link>
            </li>
            <li>
              <Link className={s.link} to={"/livrosdoados"}>
                Livros Doados
              </Link>
            </li>
            <li>
              <Link className={s.link} to={"/querodoar"}>
                {" "}
                Quero Doar
              </Link>
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
    </>
  );
}
