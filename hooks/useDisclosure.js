import { useState } from "react";

const useDisclosure = (
  defaultIsOpen = false,
  onOpen = () => {},
  onClose = () => {}
) => {
  const [isOpen, setIsOpen] = useState(defaultIsOpen);

  const open = () => {
    if (!isOpen) {
      setIsOpen(true);
      onOpen();
    }
  };

  const close = () => {
    if (isOpen) {
      setIsOpen(false);
      onClose();
    }
  };

  const toggle = () => {
    isOpen ? close() : open();
  };

  return [isOpen, { open, close, toggle } ];
};

export default useDisclosure;
