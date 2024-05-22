import { CardBody } from "@nextui-org/react";
import HeroCard from "../ui/card/Card";

export default function AppInfo() {
  return (
    <HeroCard className="md:col-span-2">
      <CardBody className="relative flex w-full flex-col justify-around gap-4 rounded-md bg-primary p-8 md:h-80">
        <div className="text-center text-primary-50 md:text-left">
          <h1 className="text-4xl md:text-7xl">Ecotrend</h1>
          <h2 className="text-xl md:text-3xl">Rumo ao mundo melhor</h2>
        </div>
      </CardBody>
    </HeroCard>
  );
}
