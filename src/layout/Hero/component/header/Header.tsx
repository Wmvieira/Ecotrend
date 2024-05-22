import { Button } from "@nextui-org/react";
import { useRouter } from "next/router";
import { PiSignIn } from "react-icons/pi";

export default function Header() {
  const router = useRouter();

  return (
    <header className="sticky flex w-full justify-between rounded-b-sm p-4">
      <div className="my-auto">
        <h3>Bem vindo ao Ecotrend</h3>
      </div>
      <div>
        <Button
          endContent={<PiSignIn className="text-lg" />}
          onClick={() => void router.push("/home")}
        >
          Entrar
        </Button>
      </div>
    </header>
  );
}
