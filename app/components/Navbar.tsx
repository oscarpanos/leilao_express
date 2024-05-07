"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function Navbar() {
  const session = useSession();
  return (
    <nav className="flex items-center justify-between bg-slate-700 px-10 text-white">
      <Link href="/">
        <h1 className="text-xl  uppercase">Leilão Express</h1>
      </Link>
      <div className="cursor-pointer">
        {session.data ? (
          <div className="p-2" onClick={() => signOut()}>
            Sair
          </div>
        ) : (
          <div className="p-2" onClick={() => signIn()}>
            Logar
          </div>
        )}
      </div>
    </nav>
  );
}
