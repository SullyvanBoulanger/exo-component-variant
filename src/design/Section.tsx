import clsx from "clsx";
import { PropsWithChildren, ReactElement } from "react";

type DivWithChildren = PropsWithChildren<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>;

interface SectionContainerProps extends DivWithChildren {
  className?: string;
}

export default function Section({
  children,
  className,
  ...props
}: SectionContainerProps): ReactElement {
  return (
    <div
      className={clsx(
        className,
        "flex flex-col border-2 border-blue-800 rounded-lg overflow-hidden bg-purple-900 text-white relative"
      )}
      {...props}
    >
      {children}
    </div>
  );
}
