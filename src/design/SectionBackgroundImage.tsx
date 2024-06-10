import clsx from "clsx";
import { ReactElement } from "react";

export default function SectionBackgroundImage({
  src,
  className,
  ...props
}: React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>): ReactElement {
  return (
    <img
      className={clsx(
        className,
        "absolute w-full h-full top-0 left-0 z-0 opacity-25 object-cover object-top"
      )}
      src={src}
      {...props}
    />
  );
}
