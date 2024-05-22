import { Modal, ModalBody, ModalContent, ModalHeader } from "@nextui-org/react";
import { useContext } from "react";
import { ItemCtx } from "./AppServicesItem";

export default function ItemModal() {
  const item = useContext(ItemCtx);

  return (
    <Modal
      isOpen={item?.isOpen}
      onOpenChange={item?.onOpenChange}
      placement="center"
    >
      <ModalContent>
        <>
          <ModalHeader className="flex flex-col gap-1">
            {item?.name}
          </ModalHeader>
          <ModalBody>
            <p className="p-1 md:p-2 md:pb-4">{item?.description}</p>
          </ModalBody>
        </>
      </ModalContent>
    </Modal>
  );
}
