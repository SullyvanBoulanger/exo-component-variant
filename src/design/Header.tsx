import clsx from "clsx";
import { PropsWithChildren, ReactElement } from "react";

type HeaderWithChildren = PropsWithChildren<
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  >
>;

interface HeaderProps extends HeaderWithChildren {
  className?: string;
}

export default function Header({ children, className, ...props }: HeaderProps): ReactElement {
  return (
    <h1 className={clsx(className, "text-red-500 text-4xl font-bold uppercase p-8")} {...props}>
      {children}
    </h1>
  );
}
