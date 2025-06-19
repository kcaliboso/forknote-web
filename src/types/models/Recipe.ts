import type { Review } from "./Review";
import type { User } from "./User";

export interface Recipe {
  id: string;
  name: string;
  ingredients: string[];
  likes?: number;
  images?: string[];
  cover?: string;
  createdAt: Date;
  owner: User;
  reviews?: Review[];
  description?: string;
  instructions?: string;
  overallRating: number;
}
