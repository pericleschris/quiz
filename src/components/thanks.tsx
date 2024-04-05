import React from "react";
import Tolerany from "@/components/characters/tolerany";
import Compaixudo from "@/components/characters/compaixudo";
import Paciencio from "@/components/characters/paciencio";
import Perseveroso from "@/components/characters/perseveroso";
import Button from "@/components/button";

export type Props = {
  result: string;
};

export default function Thanks({ result }: Props) {
  const [showCharacter, setShowCharacter] = React.useState(false);

  React.useEffect(() => {
    document.body.style.background = "#EF4A84";
    return () => {
      document.body.style.background = "";
    };
  }, []);

  function renderResultComponent() {
    switch (result) {
      case "Tolerany":
        return <Tolerany result={result} />;
      case "Compaixudo":
        return <Compaixudo result={result} />;
      case "Paciêncio":
        return <Paciencio result={result} />;
      case "Perseveroso":
        return <Perseveroso result={result} />;
      default:
        return null;
    }
  }

  return (
    <>
      {!showCharacter ? (
        <div className="text-center">
          <h2 className="heading-third">Obrigado por ter participado do</h2>
          <h1 className="heading-primary">Game das Virtudes</h1>
          <p style={{ marginBottom: "2rem" }}>
            É importante dizer que essa metodologia é uma ferramenta criada para ajudar os nossos alunos a refletirem
            sobre si e a se conhecerem melhor. Entendemos que a personalidade é formada por diversos fatores. Portanto,
            o resultado não deve ser encarado como algo absoluto.
          </p>
          <Button onClick={() => setShowCharacter(true)} style={{ background: "#834FA0" }}>
            Ver meu personagem
          </Button>
        </div>
      ) : (
        renderResultComponent()
      )}
    </>
  );
}
