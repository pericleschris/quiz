import React from "react";
import { Props } from "../thanks";
import Image from "next/image";
import Link from "next/link";

export default function Perseveroso({ result }: Props) {
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
        <Image src={"/sesi/assets/perseveroso.png"} alt="Perseveroso" width={1000} height={600} />
        <p className="heading-third">O perseveroso nunca desiste</p>
        <p>
          Ser perseverante é ser dono da sua própria vontade e seguir no caminho desejado, sem desistir quando aparecem
          as dificuldades.
        </p>
        <Link href={"/"} className="button">
          Finalizar
        </Link>
      </div>
    </>
  );
}
