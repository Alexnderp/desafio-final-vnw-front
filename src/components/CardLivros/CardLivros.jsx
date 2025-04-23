import s from "./cardLivros.module.scss";

export default function CardLivros(
  livro = {
    titulo,
    categoria,
    autor,
    imagem_url,
  }
) {
  return (
    <section className={s.cardSec}>
      <div>
        <img src={livro.imagem_url} alt="" />
        <p>{livro.titulo}</p>
        <p>{livro.autor}</p>
        <p>{livro.categoria}</p>
      </div>
    </section>
  );
}
