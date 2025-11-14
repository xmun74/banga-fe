import { InputHTMLAttributes, forwardRef } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  fullWidth?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helperText, fullWidth = false, className = "", disabled, ...props }, ref) => {
    const baseStyles =
      "px-4 py-2 border rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-1 disabled:opacity-50 disabled:cursor-not-allowed bg-white dark:bg-gray-800 text-foreground";

    const normalStyles = "border-gray-300 dark:border-gray-600 focus:border-primary focus:ring-primary";
    const errorStyles = "border-error focus:border-error focus:ring-error";

    const widthStyles = fullWidth ? "w-full" : "";

    return (
      <div className={widthStyles}>
        {label && <label className="text-foreground mb-1 block text-sm font-medium">{label}</label>}
        <input
          ref={ref}
          disabled={disabled}
          className={`${baseStyles} ${error ? errorStyles : normalStyles} ${widthStyles} ${className}`}
          {...props}
        />
        {error && <p className="text-error mt-1 text-sm">{error}</p>}
        {helperText && !error && <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{helperText}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
