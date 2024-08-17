export class Anime {
  mal_id: number
  url: string
  images: Images
  trailer: Trailer
  approved: boolean
  titles: Title[]
  title: string
  title_english: string
  title_japanese: string
  title_synonyms: string[]
  type: string
  source: string
  episodes: number
  status: string
  airing: boolean
  aired: Aired
  duration: string
  rating: string
  score: number
  scored_by: number
  rank: number
  popularity: number
  members: number
  favorites: number
  synopsis: string
  background: string
  season: string
  year: number
  broadcast: Broadcast
  producers: Producer[]
  licensors: any[]
  studios: Studio[]
  genres: Genre[]
  explicit_genres: any[]
  themes: any[]
  demographics: Demographic[]
  relations: Relation[]
  theme: Theme
  external: External[]
  streaming: Streaming[]
}

export class Images {
  jpg: Jpg
  webp: Webp
}

export class Jpg {
  image_url: string
  small_image_url: string
  large_image_url: string
}

export class Webp {
  image_url: string
  small_image_url: string
  large_image_url: string
}

export class Trailer {
  youtube_id: string
  url: string
  embed_url: string
  images: Images2
}

export class Images2 {
  image_url: string
  small_image_url: string
  medium_image_url: string
  large_image_url: string
  maximum_image_url: string
}

export class Title {
  type: string
  title: string
}

export class Aired {
  from: string
  to: string
  prop: Prop
  string: string
}

export class Prop {
  from: From
  to: To
}

export class From {
  day: number
  month: number
  year: number
}

export class To {
  day: number
  month: number
  year: number
}

export class Broadcast {
  day: string
  time: string
  timezone: string
  string: string
}

export class Producer {
  mal_id: number
  type: string
  name: string
  url: string
}

export class Studio {
  mal_id: number
  type: string
  name: string
  url: string
}

export class Genre {
  mal_id: number
  type: string
  name: string
  url: string
}

export class Demographic {
  mal_id: number
  type: string
  name: string
  url: string
}

export class Relation {
  relation: string
  entry: Entry[]
}

export class Entry {
  mal_id: number
  type: string
  name: string
  url: string
}

export class Theme {
  openings: string[]
  endings: string[]
}

export class External {
  name: string
  url: string
}

export class Streaming {
  name: string
  url: string
}
