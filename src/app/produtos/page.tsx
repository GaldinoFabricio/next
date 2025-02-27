import { revalidateTag } from "next/cache";

export type Produto = {
   id?: string;
   nome: string;
   preco: number;
   descricao: string;
   estoque: number;
   importado: 0 | 1;
};

export default async function ProdutosPage() {
   const response = await fetch("https://api.origamid.online/produtos", {
      next: {
         tags: ["produtos"],
      },
   });
   
   const data = (await response.json()) as Produto[];
   if (!data) return <div>Nenhum produto encontrado</div>;
   return (
      <main>
         <h1>Produtos</h1>
         {data.map((produto) => (
            <div key={produto.id}>
               <h2>{produto.nome}</h2>
               <p>{produto.descricao}</p>
               <p>R$ {produto.preco}</p>
            </div>
         ))}
      </main>
   );
}
