"use client";

import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter } from "next/navigation";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "@/components/ui/use-toast";

interface Inputs {
  email: string;
  password: string;
}

export default function RegisterForm() {
  const router = useRouter();
  const formSchema = z.object({
    email: z.string().trim().email(),
    name: z.string().trim(),
    password: z
      .string()
      .refine(
        (val) =>
          /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
            val
          ),
        {
          message:
            "A senha deve ter pelo menos 8 caracteres e conter pelo menos uma maíuscula, uma minúscula e um símbolo.",
        }
      ),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema, {}, { raw: true }),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const formData = new FormData();

    for (const field of Object.keys(data) as Array<keyof typeof data>) {
      formData.append(`${String(field)}`, `${data[field]}`);
    }

    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: formData.get("email"),
        password: formData.get("password"),
        name: formData.get("name"),
      }),
    });

    const { status, message } = await res.json();
    if (status === "success") {
      toast({
        title: `${message}`,
      });
      router.push("/login");
    } else {
      toast({
        variant: "destructive",
        title: `${message}`,
      });
    }
  };

  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader className="font-sans text-2xl font-black">
        Criar Conta
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome</FormLabel>
                  <FormControl>
                    <Input placeholder="João da Silva" {...field} required />
                  </FormControl>
                  <FormDescription>Insira seu nome</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="email@provedor.com"
                      {...field}
                      required
                    />
                  </FormControl>
                  <FormDescription>Insira seu email</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Senha</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Senha"
                      {...field}
                      type="password"
                      required
                    />
                  </FormControl>
                  <FormDescription>Insira sua senha</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" variant={"outline"} className="w-full">
              Criar
            </Button>
          </form>
        </Form>
        <div className="mt-4 text-center text-sm">
          Já possui uma conta?{" "}
          <Link href="/login" className="underline">
            Logar
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
