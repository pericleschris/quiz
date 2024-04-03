"use client";
import React from "react";

export default function StartPage() {
  React.useEffect(() => {
    document.body.style.backgroundColor = "#2484C6";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <>
      <div className="container">
        <h1 className="heading-secondary text-center">
          Vamos identificar qual personagem tem características que se assemelham as suas?
        </h1>
      </div>
    </>
  );
}
