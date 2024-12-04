import CardLivros from "../../components/CardLivros/CardLivros";
import s from "./doados.module.scss";

export default function Doados() {
  return (
    <section className={s.doados}>
      <h2>Livros Doados</h2>
      <CardLivros />
    </section>
  );
}
