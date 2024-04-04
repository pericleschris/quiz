import Image from "next/image";
import styles from "./welcome.module.css";
import Link from "next/link";

export default function WelcomePage() {
  return (
    <section className="app">
      <div className="container text-center">
        <div className={styles.subcontainer}>
          <div>
            <Image
              src={"/assets/grafismo-setas.svg"}
              width={695}
              height={61}
              alt="Grafismo"
              style={{ marginBottom: "4rem" }}
            />
          </div>
          <div>
            <h2 className="heading-third">Valores que inspiram</h2>
            <h1 className="heading-secondary">Acolhimento que impulsiona</h1>
            <p>
              Assim como nossos estudantes aprendem matemática, física, história e português, eles aprendem
              solidariedade, respeito, paciência e outras virtudes. Por meio de uma proposta lúdica, promovemos o
              conhecimento, a cidadania e a autonomia desde a infância. Com isso, queremos inspirar um olhar mais
              empático para a vida e sermos uma referência na jornada de cada estudante. O SESI acredita que as virtudes
              ajudam os alunos a se desenvolverem como cidadãos conscientes de seus direitos e deveres. O resultado
              disso é uma convivência saudável com os colegas, a escola, a família e a sociedade em geral.
            </p>
            <Link href={"/start"} className="button" style={{ marginTop: "1rem" }}>
              Começar
            </Link>
          </div>
          <div>
            <Image
              src={"/assets/grafismo-setas.svg"}
              width={695}
              height={61}
              alt="Grafismo"
              style={{ marginTop: "4rem" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
