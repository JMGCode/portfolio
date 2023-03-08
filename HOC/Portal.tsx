"use client";

import { FC, useEffect, useState } from "react";

import { createPortal } from "react-dom";

interface Props {
  children: React.ReactNode;
}

const Portal: FC<Props> = ({ children }) => {
  const [container, setContainer] = useState<HTMLDivElement>();
  useEffect(() => {
    setContainer(document.createElement("div"));
  }, []);

  return container ? createPortal(children, container) : null;
};

export default Portal;
