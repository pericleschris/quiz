"use server";
export interface User {
  name: string;
  email: string;
}

export const fetchUserData = async (ltik: string): Promise<User> => {
  const response = await fetch("https://lti-server.azurewebsites.net/info", {
    headers: {
      Authorization: `Bearer ${ltik}`,
    },
  });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const data = await response.json();
  return {
    name: data.name,
    email: data.email,
  };
};
