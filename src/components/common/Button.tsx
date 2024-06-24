import ButtonSvg from "@assets/svg/ButtonSvg";
import { ReactNode } from "react";

type ButtonProps = {
  className: string;
  href: string;
  onClick: () => void;
  children: ReactNode;
  px: string;
  white: boolean;
};

const Button: React.FC<Partial<ButtonProps>> = ({
  className,
  href,
  onClick,
  children,
  px,
  white = false,
}) => {
  const buttonClasses = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${
    px || "px-7"
  } ${white ? "text-n-8" : "text-n-1"} ${className || ""}`;
  const spanClasses = "relative z-10";

  const renderButton = () => (
    <button className={buttonClasses} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </button>
  );

  const renderLink = () => (
    <a className={buttonClasses} href={href}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </a>
  );

  return href ? renderLink() : renderButton();
};

export default Button;
