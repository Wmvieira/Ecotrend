import { Button } from "@nextui-org/react";
import Link from "next/link";
import { PiSignIn } from "react-icons/pi";

export default function Login() {
  return (
    <Button
      className="text-xl"
      as={Link}
      href="/home"
      color="primary"
      startContent={<PiSignIn />}
      isIconOnly
    />
  );
}
