import { api } from "@/app/core/config/api-axios.config";
import { Anime } from "@/app/domain/models/anime.model";
import { SearchResponse } from "@/app/domain/models/search-response.mode";

export type FindAnimesBySeasonUseCaseParams = {
  unapproved?: boolean;
  continuing?: boolean;
  page?: number;
  limit?: number;
  filter?: "tv" | "movie" | "ova" | "special" | "ona" | "music";
  sfw?: boolean;
  year: string;
  season: string;
};

export class FindAnimesBySeasonUseCase {

  static async execute({ year, season, ...params }: FindAnimesBySeasonUseCaseParams): Promise<SearchResponse<Anime>> {
    const { data } = await api.get<SearchResponse<Anime>>(`seasons/${year}/${season}`, { 
      params,
    });
    return data;
  };

}