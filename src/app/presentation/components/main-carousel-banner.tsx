import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../components/ui/carousel";
import { MdOutlineLocalMovies } from "react-icons/md";
import { PiRankingFill } from "react-icons/pi";
import { Button } from "../components/ui/button";
import { HiStatusOnline } from "react-icons/hi";
import { TbBookmark } from "react-icons/tb";
import { useSeasonNowAnimes } from "@/app/data/hooks/animes/use-season-now-animes";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/app/core/lib/utils";
import { Banner, BannerChip, BannerContent, BannerSmoothVideoThumb, BannerSynopsis, BannerThumb, BannerTitle, GenreMapper } from "./banner";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export type MainCarouselBannerProps = {
  className?: string;
}

export function MainCarouselBanner({ className }: MainCarouselBannerProps) {

  const navigate = useNavigate();
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const { data, isLoading } = useSeasonNowAnimes({ limit: 25 });

  useEffect(() => {
    if (!api) return;
 
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());
 
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return isLoading || !data? "" : (
    <Carousel setApi={setApi} className={cn("rounded-3xl shadow-lg shadow-zinc-200/60 mb-6", className)} opts={{ loop: true }} plugins={[ Autoplay({ delay: 8000 }) ]}>
      <CarouselContent>
        { data.data.map((anime, index: number) => (
          <CarouselItem key={index}>
            <Banner>
              <BannerThumb src={anime.images.jpg.large_image_url} />
              <BannerContent>
                <BannerTitle>{anime.title}</BannerTitle>
                <div className="flex gap-6 items-center mt-4">
                  <BannerChip icon={PiRankingFill}>{anime.rank || "0"}</BannerChip>
                  <BannerChip icon={MdOutlineLocalMovies}>{anime.type}</BannerChip>
                  <BannerChip icon={HiStatusOnline}>{anime.status}</BannerChip>
                </div>
                <GenreMapper genres={anime.genres} className="mt-3" />
                <BannerSynopsis className="mt-3">{anime.synopsis}</BannerSynopsis>
                <div className="flex gap-2 mt-4 2xl:mt-8">
                  <Button variant="destructive" className="px-6" onClick={() => (navigate(`anime/${anime.mal_id}/${anime.title}`))}>View Details</Button>
                  <Button variant="ghost" size="icon" className="text-lg"> 
                    <TbBookmark />
                  </Button>
                </div>
              </BannerContent>
              <BannerSmoothVideoThumb src={anime.trailer.images.maximum_image_url} smoothContentClassName="mr-1" />
            </Banner>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="bottom-2 translate-y-0 top-auto left-2 border-transparent bg-white/50 backdrop-blur-sm" />
      <CarouselNext className="bottom-2 translate-y-0 top-auto right-2 border-transparent bg-white/50 backdrop-blur-sm" />
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        { Array.from({ length: count }).map((_, index) => (
          <div key={index} className={cn("w-2 h-2 rounded-full bg-zinc-200 transition-all duration-500 ease-in-out", current === index && "w-6 bg-red-500")} />
        ))}
      </div>
    </Carousel>
  );

}