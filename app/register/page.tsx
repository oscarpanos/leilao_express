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
