"use client";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Navbar() {
  const session = useSession();
  return (
    <nav className="flex items-center justify-between bg-slate-700 px-10 text-white">
      <h1 className="text-xl  uppercase">Leilão Express</h1>
      <div>
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
