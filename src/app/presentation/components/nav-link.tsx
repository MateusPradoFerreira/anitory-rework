import { cn } from "@/app/core/lib/utils";
import { IconType } from "react-icons";
import { Link, LinkProps, useMatch, useResolvedPath } from "react-router-dom";

export type NavLinkProps = {
  label?: string;
  icon: IconType;
  verifyPath?: boolean;
  iconClassName?: string;
} & Omit<LinkProps, "children">;

export function NavLink({ iconClassName, label, icon, verifyPath = true, className, ...props }: NavLinkProps) {

  let resolved = useResolvedPath(props.to);
  let match = verifyPath? useMatch({ path: resolved.pathname, end: true }) : false;

  return (
    <Link {...props} className={cn("flex items-center overflow-hidden rounded-lg text-gray-400 transition-all hover:bg-rose-100/50 hover:text-rose-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500", match && "bg-rose-100/50 text-rose-500", className)}>
      <div className={cn("w-12 text-2xl flex-shrink-0 flex items-center justify-center py-3", iconClassName)}>
        {icon({})}
      </div>
      { label? <span className="text-sm ml-2">{label}</span> : "" }
    </Link>
  )
}