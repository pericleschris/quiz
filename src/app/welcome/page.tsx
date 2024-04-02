import Image from "next/image";

export default function Welcome() {
  return (
    <section>
      <Image src={"/assets/grafismo-setas.svg"} width={695} height={61} alt="Grafismo" />
      <h2 className="heading-third">Valores que inspiram</h2>
      <h1 className="heading-secondary">Acolhimento que impulsiona</h1>
      <p>
        Assim como nossos estudantes aprendem matemática, física, história e português, eles aprendem solidariedade,
        respeito, paciência e outras virtudes. Por meio de uma proposta lúdica, promovemos o conhecimento, a cidadania e
        a autonomia desde a infância. Com isso, queremos inspirar um olhar mais empático para a vida e sermos uma
        referência na jornada de cada estudante. O SESI acredita que as virtudes ajudam os alunos a se desenvolverem
        como cidadãos conscientes de seus direitos e deveres. O resultado disso é uma convivência saudável com os
        colegas, a escola, a família e a sociedade em geral.
      </p>
      <Image src={"/assets/grafismo-setas.svg"} width={695} height={61} alt="Grafismo" />
    </section>
  );
}
