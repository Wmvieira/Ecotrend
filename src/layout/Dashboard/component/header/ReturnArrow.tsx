import { useRouter } from "next/router";
import { PiArrowLeft } from "react-icons/pi";

export default function ReturnArrow() {
  const router = useRouter();

  return (
    <div className="text-primary-foreground my-auto h-full hover:cursor-pointer ">
      <PiArrowLeft size={24} onClick={() => router.back()} />
    </div>
  );
}
