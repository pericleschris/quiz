"use server";

import { cookies } from "next/headers";

export interface User {
  name: string;
  email: string;
}

interface UserGetResponse {
  data: User | null;
  ok: boolean;
  error: string;
}

export default async function userGet(): Promise<UserGetResponse> {
  const token = cookies().get("token")?.value;

  try {
    const response = await fetch("https://lti-server.azurewebsites.net/info", {
      headers: {
        Authorization: `Bearer ${token}`,
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
