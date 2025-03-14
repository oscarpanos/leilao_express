"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

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
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

import type { SignInResponse } from "next-auth/react";

interface Inputs {
  email: string;
  password: string;
}

export default function LoginForm() {
  const router = useRouter();
  const { toast } = useToast();

  const formSchema = z.object({
    email: z.string().trim().email(),
    password: z.string(),
    //   .refine(
    //     (val) =>
    //       /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
    //         val
    //       ),
    //     {
    //       message:
    //         "Password must be at least 8 characters long and contain at least one uppercase character, one lowercase character, and one special symbol",
    //     }
    //   ),
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

    const { ok, error } = (await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    })) as unknown as SignInResponse;
    console.log(error);
    if (ok) {
      toast({
        title: "Logado",
      });
      router.push("/painel");
    } else {
      toast({
        title: "Login inválido",
        description: "Tente novamente",
        variant: "destructive",
      });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="email@provedor.com" {...field} required />
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
          Entrar
        </Button>
      </form>
    </Form>
  );
}
