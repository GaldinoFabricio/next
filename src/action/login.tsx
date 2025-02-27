"use server";

import { cookies } from "next/headers";

export async function login(username: string, password: string) {
   const response = await fetch("https://api.origamid.online/conta/login", {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify({
         username,
         password,
      }),
   });
   if (!response.ok) {
      return null;
   }
   const data = await response.json();
   cookies().set("token", data.token, {
      secure: true,
      httpOnly: true,
   });
   return data;
}
