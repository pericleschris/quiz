import React from "react";
import { Props } from "../thanks";
import Image from "next/image";
import Link from "next/link";

export default function Tolerany({ result }: Props) {
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
        <Image src={"/sesi/assets/tolerany.png"} alt="Tolerany" width={1000} height={600} />
        <p className="heading-third">A tolerância é muito importante para quem quer viver bem em sociedade</p>
        <p>
          É a virtude que nos faz reconhecer e aceitar as diferenças no jeito de ser, pensar e agir dos outros. A
          tolerância vem sempre junto com o respeito.
        </p>
        <Link href={"/"} className="button">
          Finalizar
        </Link>
      </div>
    </>
  );
}
