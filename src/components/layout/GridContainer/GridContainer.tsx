import React, { FC, PropsWithChildren } from "react";

import classNames from "classnames";

import "./GridContainer.scss";

interface GridContainerProps {
  className?: string;
}

const GridContainer: FC<PropsWithChildren<GridContainerProps>> = ({
  children,
  className,
}) => {
  const classes = classNames("grid-container", className);

  return (
    <div className={classes}>
      {children}
    </div>
  );
};

export default GridContainer;
