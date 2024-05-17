// import { UserContext } from "@/context/user-context";
// import { INFO } from "@/functions/api";
// import { useContext } from "react";

// export default async function infoGet() {
//   const { ltik } = useContext(UserContext);

//   try {
//     if (!ltik) throw new Error("Lti key não encontrado");
//     const { url } = INFO();
//     const response = await fetch(url, {
//       headers: {
//         Authorization: "Bearer " + ltik,
//       },
//     });
//     if (!response.ok) throw new Error("Falha ao buscar os dados");
//     const data = await response.json();
//   } catch (error) {
//     console.error("Falha ao buscar o ltik nos parâmetros: " + error);
//   }
// }
