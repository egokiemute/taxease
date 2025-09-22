import React, { FC } from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type: "button" | "submit" | "reset";
  disabled?: boolean;
  href?: string; 
  className?: string;
  style: "primary" | "secondary" | "tertiary" | "nobg";
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  iconOnly?: boolean;
}

const Button: FC<ButtonProps> = ({
  children,
  style,
  type,
  href,
  className = "py-3.5 px-7",
  disabled,
  onClick,
  loading,
  icon,
  iconPosition = "left",
  iconOnly = false,
}) => {
  const renderContent = (): React.ReactNode => {
    if (loading) {
      return (
        <div className="flex items-center justify-center gap-2">
          <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
          {!iconOnly && <span>Loading...</span>}
        </div>
      );
    }

    if (iconOnly && icon) {
      return icon;
    }

    if (icon && iconPosition === "left") {
      return (
        <div className="flex items-center justify-center gap-2">
          {icon}
          <span>{children}</span>
        </div>
      );
    }

    if (icon && iconPosition === "right") {
      return (
        <div className="flex items-center justify-center gap-2">
          <span>{children}</span>
          {icon}
        </div>
      );
    }

    return children;
  };

  const getButtonStyles = () => {
    let baseStyles =
      "font-twk text-[14px] cursor-pointer hover:scale-[1.05] active:scale-[0.99] duration-150 transition-transform rounded-full";

    // Disabled styles
    if (disabled || loading) {
      baseStyles +=
        " opacity-50 cursor-not-allowed hover:scale-[1] active:scale-[1]";
    }

    // Style variants
    if (style === "primary") {
      baseStyles += " bg-primary-100 text-white";
    } else if (style === "secondary") {
      baseStyles += " bg-primary-300 text-primary-700";
    } else if (style === "tertiary") {
      baseStyles += " bg-white text-primary-100";
    } else if (style === "nobg") {
      baseStyles += " bg-transparent text-black border-[#C0C0C0] border-[0.92px]"
    }

    // Icon-only padding
    if (iconOnly) {
      return `${baseStyles} p-5 aspect-square`;
    }

    return baseStyles;
  };

  return (
    <a href={href}>
      <button
        type={type}
        disabled={disabled || loading}
        onClick={onClick}
        className={`${className} ${getButtonStyles()}`}
      >
        {renderContent()}
      </button>
    </a>
  );
};

export default Button;
