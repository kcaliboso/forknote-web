import { useNavigate, useParams } from "react-router";
import axios from "@/lib/axios";
import type { ApiResponse } from "@/types/response/ApiResponse";
import type { Recipe } from "@/types/models/Recipe";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useQuery } from "@tanstack/react-query";
import Spinner from "@/components/icons/spinner";
import BackIcon from "@/components/icons/back-icon";
import { createImageUrl, createMarkup } from "@/lib/utils";
import ImageCarousel from "@/components/image-carousel";

export default function RecipeDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  async function fetchRecipe() {
    const response = await axios.get<ApiResponse<Recipe>>(`v1/recipes/${id}`);
    return response.data;
  }

  const {
    data: recipeResponse,
    error,
    isFetching,
  } = useQuery<ApiResponse<Recipe>>({
    queryKey: ["recipe"],
    queryFn: () => fetchRecipe(),
  });

  const recipe = recipeResponse?.data;

  if (error) return "An error has occurred: " + error.message;

  function goBack() {
    navigate(-1);
  }

  return (
    <div className="flex-1 flex flex-col">
      <div className="py-4 self-start">
        <div className="p-2 border rounded-full">
          <BackIcon className="size-6 cursor-pointer" onClick={goBack} />
        </div>
      </div>
      <div className="flex-1 flex flex-col">
        {isFetching ? (
          <div className="w-full h-full flex justify-center items-center">
            <Spinner className="size-24 text-primary" />
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <div className="flex flex-col gap-4">
              <h1 className="text-2xl font-bold">{recipe?.name}</h1>
              <img
                src={createImageUrl(recipe?.cover ?? "", "recipes")}
                alt={recipe?.name}
                className="w-full lg:h-[25rem] object-cover rounded-4xl"
              />
              <p className="text-justify">{recipe?.description}</p>
            </div>
            <div className="flex flex-col gap-4 justify-between">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">
                  Instructions on how to cook:
                </h2>
                <ol
                  className="list-decimal ml-6 text-justify"
                  dangerouslySetInnerHTML={createMarkup(
                    recipe?.instructions ?? ""
                  )}
                />
              </div>
              <div className="w-full self-center ">
                <ImageCarousel images={recipe?.images ?? []} />
              </div>
            </div>
          </div>
        )}
      </div>

      <ReactQueryDevtools initialIsOpen />
    </div>
  );
}
