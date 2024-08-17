import { useQuery, UseQueryOptions } from "react-query"
import { FindAnimeUseCase } from "../../use-cases/animes/find-anime.use-case"
import { Anime } from "@/app/domain/models/anime.model";

export function useAnime(id: number, options?: Omit<UseQueryOptions<Anime>, "queryKey" | "queryFn">) {
  return useQuery<Anime>(["anime", id], () => FindAnimeUseCase.execute(id), options);
}