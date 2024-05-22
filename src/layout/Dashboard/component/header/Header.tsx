import { PiArrowLeft } from "react-icons/pi";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  return (
    <header className="flex w-full flex-row justify-between gap-2 p-4">
      <div className="my-auto h-full text-primary-foreground hover:cursor-pointer ">
        <PiArrowLeft size={24} onClick={() => router.back()} />
      </div>
    </header>
  );
}
