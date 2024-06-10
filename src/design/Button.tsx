import clsx from "clsx";
import { PropsWithChildren, ReactElement } from "react";
import { Variant } from "./Variant";

type ButtonWithChildren = PropsWithChildren<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
>;

interface ButtonProps extends ButtonWithChildren {
  className?: string;
  variant?: Variant;
}

const backgroundsColor = {
  [Variant.SUCCESS]: "bg-green-600",
  [Variant.DANGER]: "bg-red-600",
};

export default function Button({
  children,
  className,
  variant = Variant.SUCCESS,
  ...props
}: ButtonProps): ReactElement {
  return (
    <button
      className={clsx(
        className,
        "px-6 py-2 text-sm text-white font-bold rounded",
        backgroundsColor[variant]
      )}
      {...props}
    >
      {children}
    </button>
  );
}
