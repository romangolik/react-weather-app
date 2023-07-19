import React, { FC, PropsWithChildren } from "react";

import classNames from "classnames";

import "./Button.scss";

type ButtonPaddingSize = "normal" | "smaller";
type ButtonVariant = "base" | "primary" | "secondary";

interface ButtonProps extends PropsWithChildren {
  onClick?: () => void;
  paddingSize?: ButtonPaddingSize;
  disabled?: boolean;
  variant?: ButtonVariant;
}

const Button: FC<ButtonProps> = ({
  children,
  onClick,
  disabled = false,
  variant = "base",
  paddingSize = "normal",
}) => {
  const classes = classNames("button small-text medium-weight", {
    "button_smaller-padding": paddingSize === "smaller",
    "button_base": variant === "base",
    "button_primary": variant === "primary",
    "button_secondary": variant === "secondary",
  });

  return (
    <button className={classes} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
