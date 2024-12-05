export interface Author {
  id: number;
  name: string;
  birth_year: number;
  about: string;
  rating: number;
}

export interface Book {
  id: number;
  title: string;
  publication_year: number;
  genre: string;
  about:string;
  rating: number;
  authorId: number;
}
