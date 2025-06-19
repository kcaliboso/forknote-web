import { create } from "zustand";
import type { Recipe } from "@/types/models/Recipe";

interface RecipeStore {
  recipes: Recipe[];
  addNewRecipe: (recipe: Recipe) => void;
  setRecipes: (recipes: Recipe[]) => void;
}

export const useRecipeStore = create<RecipeStore>((set) => ({
  recipes: [],
  addNewRecipe: (recipe) =>
    set((state) => ({ recipes: [...state.recipes, recipe] })),
  setRecipes: (recipes) => set({ recipes }),
}));
