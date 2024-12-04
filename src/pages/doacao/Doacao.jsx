import { BookOpen } from "@phosphor-icons/react";
import s from "./doacao.module.scss";

export default function Doacao() {
  return (
    <section className={s.box}>
      <p>
        Por favor, preencha o formulário com suas informações e as informações
        do Livro
      </p>
      <form className={s.form}>
        <div className={s.image}>
          <BookOpen size={32} color="#005695" />
          <h4>Informações do Livro</h4>
        </div>
        <input type="text" placeholder="Título" />
        <input type="text" placeholder="Categoria" />
        <input type="text" placeholder="Autor" />
        <input type="text" placeholder="Link da Imagem" />
        <button>Doar</button>
      </form>
    </section>
  );
}
