import { api } from "@/app/core/config/api-axios.config";
import { VideoSearch } from "@/app/domain/models/video.model";

export class FindAnimeVideosUseCase {

  static async execute(id: number): Promise<VideoSearch> {
    const { data } = await api.get(`anime/${id}/videos`);
    return data.data;
  };

}