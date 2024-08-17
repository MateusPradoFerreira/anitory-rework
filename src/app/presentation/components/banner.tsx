import { cn } from "@/app/core/lib/utils";
import { Genre } from "@/app/domain/models/anime.model";
import { ImgHTMLAttributes, ReactNode } from "react";
import { IconBaseProps, IconType } from "react-icons";

export type BannerProps = {
  className?: string;
  children?: ReactNode;
};

export function Banner({ className, children }: BannerProps) {

  const backgrounds: string[] = [
    "https://freedesignfile.com/upload/2015/05/White-decorative-pattern-vector-background-02.jpg",
    "https://freedesignfile.com/upload/2015/05/White-decorative-pattern-vector-background-04.jpg",
    "https://www.welovesolo.com/wp-content/uploads/vector/14/White-decorative-pattern-vector-background-05.jpg",
  ]

  const background = backgrounds[Math.floor(Math.random() * backgrounds.length)];

  return (
    <div className={cn("w-full aspect-[970/250] bg-cover rounded-3xl overflow-hidden", className)} style={{ backgroundImage: `url("${background}")` }}>
      <div className="w-full aspect-[970/250] flex items-center bg-gradient-to-r from-white/20 to-white via-white backdrop-blur-[5px]">
        {children}
      </div>
    </div>
  )
}


export type BannerSmoothVideoThumbProps = {
  src: string;
  className?: string;
  smoothContentClassName?: string;
};

export function BannerSmoothVideoThumb({ src, className, smoothContentClassName }: BannerSmoothVideoThumbProps) {
  return (
    <div className={cn("h-full aspect-video bg-cover flex-shrink-0 relative", className)} style={{ backgroundImage: `url("${src}")` }}>
      <div className={cn("h-full aspect-video bg-gradient-to-l from-transparent via-transparent to-white flex-shrink-0 absolute right-0 top-0", smoothContentClassName)} />
    </div>
  )
}

export function BannerThumb({ className, ...props }: ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <img { ...props } className={cn("h-[84%] aspect-card object-cover object-center flex-shrink-0 rounded-2xl my-auto ml-10 shadow-lg", className)} />
  )
}

export type BannerContentProps = {
  className?: string;
  children?: ReactNode;
};

export function BannerContent({ className, children}: BannerContentProps) {
  return (
    <div className={cn("w-full px-10 py-8 2xl:py-10", className)}>
      {children}
    </div>
  )
}

export type BannerTitleProps = {
  className?: string;
  children?: ReactNode;
};

export function BannerTitle({ className, children}: BannerTitleProps) {
  return (
    <h1 className={cn("text-3xl 2xl:text-4xl font-semibold font-secondary line-clamp-2", className)}>
      {children}
    </h1>
  )
}

export type BannerChipProps = {
  className?: string;
  children?: ReactNode;
  icon: IconType;
  iconProps?: IconBaseProps;
};

export function BannerChip({ className, children, icon, iconProps }: BannerChipProps) {
  return (
    <div className={cn("flex items-center gap-2 text-xs", className)}>
      {icon({ ...iconProps, className: cn("text-xl text-red-500", iconProps?.className) })}
      {children}
    </div>
  )
}

export type BannerSynopsisProps = {
  className?: string;
  children?: ReactNode;
};

export function BannerSynopsis({ className, children}: BannerSynopsisProps) {
  return (
    <p className={cn("text-sm 2xl:text-base line-clamp-2 2xl:line-clamp-3 max-w-[956px]", className)}>
      {children}
    </p>
  )
}

export type GenreMapperProps = {
  className?: string;
  genres: Genre[];
};

export function GenreMapper({ className, genres}: GenreMapperProps) {
  return (
    <div className={cn("text-xs truncate text-zinc-400 font-semibold", className)}>
      {genres.map(genre => genre.name).join(" . ")}
    </div>
  )
}