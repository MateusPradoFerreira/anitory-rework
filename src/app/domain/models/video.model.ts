export class VideoSearch {
  promo: Promo[]
  episodes: Episode[]
  music_videos: MusicVideo[]
}

export class Promo {
  title: string
  trailer: Trailer
}

export class Trailer {
  youtube_id: string
  url: string
  embed_url: string
  images: Images
}

export class Images {
  image_url: string
  small_image_url: string
  medium_image_url: string
  large_image_url: string
  maximum_image_url: string
}

export class Episode {
  mal_id: number
  url: string
  title: string
  episode: string
  images: Images2
}

export class Images2 {
  jpg: Jpg
}

export class Jpg {
  image_url: string
}

export class MusicVideo {
  title: string
  video: Video
  meta: Meta
}

export class Video {
  youtube_id: string
  url: string
  embed_url: string
  images: Images3
}

export class Images3 {
  image_url: string
  small_image_url: string
  medium_image_url: string
  large_image_url: string
  maximum_image_url: string
}

export class Meta {
  title: string
  author: string
}
