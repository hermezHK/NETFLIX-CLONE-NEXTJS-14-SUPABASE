import { Variant, ButtonVariant } from "@/common";

interface Props {
  type?: ButtonVariant;
  onClick?: () => void;
  text?: string;
  variant: Variant;
}

interface Color {
  [key: string]: string;
}

export default function Button({ text, type, onClick, variant }: Props) {
  const colors: Color = {
    default: "bg-transparent",
    primary: "bg-netflix text-white",
    secondary: "bg-netflix-gray text-white",
    danger: "bg-red-500 text-white",
    warning: "bg-yellow-500 text-black",
    success: "bg-blue-500 tex-white",
    info: "bg-blue-500 text-white",
    light: "bg-netflix-light text-white",
    dark: "bg-netflix-dark text-white",
  };

  return (
      <button
        type={type}
        onClick={onClick}
        className={`${colors[variant]} py-3 rounded font-semibold w-full`}
      >
        <span className="text-sm">{text}</span>
      </button>

  );
}

Button.defaultProps = {
  variant: "default",
};
