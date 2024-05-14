import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import RegisterForm from "../components/RegisterForm";
import Navbar from "../components/Navbar";

export default function Register() {
  return (
    <main className="flex min-h-screen w-screen flex-col gap-24">
      <Navbar />
      <div className="p-4">
        <RegisterForm />
      </div>
    </main>
  );
}
