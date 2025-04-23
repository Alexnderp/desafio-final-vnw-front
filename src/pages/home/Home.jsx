import s from "./home.module.scss";
import CardHome from "../../components/cardHome/CardHome";

export default function Home() {
  return (
    <>
      <section className={s.banner}>
        <h2>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h2>
      </section>
        <h2 className={s.doar}>Por que devo doar?</h2>
      <section className={s.box}>
        <CardHome/>
      </section>
    </>
  );
}
