import clsx from "clsx";
import { PropsWithChildren, ReactElement } from "react";

type SectionHeaderWithChildren = PropsWithChildren<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>;

interface SectionHeaderProps extends SectionHeaderWithChildren {
  className?: string;
}

export default function SectionHeader({
  children,
  className,
  ...props
}: SectionHeaderProps): ReactElement {
  return (
    <div
      className={clsx(className, "relative p-4 font-bold uppercase text-2xl text-blue-100")}
      {...props}
    >
      {children}
    </div>
  );
}
