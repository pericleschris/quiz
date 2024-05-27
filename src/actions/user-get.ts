"use server";
export interface User {
  name: string;
  email: string;
}

interface UserGetResponse {
  data: User | null;
  ok: boolean;
  error: string;
}

export default async function userGet(ltik: string): Promise<UserGetResponse> {
  try {
    const response = await fetch("https://lti-server.azurewebsites.net/info", {
      headers: {
        Authorization: `Bearer ${ltik}`,
      },
    });
    if (!response.ok) {
      throw new Error("Erro ao buscar o usuário");
    }
    const data = (await response.json()) as User;
    return {
      data,
      ok: true,
      error: "",
    };
  } catch (error: unknown) {
    return {
      data: null,
      ok: false,
      error: (error as Error).message || "Ocorreu um erro na solicitação",
    };
  }
}

// export const fetchUserData = async (ltik: string): Promise<User> => {
//   const response = await fetch("https://lti-server.azurewebsites.net/info", {
//     headers: {
//       Authorization: `Bearer ${ltik}`,
//     },
//   });

//   if (!response.ok) {
//     throw new Error("Network response was not ok");
//   }

//   const data = await response.json();
//   return {
//     name: data.name,
//     email: data.email,
//   };
// };
