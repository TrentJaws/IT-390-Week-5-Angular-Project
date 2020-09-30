import { Album } from './album';

export interface Band {
	id: number;
	name: string;
	genre: string;
  catalogue: Album[];
}