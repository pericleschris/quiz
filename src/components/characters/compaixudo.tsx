import React from "react";
import { Props } from "../thanks";
import Image from "next/image";
import Link from "next/link";

export default function Compaixudo({ result }: Props) {
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
        <Image src={"/assets/compaixudo.png"} alt="Compaixudo" width={1000} height={600} />
        <p className="heading-third">A compaixão nos faz entender que todos somos humanos e frágeis</p>
        <p>
          A compaixão é a virtude que nos faz sentir as dores dos outros como se fossem as nossas, e nos desperta a
          vontade de ajudar.
        </p>
        <Link href={"/"} className="button">
          Finalizar
        </Link>
      </div>
    </>
  );
}
