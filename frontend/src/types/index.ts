export interface Author {
  id: number;
  name: string;
  birth_year: number;
}

export interface Book {
  id: number;
  title: string;
  publication_year: number;
  genre: string;
  authorId: number;
}
