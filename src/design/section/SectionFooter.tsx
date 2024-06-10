import clsx from "clsx";
import { PropsWithChildren, ReactElement } from "react";

type SectionFooterWithChildren = PropsWithChildren<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>;

interface SectionFooterProps extends SectionFooterWithChildren {
  className?: string;
}

export default function SectionFooter({
  children,
  className,
  ...props
}: SectionFooterProps): ReactElement {
  return (
    <div
      className={clsx(
        "relative w-full bg-blue-800 p-4 gap-4 flex flex-row justify-end shadow-2xl"
      )}
      {...props}
    >
      {children}
    </div>
  );
}
