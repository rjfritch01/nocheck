interface BadgeProps {
  children: React.ReactNode;
  variant?: "light" | "dark" | "accent";
  className?: string;
}

export default function Badge({ children, variant = "light", className = "" }: BadgeProps) {
  const variantClasses = {
    light: "bg-white border border-[#E5E5E3] text-[#141414]",
    dark: "bg-[#1E1E1E] border border-[#2A2A2A] text-white",
    accent: "bg-[#C3E941]/10 border border-[#C3E941]/30 text-[#C3E941]",
  };

  return (
    <span
      className={`inline-flex items-center px-4 py-1.5 rounded-full font-body text-xs font-bold uppercase tracking-[0.08em] ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
