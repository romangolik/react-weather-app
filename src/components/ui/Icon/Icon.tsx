import React, { FC, HTMLAttributes } from "react";

import classNames from "classnames";

import sprite from "@assets/icons/sprite.svg";

import "./Icon.scss";

interface IconProps {
  className?: string;
  name: string;
}

const Icon: FC<IconProps> = ({ className = "", name }) => {
  const classes = classNames("icon", className);

  return (
    <svg className={classes}>
      <use xlinkHref={`${sprite}#${name}`}></use>
    </svg>
  );
};

export default Icon;
