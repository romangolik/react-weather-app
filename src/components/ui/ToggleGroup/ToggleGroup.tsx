import React, { ButtonHTMLAttributes, FC, PropsWithChildren } from "react";

import classNames from "classnames";

import "./ToggleGroup.scss";

interface ToggleGroupProps extends PropsWithChildren {
  value: string;
  onChange: (value: string) => void
}

interface ToggleGroupSubcomponents {
  Button: typeof ToggleGroupButton
}

const ToggleGroup: FC<ToggleGroupProps> & ToggleGroupSubcomponents = ({ children, onChange, value }) => {
  const handleChange = (selectedValue: string) => {
    if (!onChange) {
      return;
    }

    onChange(selectedValue);
  }

  return (
    <div className="toggle-group">
      {React.Children.map(children, child => {
        if (!React.isValidElement(child)) {
          return null;
        }

        if ((child.type as Function).name !== "ToggleGroupButton") {
          return null;
        }

        return React.cloneElement<ToggleGroupButtonProps>(child, {
          selected: child.props.value === value,
          onChange: handleChange,
        });
      })}
    </div>
  );
};

interface ToggleGroupButtonProps extends PropsWithChildren {
  value?: string;
  className?: string;
  selected?: boolean,
  onChange?: (value: string) => void
}

const ToggleGroupButton: FC<ToggleGroupButtonProps> = ({ children, selected, onChange, value, className }) => {
  const classes = classNames("toggle-group__button", className, {
    "toggle-group__button_active": selected
  });

  const handleChange = () => {
    if (!onChange) {
      return;
    }
    
    onChange(value);
  }

  return (
    <button 
      className={classes}
      onClick={handleChange}>
      {children}
    </button>
  );
}

ToggleGroup.Button = ToggleGroupButton;

export default ToggleGroup;
