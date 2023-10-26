"use client";
import { useEffect, useState } from "react";

import { StoreModal } from "@/components/modals/StoreModal";

export const ModalProvider = () => {
  const [ismounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!ismounted) {
    return null;
  }

  return (
    <>
      <StoreModal />
    </>
  );
};
