import { cn } from "@/app/core/lib/utils";
import { useAnimes } from "@/app/data/hooks/animes/use-animes";
import { FindAnimesUseCaseParams } from "@/app/data/use-cases/animes/find-animes.use-case";
import { useNavigate } from "react-router-dom";
import { AnimeCard } from "./anime-card";
import { FindAnimesBySeasonUseCaseParams } from "@/app/data/use-cases/animes/find-animes-by-season.use-case";
import { useAnimesBySeason } from "@/app/data/hooks/animes/use-animes-by-season";
import { GenreMapper } from "./banner";
import { Button } from "./ui/button";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState } from "react";
import { Anime } from "@/app/domain/models/anime.model";

export type AnimeSectionProps = {
  title: string;
  className?: string;
  contentClassName?: string;
  type?: "default" | "season";
  layout?: "default" | "detailed";
  params?: FindAnimesUseCaseParams;
  seasonParams?: FindAnimesBySeasonUseCaseParams;
}

export function AnimeSection({ title, className, contentClassName, layout = "default", params = {}, seasonParams = { year: "2022", season: "winter" }, type = "default" }: AnimeSectionProps) {

  const navigate = useNavigate();
  const [page, setPage] = useState(1);

  const { data, isLoading } = useAnimes({ ...params, limit: params.limit || 12, page }, {
    enabled: type === "default",
  });

  const { data: dataSeason, isLoading: isLoadingSeason } = useAnimesBySeason({ ...seasonParams, limit: seasonParams.limit || 12, page }, {
    enabled: type === "season",
  });

  var animes: Anime[] = [];
  if(data?.data && type === "default") animes = [ ...animes, ...data?.data ];
  if(dataSeason?.data && type === "season") animes = [ ...animes, ...dataSeason?.data ];

  console.log(data, page);

  return isLoading || isLoadingSeason? ( 
    <div className={cn("", className)}>
      <div className="flex items-center justify-between mb-4 gap-8">
        <h2 className="text-2xl font-bold flex-shrink-0">{title}</h2>
        <div className="h-0.5 w-full rounded bg-zinc-100" />
        <div className="flex items-center gap-2">
          <Button disabled={page === 1} onClick={() => setPage(prev => prev - 1)} variant="secondary" size="icon" className="rounded-full">
            <FaChevronLeft />
          </Button>
          <Button disabled={!data?.pagination.has_next_page} onClick={() => setPage(prev => prev + 1)} variant="secondary" size="icon" className="rounded-full">
            <FaChevronRight />
          </Button>
        </div>
      </div>
      <div className={cn("grid grid-cols-4 2xl:grid-cols-6 gap-x-4 2xl:gap-x-6 gap-y-8", contentClassName)}>
        { Array.from({ length: params.limit || 12 }).map((_, index) => (
          <div key={index} className="animate-pulse">
            <div className="w-full aspect-card rounded-xl bg-zinc-100 shadow-lg shadow-slate-200/60" />
            <div className="mt-4 rounded-lg bg-zinc-100 h-[20px]" />
            <div className="mt-2 rounded-lg bg-zinc-100 h-[12px]" />
          </div>
        ))}
      </div>
    </div>
  ) : (
    <div className={cn("", className)}>
      <div className="flex items-center justify-between mb-4 gap-8">
        <h2 className="text-2xl font-bold flex-shrink-0">{title}</h2>
        <div className="h-0.5 w-full rounded bg-zinc-100" />
        <div className="flex items-center gap-2">
          <Button disabled={page === 1} onClick={() => setPage(prev => prev - 1)} variant="secondary" size="icon" className="rounded-full">
            <FaChevronLeft />
          </Button>
          <Button disabled={!data?.pagination.has_next_page} onClick={() => setPage(prev => prev + 1)} variant="secondary" size="icon" className="rounded-full">
            <FaChevronRight />
          </Button>
        </div>
      </div>
      <div className={cn("grid gap-x-4 2xl:gap-x-6 gap-y-8", layout === "default"? "grid-cols-4 2xl:grid-cols-6" : "grid-cols-3", contentClassName)}>
        { animes.map(anime => (
          layout === "default"? (
            <AnimeCard key={anime.mal_id} onClick={() => (navigate(`anime/${anime.mal_id}/${anime.title}`))} title={anime.title} genres={anime.genres} thumbSrc={anime.images.jpg.large_image_url} />
          ) : (
            <div key={anime.mal_id} className="group cursor-pointer" onClick={() => (navigate(`anime/${anime.mal_id}/${anime.title}`))}>
              <img className="w-full aspect-video object-cover rounded-xl shadow-lg shadow-slate-200/60 group-hover:shadow-slate-200/80 group-hover:scale-105 transition-all" src={anime.trailer.images.maximum_image_url} alt="" />
              <h4 className="truncate mt-4 font-semibold">{anime.title}</h4>
              <GenreMapper genres={anime.genres} />
              <p className="text-sm line-clamp-2 mt-2">{anime.synopsis}</p>
            </div>
          )
        ))}
      </div>
    </div>
  );

}