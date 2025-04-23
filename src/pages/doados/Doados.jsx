import { useEffect, useState } from "react";
import CardLivros from "../../components/CardLivros/CardLivros";
import s from "./doados.module.scss";
import axios from "axios";

export default function Doados() {
  const [livros, setLivros] = useState([]);
  const getLivros = async () => {
    try {
      const response = await axios.get("https://desafio-vwn-api.onrender.com/livros");
      setLivros(response.data);
    } catch (error) {
      console.error("Erro ao buscar livros:", error);
    }
  };
  useEffect(() => {
    getLivros();
  }, []);
  return (
    <>
      <h2 className={s.title}>Livros Doados</h2>
      <section className={s.box}>
      {livros.map((livro) =>(
          <CardLivros autor={livro.autor} titulo={livro.titulo} categoria={livro.categoria} imagem_url={livro.imagem_url}/>
      ))}
      </section>
    </>
  );
}
