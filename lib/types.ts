export interface Collection {
  id: string,
  title: string,
  slug: string,
  publishingHouse?: string,
  year?: number;
}

export interface Story {
  id: string,
  title: string;
  author?: string; 
  year?: number;
  rating?: number;
  synopsis?: string;
  slug?: string;
  collections?: Collection[]
}