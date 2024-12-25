import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";
interface ButtonType1Props
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const ButtonType1 = forwardRef<HTMLButtonElement, ButtonType1Props>(({
    className, 
    children, 
    disabled,
    type = "button",
    ...props
}, ref) => {
    return(
        <button type={type} className={twMerge(`w-full rounded-full bg-rose-500 border border-transparent px-3 py-2 disabled:cursor-not-allowed disabled:opacity-50 text-black font-bold hover:opacity-75 transition`, className)} disabled={disabled} ref={ref} {...props}>
            {children}
        </button>
    );
} )
ButtonType1.displayName = "Button";
export default ButtonType1;