import React, { ChangeEvent, FC } from "react";

import classNames from "classnames";

import "./Switch.scss";

interface SwitchProps {
  checked: boolean;
  className?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Switch: FC<SwitchProps> = ({ checked, onChange, className }) => {
  const classes = classNames("switch-button", className);

  return (
    <button className={classes}>
      <input 
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="switch-button__input" />
      <span className="switch-button__thumb"></span>
      <span className="switch-button__track"></span>
    </button>
  );
};

export default Switch;
