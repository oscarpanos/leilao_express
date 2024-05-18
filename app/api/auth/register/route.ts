import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { hash } from "bcrypt";

import prisma from "@/prisma/db/db";

const POST = async function (req: NextRequest, res: NextResponse) {
  const formSchema = z.object({
    email: z.string().trim().email(),
    name: z.string().trim(),
    password: z
      .string()
      .refine((val) =>
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
          val
        )
      ),
  });
  try {
    const { email, password, name } = formSchema.parse(await req.json());
    const userExist = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    console.log(userExist);
    if (userExist) {
      return NextResponse.json({
        status: "fail",
        message: "Email já cadastrado.",
      });
    } else {
      const hashedPassword = await hash(password, 12);
      const user = await prisma.user.create({
        data: {
          email: email,
          name: name,
          password: hashedPassword,
        },
      });
      console.log({ user });
      return NextResponse.json({
        status: "success",
        message: "Usuário Criado",
      });
    }
  } catch (e) {
    return NextResponse.json({ status: "fail", message: "Error" });
  }
};

export { POST };
