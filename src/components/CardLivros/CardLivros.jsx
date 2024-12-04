import s from "./cardLivros.module.scss";

export default function CardLivros() {
  return (
    <section className={s.cardSec}>
      <div>
        <img
          src="https://s3-alpha-sig.figma.com/img/83cb/623e/e52978ae2cd42de91631dbac27a45e47?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WZL5r5vt-hkzCcy0zeW8R~Q11GXAa2kPOrNsLqwAYZAp63KLW0oH0UCTWj4AFifHNKAUr8HG8tXq1aP3Gxf832gtOZ5suoho2kro9gL4GOaEEQGe0xUR09~bHWwnz4xas3MVATCmIByIoSXl9WbDQaoUxaLKjdWzRtUOiCcNLGn0~kvdcgmRItpuM1YYfholko9KuJF0o-viheflUBVtRz~qodZTW2QFvyPkDMYHAHCMynBcBz5gOKVV8L1gpyzEeJLgBl4Wgt2rxqkyrMnD2NmJdOiz7YErkO2ePtLrFbgYuiPQ0CQPzoYYAZg6gPI2Xlejt-JIYd4MrzSqyKsTnw__"
          alt=""
        />
        <p>O protagonista</p>
        <p>Susanne Andrade</p>
        <p>Ficção</p>
      </div>
    </section>
  );
}
