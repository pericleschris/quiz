"use client";
import { useUser } from "@/context/user-context";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Home() {
  const { user } = useUser();

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
        <p style={{ textAlign: "center", margin: "1rem 0" }}>Olá, {user && user.name}! Seja bem-vindo!</p>
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
