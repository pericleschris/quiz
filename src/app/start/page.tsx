import React from "react";
import styles from "./start.module.css";
import Link from "next/link";

export default function StartPage() {
  return (
    <section className="app bg-secondary">
      <div className={`${styles.grafismoRoxo} ${styles.grafismoAzul}`}>
        <div className="container text-center" style={{ zIndex: "12", position: "relative" }}>
          <h1 className="heading-secondary">
            Vamos identificar qual personagem tem características que se assemelham as suas?
          </h1>
          <Link href={"/quiz"} className="button" style={{ marginTop: "1rem" }}>
            Começar quiz
          </Link>
        </div>
      </div>
    </section>
  );
}
