import { NextRequest, NextResponse } from "next/server";

const POST = async (req: NextRequest, res: NextResponse) => {
  try {
    const { email, password } = await req.json();
    console.log(email, password);
  } catch (e) {
    console.log({ e });
  }

  return NextResponse.json({ message: "sucess" });
};

export { POST };
