import { ReactNode } from "react";
import { inter } from "../fonts";

type ContentProps = {
  className?: string;
  children?: ReactNode;
};

export default function Content({ className, children }: ContentProps) {
  return (
    <>
      <div className={`${inter} ${className} m-20 bg-[#0A0514]`}>
        {children}
      </div>
    </>
  );
}
