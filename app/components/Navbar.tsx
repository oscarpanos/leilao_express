"use client";

import Link from "next/link";
import { CircleUser, Menu, Gavel } from "lucide-react";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

import Logo from "@/public/logo.svg";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Navbar() {
  const session = useSession();
  return (
    <header className="sticky top-0 z-30 flex h-16 w-full items-center justify-between gap-4 border-b bg-background px-4 md:px-6">
      <nav className="w-full flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:justify-between md:gap-5 md:text-sm lg:gap-6">
        <div>
          <Link
            href="/"
            className="flex items-center gap-2 text-lg font-semibold md:text-base"
          >
            <Image src={Logo} width={50} height={50} alt="logo" />
            <span className="uppercase">Leilões</span>
            <span className="sr-only">Chama Leilões</span>
          </Link>
        </div>
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="size-5" />
            <span className="sr-only">Abrir menu de navegação</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              href="#"
              className="flex items-center gap-2 text-lg font-semibold"
            >
              <Gavel className="size-6" />
              <span className="sr-only">Chama Leilões</span>
            </Link>
            <Link href="#" className="hover:text-foreground">
              Dashboard
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
      <div className="flex items-center gap-4 md:gap-2 lg:gap-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary" size="icon" className="rounded-full">
              <CircleUser className="size-5" />
              <span className="sr-only">Abrir menu de navegação</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {session.data && (
              <Link href="/painel">
                <DropdownMenuLabel>Meu painel</DropdownMenuLabel>
              </Link>
            )}
            {session.data && <DropdownMenuSeparator />}
            {session.data && (
              <Link href="/config">
                <DropdownMenuItem>Configurações</DropdownMenuItem>
              </Link>
            )}
            {session.data && (
              <Link href="suporte">
                <DropdownMenuItem>Suporte</DropdownMenuItem>
              </Link>
            )}
            {session.data && <DropdownMenuSeparator />}
            {session.data ? (
              <DropdownMenuItem
                className="cursor-pointer p-2"
                onClick={() => signOut()}
              >
                Sair
              </DropdownMenuItem>
            ) : (
              <DropdownMenuItem
                className="cursor-pointer p-2"
                onClick={() => signIn()}
              >
                Logar
              </DropdownMenuItem>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
