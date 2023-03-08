// "use client";

import { FC, useEffect, useState } from "react";

import { createPortal } from "react-dom";

interface Props {
  children: React.ReactNode;
}

const Portal: FC<Props> = ({ children }) => {
  const [container, setContainer] = useState<Element | null>();
  useEffect(() => {
    const portal = document?.querySelector("#myportal");
    setContainer(portal);
  }, []);

  return container ? createPortal(children, container) : null;
};

export default Portal;
