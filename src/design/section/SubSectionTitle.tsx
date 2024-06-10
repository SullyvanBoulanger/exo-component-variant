import clsx from "clsx";
import { PropsWithChildren, ReactElement } from "react";

type SubSectionTitleWithChildren = PropsWithChildren<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>;

interface SubSectionTitleProps extends SubSectionTitleWithChildren {
  className?: string;
}

export default function SubSectionTitle({
  children,
  className,
  ...props
}: SubSectionTitleProps): ReactElement {
  return (
    <div
      className={clsx(className, "text-xl font-bold text-orange-300")}
      {...props}
    >
      {children}
    </div>
  );
}
