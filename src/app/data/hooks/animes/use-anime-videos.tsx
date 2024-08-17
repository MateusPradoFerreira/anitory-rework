import { useQuery, UseQueryOptions } from "react-query"
import { FindAnimeVideosUseCase } from "../../use-cases/animes/find-anime-videos.use-case";
import { VideoSearch } from "@/app/domain/models/video.model";

export function useAnimeVideos(id: number, options?: Omit<UseQueryOptions<VideoSearch>, "queryKey" | "queryFn">) {
  return useQuery<VideoSearch>(["anime", "videos", id], () => FindAnimeVideosUseCase.execute(id), {
    enabled: !!id,
    ...options,
  });
}