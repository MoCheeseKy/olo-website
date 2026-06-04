import { ButtonProps } from "@/interfaces/components/Button";

export function Button({
  children,
  variant = "fill",
  className = "",
  type = "button",
  ...props
}: ButtonProps) {
  const baseStyles =
    "px-8 py-3 text-xs font-bold tracking-widest uppercase transition-all duration-300 rounded-[4px] cursor-pointer focus:outline-none";

  const variants = {
    fill: "bg-[#004AC6] text-white hover:bg-[#003ca3] active:scale-98 shadow-md hover:shadow-lg",
    outline:
      "border border-white/40 text-white bg-white/5 hover:bg-white hover:text-black hover:border-white active:scale-98",
  };

  return (
    <button
      type={type}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
