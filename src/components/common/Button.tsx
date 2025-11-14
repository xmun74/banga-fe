import { ButtonHTMLAttributes, forwardRef } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  loading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      fullWidth = false,
      loading = false,
      disabled,
      className = "",
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

    const variantStyles = {
      primary: "bg-primary text-white hover:bg-primary-dark focus:ring-primary",
      secondary: "bg-secondary text-white hover:bg-secondary-dark focus:ring-secondary",
      outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary",
      ghost: "text-primary hover:bg-gray-100 dark:hover:bg-gray-800",
      danger: "bg-error text-white hover:bg-red-600 focus:ring-error",
    };

    const sizeStyles = {
      sm: "text-sm px-3 py-1.5 rounded-md",
      md: "text-base px-4 py-2 rounded-lg",
      lg: "text-lg px-6 py-3 rounded-lg",
    };

    const widthStyles = fullWidth ? "w-full" : "";

    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyles} ${className}`}
        {...props}
      >
        {loading ? (
          <>
            <svg
              className="mr-2 -ml-1 h-4 w-4 animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            로딩 중...
          </>
        ) : (
          children
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
