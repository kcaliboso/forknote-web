import { createImageUrl } from "@/lib/utils";
import type { Recipe } from "@/types/models/Recipe";
import { Separator } from "./ui/separator";
import LikeIcon from "./icons/like-icon";
import { format } from "date-fns";
import { useNavigate } from "react-router";

interface RecipeCardProps {
  recipe: Recipe;
}

export default function RecipeCard({ recipe }: RecipeCardProps) {
  const navigate = useNavigate();

  function likeRecipe(recipeId: string) {
    console.log(recipeId);
  }

  function onSelect(recipeId: string) {
    navigate(`/my/recipe/${recipeId}`);
  }

  return (
    <div className="flex flex-col border rounded-2xl cursor-pointer ">
      <img
        src={createImageUrl(recipe?.cover ?? "recipe-image", "recipes")}
        alt={recipe.name}
        className=" w-full object-cover rounded-t-2xl"
      />
      <div
        className="p-2 w-full flex flex-col h-full justify-between gap-2"
        onClick={() => onSelect(recipe.id)}
      >
        <h1 className="text-xl font-medium">{recipe.name}</h1>
        <Separator />
        <div>review stars</div>
      </div>
      <div className="flex items-center px-2 py-2">
        <div className="flex gap-2 items-center flex-1">
          <LikeIcon
            className="size-6 cursor-pointer"
            onClick={() => likeRecipe(recipe.id)}
          />
          <p className=" text-xl">{recipe.likes ?? 0}</p>
        </div>
        <p className="text-gray-500 text-sm">
          {format(recipe.createdAt, "MMMM d, y")}
        </p>
      </div>
    </div>
  );
}
