import { List, MagnifyingGlass, X } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import s from "./header.module.scss";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className={s.header}>
        <figure className={s.logo}>
          <img
            src="https://s3-alpha-sig.figma.com/img/5d1b/cbca/3ccbf0132ee7698277cda5e313a3ac18?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T~0ajvhw~H2FTZhPoJhwZB3CZQff~s4LRjHc-AoWHD-uMI~MxZVjxIfHDwl2pxk~nxl7SxSPvVh2K5vxv~yGL6TABEourZTQ-XgQIS-QHEfMH24KaMmzXSMVmjMdtVo4f0a5scb8MoxaynASlP51PvuPb-z8~yD5N8tAYGu7WfFZTbN6SvNXfmRKZdae2oOGretOBlvVIF16fRAXvK6rlem-wkGYakrkFerBRYEE-BAqZutO-DVhQzBdA~8xQL5l72tDjhVcgICQO5OFpJOZdY2k3WZzlezFkhUyki~jd2pTt7vUSM37iKWW5-qH7ZQ3Mp581e9W7sVlV3JkLBlBhw__"
            alt="Logo"
          />
          <h1>Livros Vai na Web</h1>
        </figure>
        <nav className={isOpen ? s.active : s.menu}>
          <ul>
            <li onClick={toggle}>
              <Link className={s.link} to={"/"}>
                Inicio
              </Link>
            </li>
            <li onClick={toggle}>
              <Link className={s.link} to={"/livrosdoados"}>
                Livros Doados
              </Link>
            </li>
            <li onClick={toggle}>
              <Link className={s.link} to={"/querodoar"}>
                Quero Doar
              </Link>
            </li>
          </ul>
          <div className={s.mobileIcon} onClick={toggle}>
            <List size={34} color="#fff" weight="thin" />
          </div>
        </nav>
        <div className={s.busca}>
          <input type="search" placeholder="O que você procura?" />
          <button>
            <MagnifyingGlass size={24} color="#fff" />
          </button>
        </div>
      </header>
    </>
  );
}
