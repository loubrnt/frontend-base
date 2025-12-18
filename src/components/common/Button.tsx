interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: "button" | "submit";
  variant?: "primary" | "secondary";
}

export const Button = ({ label, onClick, type = "button", variant = "primary" }: ButtonProps) => {
  const baseStyles = "px-6 py-2 rounded-lg font-semibold transition-all duration-200 active:scale-95 w-full sm:w-auto";
  const variants = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-700 shadow-md",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
  };

  return (
    <button type={type} onClick={onClick} className={`${baseStyles} ${variants[variant]}`}>
      {label}
    </button>
  );
};