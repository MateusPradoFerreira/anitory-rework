import { ButtonHTMLAttributes } from "react";
import logo from "../../../assets/images/logo.png";
import { cn } from "@/app/core/lib/utils";

export type LogoProps = {
  labelClassName?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Logo({ labelClassName, className, ...props }: LogoProps) {
  return (
    <button { ...props } className={cn("flex items-end h-8 focus-visible:outline-none", className)}>
      <img className="w-8 h-8" src={logo} alt="Anitory Logo" />
      <div className={cn("text-3xl -ml-0.5 font-bold mb-[-3px] bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-pink-600 font-secondary", labelClassName)}>nitory</div>
    </button>
  )
}