import clsx from "clsx";
import { PropsWithChildren, ReactElement } from "react";

type SectionBodyWithChildren = PropsWithChildren<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>;

interface SectionBodyProps extends SectionBodyWithChildren {
  className?: string;
}

export default function SectionBody({
  children,
  className,
  ...props
}: SectionBodyProps): ReactElement {
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
