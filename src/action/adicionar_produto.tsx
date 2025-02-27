"use server";

import { Produto } from "@/app/produtos/page";
import { revalidateTag } from "next/cache";

export async function adicionarProduto(produto: Produto) {
   const response = await fetch("https://api.origamid.online/produtos", {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(produto),
   });
   if (!response.ok) {
      return null;
   }
   const data = await response.json();
   revalidateTag('produtos');
   return data;
}
