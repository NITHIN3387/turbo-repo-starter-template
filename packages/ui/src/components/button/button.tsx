import { forwardRef } from "react";
import { ButtonProps } from "./button.types";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({className, ...props}, ref) => {
    return (
      <button
        className={"ui-bg-blue-500 ui-py-2 ui-px-4 ui-rounded-lg ui-text-white " + className}
        ref={ref}
        {...props}
      />
    );
  }
);
