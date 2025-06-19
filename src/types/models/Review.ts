import type { Recipe } from "./Recipe";
import type { User } from "./User";

export interface Review {
  text: string;
  rating: number;
  user: User;
  recipe: Recipe;
}
