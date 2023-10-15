import type { ModalType } from '../Context';

export interface Movie {
  budget?: number;
  genres: string[];
  id: number;
  overview: string;
  poster_path: string;
  release_date: string;
  revenue?: number;
  runtime: number;
  tagline?: string;
  title: string;
  vote_average: number;
  vote_count?: number;
}

export interface IAppContext {
  modal: ModalType;
  toggleModalType ?: (value: string | null) => void;
  editedMovie?: Movie | null;
  setEditedMovie?: (value: Movie) => void;
  selectedMovie?: Movie | null;
  setSelectedMovie?: (value: Movie) => void;
  deletedMovieID?: number | null;
  setDeletedMovie?: (value: number | null) => void;
}

export interface FormValues {
  id?: number;
  title: string;
  poster_path: string;
  release_date: string;
  runtime: number;
  vote_average: number;
  overview: string;
  genres: string[];
}
