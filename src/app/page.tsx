import infoGet from "@/actions/info-get";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function HomePage() {
  const { data } = await infoGet();
  console.log(data);

  return (
    <section className="app animeLeft">
      <div className="container">
        <Image
          src={"https://cdn-quiz-a0cze4f3f0hkdjdu.z03.azurefd.net/assets/logotipo.svg"}
          width={695}
          height={242}
          alt="Logotipo"
          priority
        />
        <Image
          src={"https://cdn-quiz-a0cze4f3f0hkdjdu.z03.azurefd.net/assets/personagens.png"}
          width={828}
          height={0}
          alt="Personagens"
          priority
          style={{ marginTop: "2rem" }}
        />
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <Link href={"/welcome"} className="button">
            Jogar agora
          </Link>
        </div>
        <Image
          src={"https://cdn-quiz-a0cze4f3f0hkdjdu.z03.azurefd.net/assets/logotipo-sesi.svg"}
          width={208}
          height={71}
          alt="Logotipo Sesi"
          style={{ margin: "0 auto" }}
        />
      </div>
    </section>
  );
}
