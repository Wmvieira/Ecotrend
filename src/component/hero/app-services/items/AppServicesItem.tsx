import { useDisclosure } from "@nextui-org/react";
import { createContext } from "react";
import IconWrapper from "~/component/iu/icon/IconWrapper";
import ItemModal from "./itemModal";

interface ItemProps {
  icon: React.ReactNode;
  name: string;
  description: string;
}

interface ItemCtxProps extends ItemProps {
  isOpen: boolean;
  onOpenChange: () => void;
}

export const ItemCtx = createContext<ItemCtxProps | undefined>(undefined);

export default function Item({ icon, name, description }: ItemProps) {
  const { isOpen, onOpenChange } = useDisclosure();

  return (
    <div className="flex flex-col justify-center gap-1 p-1 text-secondary-foreground">
      <IconWrapper
        className="mx-auto h-14 w-14 cursor-pointer md:h-16 md:w-16"
        onClick={onOpenChange}
        icon={icon}
      />
      <h3 className="text-center text-xs uppercase">{name}</h3>
      <ItemCtx.Provider
        value={{ icon, name, isOpen, description, onOpenChange }}
      >
        <ItemModal />
      </ItemCtx.Provider>
    </div>
  );
}
