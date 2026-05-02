import { cn } from "@/lib/utils";
import type { ComponentPropsWithoutRef, ElementType } from "react";

type ContainerWidth = "content" | "prose";

type ContainerProps<T extends ElementType> = {
  as?: T;
  width?: ContainerWidth;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "width" | "className">;

const widthClass: Record<ContainerWidth, string> = {
  content: "max-w-[var(--width-content)]",
  prose: "max-w-[var(--width-prose)]",
};

export function Container<T extends ElementType = "div">({
  as,
  width = "content",
  className,
  ...props
}: ContainerProps<T>) {
  const Component = (as ?? "div") as ElementType;
  return (
    <Component
      className={cn(
        "mx-auto w-full px-6 sm:px-8",
        widthClass[width],
        className,
      )}
      {...props}
    />
  );
}
