import { useQuery, UseQueryOptions } from "react-query"
import { FindSeasonNowAnimesUseCase, FindSeasonNowAnimesUseCaseParams } from "../../use-cases/animes/find-season-now-animes.use-case"
import { Anime } from "@/app/domain/models/anime.model";
import { SearchResponse } from "@/app/domain/models/search-response.mode";

export function useSeasonNowAnimes(params: FindSeasonNowAnimesUseCaseParams, options?: Omit<UseQueryOptions<SearchResponse<Anime>>, "queryKey" | "queryFn">) {
  return useQuery<SearchResponse<Anime>>(["animes", "season", "now", params], () => FindSeasonNowAnimesUseCase.execute(params), options);
}