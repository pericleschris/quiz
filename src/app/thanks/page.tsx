import Link from "next/link";

export default function ThanksPage() {
  return (
    <section className="app">
      <div className="container">
        <h2>Obrigado por ter participado do</h2>
        <h1>Game das Virtudes</h1>
        <p>
          É importante dizer que essa metodologia é uma ferramenta criada para ajudar os nossos alunos a refletirem
          sobre si e a se conhecerem melhor. Entendemos que a personalidade é formada por diversos fatores. Portanto, o
          resultado não deve ser encarado como algo absoluto.
        </p>
        <Link href={"result"} className="button">
          Ver meu personagem
        </Link>
      </div>
    </section>
  );
}
