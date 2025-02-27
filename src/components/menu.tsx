import Link from 'next/link';

export default function Menu() {
  return (
    <ul className="menu">
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/sobre#empresa" scroll={false}>
          Sobre
        </Link>
      </li>
      <li>
        <Link href="/produtos">Produtos</Link>
      </li>
      <li>
        <Link href="/produtos/adicionar">Adicionar produtos</Link>
      </li>
      <li>
        <Link href="/login" scroll={false}>
          Login
        </Link>
      </li>
    </ul>
  );
}
