import { cn } from "@/app/core/lib/utils";
import { GenreMapper } from "./banner";
import { Genre } from "@/app/domain/models/anime.model";

export type AnimeCardProps = {
  className?: string;
  thumbClassName?: string;
  title: string;
  genres: Genre[];
  thumbSrc: string;
  onClick?: () => void;
}

export function AnimeCard({ className, thumbClassName, title, genres, thumbSrc, onClick }: AnimeCardProps) {
  return (
    <div className={cn("cursor-pointer group", className)} onClick={onClick}>
      <img className={cn("w-full rounded-xl group-hover:shadow-slate-200/80 group-hover:scale-105 aspect-card object-cover transition-all shadow-lg shadow-slate-200/60", thumbClassName)} src={thumbSrc} alt="" />
      <h4 className="truncate mt-4 font-semibold">{title}</h4>
      <GenreMapper genres={genres} />
    </div>
  )
}