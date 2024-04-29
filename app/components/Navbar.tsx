"use client";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Navbar() {
  const session = useSession();
  return (
    <nav className="flex justify-between">
      <h1 className="text-lg font-bold">Leilão Express</h1>
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
