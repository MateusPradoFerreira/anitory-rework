import { api } from "@/app/core/config/api-axios.config";
import { Anime } from "@/app/domain/models/anime.model";

export class FindAnimeUseCase {

  static async execute(id: number): Promise<Anime> {
    const { data } = await api.get(`anime/${id}/full`);
    return data.data;
  };

}