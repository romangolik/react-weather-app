import React, { FC, PropsWithChildren } from "react";

import "./Widget.scss";

interface WidgetSubcomponents {
  Header: typeof WidgetHeader;
  Content: typeof WidgetContent;
  Title: typeof WidgetTitle;
}

interface PropsWithClassName {
  className?: string;
}

type WidgetFC = FC<PropsWithChildren<PropsWithClassName>> & WidgetSubcomponents;

const Widget: WidgetFC = ({ children, className = "" }) => {
  let header = null;
  let content = null;

  const classes = ["widget", className].join(" ");

  React.Children.forEach(children, (child) => {
    if (!React.isValidElement(child)) return;
    if ((child.type as Function).name === "WidgetHeader") {
      header = child;
    }
    if ((child.type as Function).name === "WidgetContent") {
      content = child;
    }
  });

  return (
    <div className={classes}>
      {header}
      {content}
    </div>
  );
};

const WidgetHeader: FC<PropsWithChildren<PropsWithClassName>> = ({
  children,
  className = "",
}) => {
  const classes = ["widget__header", className].join(" ");

  return <header className={classes}>{children}</header>;
};
const WidgetTitle: FC<PropsWithChildren<PropsWithClassName>> = ({
  children,
  className = "",
}) => {
  const classes = ["small-text widget__title", className].join(" ");

  return <h2 className={classes}>{children}</h2>;
};
const WidgetContent: FC<PropsWithChildren<PropsWithClassName>> = ({
  children,
  className = ''
}) => {
  const classes = ["widget__content", className].join(" ");

  return <div className={classes}>{children}</div>;
};

Widget.Title = WidgetTitle;
Widget.Header = WidgetHeader;
Widget.Content = WidgetContent;

export default Widget;
