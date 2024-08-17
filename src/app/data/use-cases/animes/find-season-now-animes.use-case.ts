import { api } from "@/app/core/config/api-axios.config";
import { Anime } from "@/app/domain/models/anime.model";
import { SearchResponse } from "@/app/domain/models/search-response.mode";

export type FindSeasonNowAnimesUseCaseParams = {
  unapproved?: boolean;
  continuing?: boolean;
  page?: number;
  limit?: number;
  filter?: "tv" | "movie" | "ova" | "special" | "ona" | "music";
  sfw?: boolean;
};

export class FindSeasonNowAnimesUseCase {

  static async execute(params: FindSeasonNowAnimesUseCaseParams): Promise<SearchResponse<Anime>> {
    const { data } = await api.get<SearchResponse<Anime>>("seasons/now", { 
      params,
    });
    return data;
  };

}