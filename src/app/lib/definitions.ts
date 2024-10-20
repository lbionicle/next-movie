export interface Review {
  reviewer: string;
  rating: number;
  comment: string;
}

export interface Tags {
  age: number;
  duration: number;
}

export interface Picture {
  url: string;
  alt: string;
  isDark?: boolean;
}

export interface Actor extends Picture {
  name: string;
}

export interface Movie {
  name: string;
  type: string;
  id: number;
  grade: number;
  year: number;
  countries: string[];
  genres: string[];
  director: string;
  tags: Tags;
  description: string;
  actors: Actor[];
  sources: {
    profile: Picture;
    frames: Picture[];
    trailer: string;
    video: string;
  };
  reviews: Review[];
}
