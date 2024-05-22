import { CardBody } from "@nextui-org/react";
import HeroCard from "../ui/card/Card";
import IconWrapper, { iconWrapperClass } from "~/component/iu/icon/IconWrapper";
import { PiUsersThree } from "react-icons/pi";

export default function AppCommunity() {
  return (
    <HeroCard className="">
      <CardBody>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col justify-center border-b-1 border-secondary-foreground pb-2">
            <IconWrapper
              className="mx-auto h-20 w-20"
              icon={<PiUsersThree className={iconWrapperClass} />}
            />
            <h3 className="mx-auto text-xl uppercase">Comunidade</h3>
          </div>
          <span>
            O <span>Ecotrend</span> chama você
          </span>
          <p>
            Queremos construir um mundo melhor. Para isso a plataforma conta com
            a comunidade para compartilhar informações relevantes para o meio
            ambiente!
          </p>
        </div>
      </CardBody>
    </HeroCard>
  );
}
