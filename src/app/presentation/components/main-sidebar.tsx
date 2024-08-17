import { cn } from "@/app/core/lib/utils"
import { Logo } from "./logo";
import { useContext } from "react";
import { AppContext } from "../contexts/app-context";
import { FaRegCompass } from "react-icons/fa";
import { BiHomeAlt2 } from "react-icons/bi";
import { TbExclamationCircle, TbMovie } from "react-icons/tb";
import { MdSsidChart } from "react-icons/md";
import { LuLibrary, LuUsers } from "react-icons/lu";
import { NavLink } from "./nav-link";

export function MainSidebar() {

  const { sidebarActive, toggleSidebarState } = useContext(AppContext);

  return (
    <aside className="border-r-2 border-zinc-100 overflow-hidden bg-white">
      <div className="flex items-center justify-center h-16 w-16">
        <Logo onClick={toggleSidebarState} className="w-8" labelClassName={cn("opacity-0 transition-all", sidebarActive && "opacity-100")} />
      </div>
      <nav className="flex flex-col gap-1 px-2 py-4">
        <NavLink icon={BiHomeAlt2} label="Home" to="" />
        <NavLink icon={FaRegCompass} label="Explore" to="explore" />
        <NavLink icon={MdSsidChart} label="Popular" to="popular" />
        <NavLink icon={TbMovie} label="Animes" to="animes" />
        <NavLink icon={LuLibrary} label="Mangas" to="mangas" />
        <NavLink icon={LuUsers} label="Characters" to="characters" />
        <NavLink icon={TbExclamationCircle} label="About" to="about" />
      </nav>
    </aside>
  )
} 

