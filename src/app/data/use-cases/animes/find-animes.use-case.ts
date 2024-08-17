import { api } from "@/app/core/config/api-axios.config";
import { Anime } from "@/app/domain/models/anime.model";
import { SearchResponse } from "@/app/domain/models/search-response.mode";

export type FindAnimesUseCaseParams = {
  unapproved?: boolean;
  page?: number;
  limit?: number;
  query?: string;
  type?: "tv" | "movie" | "ova" | "special" | "ona" | "music" | "cm" | "pv" | "tv_special";
  score?: number;
  min_score?: number;
  max_score?: number;
  status?: "airing" | "complete" | "upcoming";
  rating?: "g" | "pg" | "pg13" | "r17" | "r" | "rx";
  sfw?: boolean;
  genres?: number[];
  genres_exclude?: number[];
  order_by?: "mal_id" | "title" | "start_date" | "end_date" | "episodes" | "score" | "scored_by" | "rank" | "popularity" | "members" | "favorites";
  sort?: "desc" | "asc";
  letter?: string;
  producers?: number[];
  start_date?: string;
  end_date?: string;
};

export class FindAnimesUseCase {

  static async execute({ query, genres, genres_exclude, producers, ...params }: FindAnimesUseCaseParams): Promise<SearchResponse<Anime>> {
    const { data } = await api.get<SearchResponse<Anime>>("anime", { 
      params: {
        ...params,
        q: query,
        genres: genres?.join(),
        genres_exclude: genres_exclude?.join(),
        producers: producers?.join(),
      },
    });
    return data;
  };

}