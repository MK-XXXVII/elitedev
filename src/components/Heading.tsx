import type { ReactNode } from "react";
import clsx from "clsx";

type HeadingProps = {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
  className?: string;
  children?: ReactNode;
};

export function Heading({
  as: Comp = "h1",
  size = "lg",
  children,
  className,
}: HeadingProps) {
  return (
    <Comp
      className={clsx(
        "font-extrabold leading-tight tracking-tight md:leading-tight",
        size === "2xl" && "text-6xl md:text-9xl",
        size === "xl" && "text-5xl md:text-8xl",
        size === "lg" && "text-4xl md:text-5xl",
        size === "md" && "text-3xl md:text-4xl font-normal",
        size === "sm" && "text-xl md:text-2xl",
        className,
      )}
    >
      {children}
    </Comp>
  );
}
