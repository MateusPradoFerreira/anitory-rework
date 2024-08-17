import { useAnime } from "@/app/data/hooks/animes/use-anime";
import { useParams } from "react-router-dom";
import { cn } from "@/app/core/lib/utils";
import { Carousel, CarouselContent, CarouselNext, CarouselPrevious } from "../components/ui/carousel";
import { useAnimeVideos } from "@/app/data/hooks/animes/use-anime-videos";
import { Button } from "../components/ui/button";
import { FaPlay } from "react-icons/fa";
import { useQuery } from "react-query";
import { api } from "@/app/core/config/api-axios.config";

export function AnimeView() {
  
  const { id = 0 } = useParams();
  const { data, isLoading } = useAnime(Number(id));

  const { data: pictures = [] } = useQuery([1, id], async () => {
    const { data } = await api.get(`anime/${id}/pictures`);
    return data.data;
  }, { enabled: !!id });

  if(pictures) console.log("pictures", pictures);

  const { data: statistics } = useQuery([2, id], async () => {
    const { data } = await api.get(`anime/${id}/statistics`);
    return data.data;
  }, { enabled: !!id });

  if(statistics) console.log("statistics", statistics);

  if(data) console.log(data);
  
  return isLoading || !data? "loading..." : (
    <div>
      <div className="h-[596px] bg-no-repeat" style={{ backgroundImage: `url("${ data.images.jpg.large_image_url }")`, backgroundPosition: "center right", backgroundSize: "85%" }}>
        <div className="h-[596px] bg-gradient-to-t from-white via-transparent to-transparent">
          <div className="h-[596px] bg-gradient-to-r from-white via-white/80 to-transparent">
            <div className="h-[596px] bg-[linear-gradient(0deg,_rgba(255,255,255,0)_0%,_rgba(255,255,255,0)_70%,_rgba(255,255,255,1)_100%)]">
              <div className="h-[596px] bg-[linear-gradient(90deg,_rgba(255,255,255,0)_0%,_rgba(255,255,255,0)_70%,_rgba(255,255,255,1)_100%)] backdrop-blur-sm px-4">

                <div className="grid grid-cols-[256px_1fr] 2xl:grid-cols-[296px_1fr] gap-12 py-16">
                  <aside>
                    <img className="w-full mb-4 rounded-xl scale-100 group-hover:scale-105 aspect-card object-cover transition-all shadow-lg" src={data.images.jpg.large_image_url} alt="" />
                  </aside>
                  <div className="overflow-hidden pt-16">

                    <h1 className="mb-2 font-bold font-secondary text-4xl">{data.title}</h1>

                    <div className="text-sm mb-4 py-2 flex gap-3 items-center">
                      <span>{ data.rating }</span> |
                      <span>{ data.duration }</span> |
                      <span>{ data.genres.map(genre => genre.name).join(" / ") }</span> { data.year? "|" : ""}
                      <span>{ data.year }</span>
                    </div>

                    <div className="mb-4">
                      <div className="text-zinc-500 flex gap-3 mb-1">
                        <span className="text-zinc-700 font-bold">Status: </span> 
                        <span className="max-w-[596px] truncate">{data.status}</span> 
                      </div>
                      <div className="text-zinc-500 flex gap-3 mb-1">
                        <span className="text-zinc-700 font-bold">Studios: </span> 
                        <span className="max-w-[596px] truncate">{data.studios.map(studio => studio.name).join(" / ")}</span> 
                      </div>
                      <div className="text-zinc-500 flex gap-3 mb-1">
                        <span className="text-zinc-700 font-bold">Producers: </span> 
                        <span className="max-w-[596px] truncate">{data.producers.map(producer => producer.name).join(" / ")}</span> 
                      </div>
                    </div>

                    <p className="mb-6 max-w-[956px] text-sm 2xl:text-base">{data.synopsis}</p>

                    <AnimeEpisodeCarousel className="col-span-2" id={Number(id)} />

                    { data.trailer.embed_url ? <iframe className="w-full aspect-video rounded-xl mb-4" src={data.trailer.embed_url} allowFullScreen /> : ""}

                    <div>
                      <Carousel opts={{ dragFree: true }}>
                        <CarouselContent className="gap-4 p-4 h-[396px]">
                          { pictures? pictures.map((picture: any) => (
                            <img key={Math.random()} className="h-full rounded-lg" src={picture.jpg.large_image_url} alt="" />
                          )) : "" }
                        </CarouselContent>
                        <CarouselPrevious className="disabled:opacity-0 left-2" />
                        <CarouselNext className="disabled:opacity-0 right-2" />
                      </Carousel>
                    </div>

                  </div>

                </div> 
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}  

export type AnimeEpisodeCarouselProps = {
  className?: string;
  id: number;
}

export function AnimeEpisodeCarousel({ id, className }: AnimeEpisodeCarouselProps) {

  const { data, isLoading } = useAnimeVideos(id);

  if(data) console.log("videos", data)

  return isLoading || !data? "" : (
    <div className={cn("w-full", className)}>
      <Carousel opts={{ dragFree: true }}>
        <CarouselContent className="gap-4 p-4">
          { data.episodes.reverse().map(episode => (
            <div key={episode.mal_id} className="group cursor-pointer w-[256px] flex-shrink-0 relative shadow-lg shadow-slate-200/60 hover:scale-105 transition-all">
              <div className="w-full aspect-video bg-cover bg-center rounded-lg" style={{ backgroundImage: `url("${episode.images.jpg.image_url || "https://cdn.dribbble.com/users/17914/screenshots/4902225/media/0d6d47739dae97adc81ca7076ee56cc9.png"}")` }}>
                <div className="w-full aspect-video flex items-end rounded-lg transition-all bg-[radial-gradient(circle,_rgba(255,255,255,0)_0%,_rgba(0,0,0,0.2)_100%)] group-hover:bg-[radial-gradient(circle,_rgba(255,255,255,0)_0%,_rgba(0,0,0,0.3)_100%)]">
                  <div className="w-full py-2 px-2.5 rounded-b-lg transition-all group-hover:backdrop-blur-md group-hover:bg-[linear-gradient(180deg,_rgba(255,255,255,0)_0%,_rgba(0,0,0,0.24413515406162467)_100%)]">
                    <h4 className="truncate font-semibold text-white text-xs">{episode.episode}: {episode.title}</h4>
                  </div>
                </div>
              </div>

              <Button size="icon" className="opacity-0 group-hover:opacity-100 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 backdrop-blur-sm bg-black/25">
                <FaPlay />
              </Button>
 
            </div>
          ))}
        </CarouselContent>
        <CarouselPrevious className="disabled:opacity-0 left-2" />
        <CarouselNext className="disabled:opacity-0 right-2" />
      </Carousel>
    </div>
  )

}