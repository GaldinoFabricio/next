"use client";
import { login } from "@/action/login";
import React from "react";

export default function Login() {
   async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
      event.preventDefault();
      
      await login(event.currentTarget.username.value, event.currentTarget.password.value);
   }
   return (
      <form onSubmit={handleSubmit}>
         <label htmlFor="username">Username:</label>
         <input type="text" id="username" name="username" />
         <label htmlFor="password">Senha:</label>
         <input type="password" id="password" name="password" />
         <button type="submit">Entrar</button>
      </form>
   );
}
