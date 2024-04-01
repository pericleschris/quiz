import Image from "next/image";
import styles from "@/components/button.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className="container">
      <Image src={"/assets/logotipo.svg"} width={695} height={242} alt="Logotipo" priority />
      <Image
        src={"/assets/personagens.png"}
        width={828}
        height={0}
        alt="Personagens"
        priority
        style={{ marginTop: "2rem" }}
      />
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <Link href={"/form"} className={styles.button}>
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
    </main>
  );
}
