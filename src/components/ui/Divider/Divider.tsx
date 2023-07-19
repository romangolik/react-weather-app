import React, { FC } from "react";

import classNames from "classnames";

import "./Divider.scss";

interface DividerProps {
  className?: string;
}

const Divider: FC<DividerProps> = ({ className }) => {
  const classes = classNames("divider", className);

  return (
    <hr className={classes} />
  )
};

export default Divider;