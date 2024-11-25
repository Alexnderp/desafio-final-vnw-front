import s from "./home.module.scss";
import CardHome from "../../components/cardHome/CardHome";

export default function Home() {
  return (
    <>
      <section className={s.banner}>
        <h2>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h2>
      </section>
      <section className={s.doar}>
        <h2>Por que devo doar?</h2>
        <CardHome/>
      </section>
    </>
  );
}
