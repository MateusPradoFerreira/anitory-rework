import { useQuery, UseQueryOptions } from "react-query"
import { FindAnimesUseCase, FindAnimesUseCaseParams } from "../../use-cases/animes/find-animes.use-case"
import { Anime } from "@/app/domain/models/anime.model";
import { SearchResponse } from "@/app/domain/models/search-response.mode";

export function useAnimes(params: FindAnimesUseCaseParams, options?: Omit<UseQueryOptions<SearchResponse<Anime>>, "queryKey" | "queryFn">) {
  return useQuery<SearchResponse<Anime>>(["animes", params], () => FindAnimesUseCase.execute(params), options);
}