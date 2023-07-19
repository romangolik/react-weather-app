import React, { FC, MouseEventHandler, PropsWithChildren } from "react";

import classNames from "classnames";

import "./ContentBlock.scss";

type ContentBlockRadiusSize = "normal" | "smaller";
type ContentBlockPaddingSize = "normal" | "smaller" | "none";
type ContentBlockVariant = "aside" | "section" | "article" | "div" | "header" | "footer"

interface ContentBlockProps extends React.HTMLAttributes<HTMLElement> {
  as: ContentBlockVariant;
  paddingSize?: ContentBlockPaddingSize;
  radiusSize?: ContentBlockRadiusSize;
  onClick?: MouseEventHandler<HTMLElement>
}

const ContentBlock: FC<PropsWithChildren<ContentBlockProps>> = ({
  as = "div",
  onClick,
  children,
  className,
  paddingSize = "normal",
  radiusSize = "normal",
}) => {
  const classes = classNames("content-block", className, {
    "content-block_smaller-padding": paddingSize === "smaller",
    "content-block_padding-none": paddingSize === "none",
    "content-block_smaller-radius": radiusSize === "smaller",
  });

  const BlockElement = as;

  return <BlockElement onClick={onClick} className={classes}>{children}</BlockElement>;
};

export default ContentBlock;
