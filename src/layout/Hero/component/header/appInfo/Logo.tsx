import Image from "next/image";

export default function Logo() {
  return (
    <div className="relative flex h-10 w-10 flex-row">
      <Image
        src="/logo.png"
        alt="Ecotrend logo"
        className="rounded-lg"
        fill={true}
      />
    </div>
  );
}
