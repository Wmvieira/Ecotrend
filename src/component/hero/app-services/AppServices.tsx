import {
  PiCat,
  PiDrop,
  PiMapTrifold,
  PiPersonSimpleBike,
  PiPlant,
  PiRecycle,
  PiTrash,
} from "react-icons/pi";
import Item from "./items/AppServicesItem";
import HeroCard from "../ui/card/Card";
import { CardBody } from "@nextui-org/react";
import { iconWrapperClass } from "~/component/iu/icon/IconWrapper";

export default function AppServices() {
  return (
    <HeroCard className="">
      <CardBody>
        <div className="my-auto flex flex-wrap justify-center gap-5 md:gap-7 md:px-24">
          <Item
            icon={<PiTrash className={iconWrapperClass} />}
            name="Lixo"
            description="Vamos ajudar você a gerenciar o lixo de forma eficiente e sustentável, ensinando práticas como reduzir o consumo, reutilizar objetos, reciclar corretamente, compostar resíduos orgânicos e descartar materiais perigosos de maneira segura."
          />
          <Item
            icon={<PiPlant className={iconWrapperClass} />}
            name="Plantio"
            description="Vamos ajudar você a cultivar plantas de forma eficiente e sustentável, ensinando práticas como escolher espécies adequadas, preparar o solo corretamente, usar técnicas de irrigação eficientes, fazer compostagem para adubar, e controlar pragas de maneira natural."
          />
          <Item
            icon={<PiDrop className={iconWrapperClass} />}
            name="Água"
            description="Vamos ajudar você a usar a água de forma eficiente e sustentável, ensinando práticas como reduzir o consumo diário, reutilizar água sempre que possível, consertar vazamentos rapidamente, coletar água da chuva, e usar dispositivos economizadores em casa."
          />
          <Item
            icon={<PiCat className={iconWrapperClass} />}
            name="Animais"
            description="Vamos ajudar você a cuidar dos animais de forma ética e sustentável, ensinando práticas como respeitar o habitat natural, adotar em vez de comprar, fornecer alimentação adequada, garantir cuidados veterinários regulares, e apoiar iniciativas de preservação e bem-estar animal."
          />
          <Item
            icon={<PiRecycle className={iconWrapperClass} />}
            name="Reciclagem"
            description="Vamos ajudar você a reciclar de forma eficiente e sustentável, ensinando práticas como separar corretamente os materiais recicláveis, lavar os itens antes de descartá-los, identificar os símbolos de reciclagem, levar resíduos eletrônicos a pontos de coleta, e reduzir o uso de plásticos descartáveis."
          />
          <Item
            icon={<PiPersonSimpleBike className={iconWrapperClass} />}
            name="Lazer"
            description="Vamos ajudar você a aproveitar o lazer de forma sustentável e consciente, ensinando práticas como escolher destinos ecológicos, reduzir o impacto ambiental das suas atividades, usar equipamentos duráveis e sustentáveis, participar de atividades ao ar livre que preservem a natureza, e apoiar o ecoturismo."
          />
          <Item
            icon={<PiMapTrifold className={iconWrapperClass} />}
            name="Localização"
            description="Vamos ajudar você a se orientar de forma eficiente e segura, ensinando práticas como usar as estrelas para se localizar à noite, entender a posição do sol durante o dia, ler mapas e bússolas corretamente, reconhecer sinais naturais para encontrar direção, e o que fazer em situações de emergência quando estiver perdido."
          />
        </div>
      </CardBody>
    </HeroCard>
  );
}
