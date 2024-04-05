import React from "react";
import { Props } from "../thanks";
import Image from "next/image";

export default function Paciencio({ result }: Props) {
  React.useEffect(() => {
    document.body.style.background = "#2484C6";
    return () => {
      document.body.style.background = "";
    };
  }, []);

  return (
    <>
      <div className="text-center">
        <h1 className="heading-primary">{result}</h1>
        <Image src={"/assets/paciencio.png"} alt="Paciencio" width={1000} height={600} />
        <p className="heading-third">O paciêncio nos ensina que nem tudo acontece como gostaríamos</p>
        <p>
          A paciência é a virtude de espera. Saber que cada coisa tem seu tempo e é preciso respeitá-lo. É ter
          tranquilidade, mesmo quando as coisas não estão seguindo do jeito que você gostaria.
        </p>
      </div>
    </>
  );
}
