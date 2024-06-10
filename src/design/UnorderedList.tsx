import clsx from "clsx";
import { PropsWithChildren } from "react";

type UnorderedListWithChildren = PropsWithChildren<
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  >
>;

interface UnorderedListProps extends UnorderedListWithChildren {
  className?: string;
}

export default function UnorderedList({
  children,
  className,
  ...props
}: UnorderedListProps) {
  return (
    <ul className={clsx(className, "flex flex-col px-8 gap-8")} {...props}>
      {children}
    </ul>
  );
}
