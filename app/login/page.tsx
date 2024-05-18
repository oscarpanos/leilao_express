import Image from "next/image";
import Link from "next/link";

import LoginImage from "@/public/imgs/login.jpg";

import LoginForm from "../components/LoginForm";
import Navbar from "../components/Navbar";

export default function Login() {
  return (
    <>
      <Navbar />
      <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
        <div className="flex items-center justify-center py-12">
          <div className="mx-auto grid w-[350px] gap-6">
            <div className="grid gap-2 text-center">
              <h1 className="text-3xl font-bold">Login</h1>
              <p className="text-balance text-muted-foreground">
                Digite seu email para logar na sua conta
              </p>
            </div>
            <LoginForm />
            <div className="mt-4 text-center text-sm">
              Não tem uma conta?{" "}
              <Link href="register" className="underline">
                Criar conta
              </Link>
            </div>
          </div>
        </div>
        <div className="hidden bg-muted lg:block">
          <Image
            src={LoginImage}
            alt="Image"
            width="1920"
            height="00"
            className="dark:brightness-[0.2] dark:grayscale"
          />
        </div>
      </div>
    </>
  );
}
