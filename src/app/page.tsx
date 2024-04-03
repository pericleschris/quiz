import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <section className="container">
      <Image src={"/assets/logotipo.svg"} width={695} height={242} alt="Logotipo" priority />
      <Image
        src={"/assets/personagens.png"}
        width={828}
        height={0}
        alt="Personagens"
        priority
        style={{ marginTop: "2rem" }}
      />
      <div style={{ textAlign: "center", marginBottom: "4rem" }}>
        <Link href={"/welcome"} className="button">
          Entrar
        </Link>
      </div>
      <Image
        src={"/assets/logotipo-sesi.svg"}
        width={208}
        height={71}
        alt="Logotipo Sesi"
        style={{ margin: "0 auto" }}
      />
    </section>
  );
}
