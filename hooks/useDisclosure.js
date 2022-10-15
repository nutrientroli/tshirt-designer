import { useState } from "react";

const useDisclosure = (
  defaultIsOpen = false,
  onOpen = () => {},
  onClose = () => {}
) => {
  const [isOpen, setIsOpen] = useState(defaultIsOpen);

  const open = () => {
    if (!isOpen) {
      console.log("open");
      setIsOpen(true);
      onOpen();
    }
  };

  const close = () => {
    if (isOpen) {
      console.log("close");
      setIsOpen(false);
      onClose();
    }
  };

  const toggle = () => {
    isOpen ? close() : open();
  };

  return { isOpen, open, close, toggle };
};

export default useDisclosure;
