import clsx from "clsx";
import { PropsWithChildren, ReactElement } from "react";

type SubsectionTitleWithChildren = PropsWithChildren<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>;

interface SubsectionTitleProps extends SubsectionTitleWithChildren {
  className?: string;
}

export default function SubsectionTitle({
  children,
  className,
  ...props
}: SubsectionTitleProps): ReactElement {
  return (
    <div
      className={clsx(className, "text-xl font-bold text-orange-300")}
      {...props}
    >
      {children}
    </div>
  );
}
