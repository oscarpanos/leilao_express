"use client";

import Link from "next/link";
import { Menu, Gavel } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";

import Logo from "@/public/logo.svg";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { toast } from "@/components/ui/use-toast";

export default function Navbar() {
  const session = useSession();

  const logout = () => {
    toast({
      title: "Desconectado",
    });
    signOut();
  };
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
          <Button variant="outline" size="icon" className="shrink-0">
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
            <Link href="/data" className="hover:text-foreground">
              Imóveis
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
}
