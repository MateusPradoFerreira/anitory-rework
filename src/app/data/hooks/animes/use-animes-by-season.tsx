import { useQuery, UseQueryOptions } from "react-query"
import { FindAnimesBySeasonUseCase, FindAnimesBySeasonUseCaseParams } from "../../use-cases/animes/find-animes-by-season.use-case"
import { Anime } from "@/app/domain/models/anime.model";
import { SearchResponse } from "@/app/domain/models/search-response.mode";

export function useAnimesBySeason(params: FindAnimesBySeasonUseCaseParams, options?: Omit<UseQueryOptions<SearchResponse<Anime>>, "queryKey" | "queryFn">) {
  return useQuery<SearchResponse<Anime>>(["animes", "season", params], () => FindAnimesBySeasonUseCase.execute(params), options);
}