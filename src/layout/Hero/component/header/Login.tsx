import { useRouter } from "next/router";
import { PiSignIn } from "react-icons/pi";

export default function Login() {
  const router = useRouter();

  return (
    <div
      className="text-primary-300 my-auto text-2xl hover:cursor-pointer"
      onClick={() => router.push("/home")}
    >
      <PiSignIn />
    </div>
  );
}
