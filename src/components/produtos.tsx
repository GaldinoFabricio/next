"use client";

import { adicionarProduto } from "@/action/adicionar_produto";
import React from "react";

export default async function ComponentsProdutos() {
   async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
      event.preventDefault();

      const resposta = await adicionarProduto({
         nome: event.currentTarget.nome.value,
         preco: Number(event.currentTarget.preco.value),
         descricao: event.currentTarget.descricao.value,
         estoque: Number(event.currentTarget.estoque.value),
         importado: event.currentTarget.imports.checked ? 1 : 0,
      });
      console.log(resposta);
   }
   return (
      <form onSubmit={handleSubmit}>
         <label htmlFor="nome">nome</label>
         <input type="text" id="nome" name="nome" />
         <label htmlFor="preco">preco</label>
         <input type="number" id="preco" name="preco" />
         <label htmlFor="descricao">descricao</label>
         <input type="text" id="descricao" name="descricao" />
         <label htmlFor="estoque">estoque</label>
         <input type="number" id="estoque" name="estoque" />
         <label htmlFor="importado">
            importado <input type="checkbox" name="imports" id="" />
         </label>
         <button>Enviar</button>
      </form>
   );
}
