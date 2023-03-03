import { FC, useEffect, useState } from "react";

import { createPortal } from "react-dom";

interface Props {
  children: React.ReactNode;
}

const Portal: FC<Props> = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  const portal = document.querySelector("#myportal");
  if (!portal) return null;

  return mounted ? createPortal(children, portal) : null;
};

export default Portal;
