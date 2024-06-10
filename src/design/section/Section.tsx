import clsx from "clsx";
import { PropsWithChildren, ReactElement } from "react";

type SectionWithChildren = PropsWithChildren<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>;

interface SectionProps extends SectionWithChildren {
  className?: string;
}

export default function Section({
  children,
  className,
  ...props
}: SectionProps): ReactElement {
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
