import { TbBookmark, TbMovie } from "react-icons/tb";
import { NavLink } from "./nav-link";
import { Input } from "./ui/input";
import { BiSearch } from "react-icons/bi";
import { Button } from "./ui/button";
import { MdOutlineWbSunny } from "react-icons/md";
import { Divider } from "./Divider";

export function MainHeader() {
  return (
    <header className="border-b-2 border-zinc-100 flex items-center justify-between px-6 bg-white">
      <div className="flex items-center gap-2">
        <div className="flex">
          <Input className="w-96 border-transparent bg-slate-100 focus-visible:ring-transparent px-5 rounded-l-full rounded-r-none" placeholder="Search your favorite animes, mangas, characters..."/>
          <Button variant="secondary" className="flex-shrink-0 rounded-l-none rounded-r-full">
            <BiSearch />
          </Button>
        </div>
      </div>
      <nav className="flex items-center gap-1">
        <Button variant="ghost">Home</Button>
        <Button variant="ghost">Animes</Button>
        <Button variant="ghost">Mangas</Button>
        <Button variant="ghost">Characters</Button>
        <Divider className="mx-1" />
        <NavLink className="rounded-full" icon={TbMovie} to="#" verifyPath={false} iconClassName="w-10 h-10" />
        <NavLink className="rounded-full" icon={TbBookmark} to="bookmark" iconClassName="w-10 h-10" />
        <NavLink className="rounded-full" icon={MdOutlineWbSunny} to="#" verifyPath={false} iconClassName="w-10 h-10" />
      </nav>
    </header>
  )
} 
