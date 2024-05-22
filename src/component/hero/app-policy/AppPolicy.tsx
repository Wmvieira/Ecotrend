import { Button } from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function AppPolicy() {
  const router = useRouter();
  return (
    <div className="flex h-32 w-full flex-col justify-center gap-2 md:col-span-2">
      <p className="text-center">
        Esse aplicativo é 100% gratuito. <br />
        Ao continuar entrar você estara aceitando os termos de uso do{" "}
        <Link className="text-primary-500 " href="/">
          Ecotrend
        </Link>
      </p>
      <div className="mx-auto">
        <Button onClick={() => void router.push("/home")}>Continuar</Button>
      </div>
    </div>
  );
}
