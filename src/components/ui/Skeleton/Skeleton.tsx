import React, { FC, PropsWithChildren } from "react";

import classNames from "classnames";

import "./Skeleton.scss";

type SkeletonVariant = "text" | "circular" | "rounded" | "rectangular";

interface SkeletonProps extends PropsWithChildren {
  variant?: SkeletonVariant;
  className?: string;
  width?: string;
}

const Skeleton: FC<SkeletonProps> = ({ children, className, width, variant = "text" }) => {
  const classes = classNames("skeleton", className, {
    "skeleton_has-children": !!children,
    "skeleton_text": variant === "text",
    "skeleton_circular": variant === "circular",
    "skeleton_rounded": variant === "rounded",
    "skeleton_rectangular": variant === "rectangular",
  })

  return (
    <span className={classes} style={{width}}>
      {children}
    </span>
  )
}

export default Skeleton;