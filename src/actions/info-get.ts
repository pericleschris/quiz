"use server";

import { INFO } from "@/functions/api";

export default async function infoGet() {
  const searchParams = new URLSearchParams(window.location.search);
  const ltik = searchParams.get("ltik");

  try {
    if (!ltik) throw new Error("Lti key não encontrado");
    const { url } = INFO();
    const response = await fetch(url, {
      headers: {
        Authorization: "Bearer " + ltik,
      },
    });
    if (!response.ok) throw new Error("Falha ao buscar os dados");
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Falha ao buscar o ltik nos parâmetros: " + error);
  }
}
