import { BookOpen } from "@phosphor-icons/react";
import s from "./doacao.module.scss";
import { useState } from "react";
import axios from "axios";

export default function Doacao() {
  const [titulo, setTitulo] = useState("");
  const [categoria, setCategoria] = useState("");
  const [autor, setAutor] = useState("");
  const [imagem_url, setImagem_url] = useState("");

  const sendData = async () => {
    const apiUrl = "https://desafio-vwn-api.onrender.com/doar";
    const data = {
      titulo,
      categoria,
      autor,
      imagem_url,
    };

    await axios.post(apiUrl, data);

    alert("Livro cadastrado!!");

    setTitulo("");
    setCategoria("");
    setAutor("");
    setImagem_url("");
  };

  const getTitulo = (e) => {
    setTitulo(e.target.value);
  };

  const getCategoria = (e) => {
    setCategoria(e.target.value);
  };

  const getAutor = (e) => {
    setAutor(e.target.value);
  };

  const getImagem = (e) => {
    setImagem_url(e.target.value);
  };

  return (
    <section className={s.box}>
      <p>
        Por favor, preencha o formulário com suas informações e as informações
        do Livro
      </p>
      <form className={s.form} onSubmit={(e)=> e.preventDefault()}> {}
        <div className={s.image}>
          <BookOpen size={32} color="#005695" />
          <h4>Informações do Livro</h4>
        </div>
        <input onChange={getTitulo} type="text" placeholder="Título" value={titulo}/>
        <input onChange={getCategoria} type="text" placeholder="Categoria" value={categoria} />
        <input onChange={getAutor} type="text" placeholder="Autor" value={autor}/>
        <input onChange={getImagem} type="text" placeholder="Link da Imagem" value={imagem_url}/>
        <button type="submit" value={"Doar"} onClick={sendData}>Doar</button>
      </form>
    </section>
  );
}
