import { MainCarouselBanner } from "../components/main-carousel-banner";
import { AnimeSection } from "../components/anime-section";

export function HomeView() {
  return (
    <div>
      <MainCarouselBanner className="mb-12" />
      <div className="grid grid-cols-[1fr_446px] gap-x-4 2xl:gap-x-6 gap-y-12">
        <AnimeSection title="Top Anime Rank" params={{ order_by: "score", sort: "desc", limit: 6 }} />
        <div className="row-span-3">
          <aside className="border-2 border-zinc-100 shadow-lg shadow-slate-200/60 rounded-xl px-4 py-3"></aside>
        </div>
        <AnimeSection title="Most Popular Movies" params={{ order_by: "popularity", type: "movie", limit: 3 }} layout="detailed" />
        <AnimeSection title="Top Anime Rank" type="season" seasonParams={{ year: "2022", season: "fall" }} />
      </div>
    </div>
  );
}