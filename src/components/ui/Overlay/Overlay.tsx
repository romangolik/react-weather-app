import React, { FC, PropsWithChildren } from "react";

import "./Overlay.scss";
import { createPortal } from "react-dom";

interface OverlayProps extends PropsWithChildren {
  open: boolean;
  zIndex?: number;
  closeHandler: () => void;
}

const Overlay: FC<OverlayProps> = ({
  open,
  children,
  zIndex = 100,
  closeHandler,
}) => {
  return (
    open &&
    createPortal(
      <div 
        style={{zIndex: zIndex}}
        className="overlay" 
        onClick={closeHandler}>
        {children}
      </div>,
      document.body
    )
  );
};

export default Overlay;
