import clsx from "clsx";
import { PropsWithChildren, ReactElement } from "react";

type SectionTitleWithChildren = PropsWithChildren<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>;

interface SectionTitleProps extends SectionTitleWithChildren {
  className?: string;
}

export default function SectionTitle({
  children,
  className,
  ...props
}: SectionTitleProps): ReactElement {
  return (
    <div
      className={clsx(className, "text-xl font-bold text-orange-300")}
      {...props}
    >
      {children}
    </div>
  );
}
