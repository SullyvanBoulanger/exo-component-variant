import clsx from "clsx";
import { PropsWithChildren, ReactElement } from "react";

type SubsectionContainerWithChildren = PropsWithChildren<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>;

interface SubsectionContainerProps extends SubsectionContainerWithChildren {
  className?: string;
}

export default function Subsection({
  children,
  className,
  ...props
}: SubsectionContainerProps): ReactElement {
  return (
    <div
      className={clsx(
        className,
        "relative w-full flex flex-col gap-2 p-4 pt-0"
      )}
      {...props}
    >
      {children}
    </div>
  );
}
