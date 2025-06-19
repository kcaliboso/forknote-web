import {
  useQuery,
  keepPreviousData,
  useQueryClient,
} from "@tanstack/react-query";
import axios from "@/lib/axios";
import type { Recipe } from "@/types/models/Recipe";
import type { ApiResponse } from "@/types/response/ApiResponse";
import { useEffect, useState, type ChangeEvent } from "react";
import { Button } from "@/components/ui/button";
import RecipeCard from "@/components/recipe-card";
import { cn } from "@/lib/utils";
import Search from "@/components/search";
import Spinner from "@/components/icons/spinner";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export default function UserRecipeList() {
  const queryClient = useQueryClient();

  const pageSize = Number(import.meta.env.VITE_PAGE_SIZE);
  const [currentPage, setCurrentPage] = useState(1);

  async function fetchRecipes(page: number = 1) {
    const response = await axios.get<ApiResponse<Recipe[]>>(
      `v1/recipes?page=${page}&limit=${pageSize}&fields=-images,-ingredients`
    );

    return response.data;
  }

  const {
    data: recipeResponse,
    error,
    isFetching,
    isPlaceholderData,
  } = useQuery<ApiResponse<Recipe[]>>({
    queryKey: ["recipes", currentPage],
    queryFn: () => fetchRecipes(currentPage),
    placeholderData: keepPreviousData,
    staleTime: 5000,
  });

  useEffect(() => {
    if (!isPlaceholderData && (recipeResponse?.meta?.totalPages ?? 1) > 1) {
      queryClient.prefetchQuery({
        queryKey: ["recipes", currentPage + 1],
        queryFn: () => fetchRecipes(currentPage + 1),
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [recipeResponse, isPlaceholderData, currentPage, queryClient]);

  if (error) return "An error has occurred: " + error.message;

  const pages = Array.from(
    { length: recipeResponse?.meta?.totalPages ?? 1 },
    (_, i) => i + 1
  );

  function handlePageClick(page: number) {
    setCurrentPage(page);
  }

  function handleSearch(event: ChangeEvent<HTMLInputElement>) {
    console.log(event?.target.value);
  }

  return (
    <>
      <div className="flex flex-col justify-evenly">
        <div className="p-2 self-end h-16 flex items-center ">
          <Search show={true} onChange={handleSearch} />
        </div>
        <div className="flex-grow">
          {isFetching ? (
            <div className="w-full h-full flex justify-center items-center">
              <Spinner className="size-24 text-primary" />
            </div>
          ) : (
            <div className="p-2 place-content-center h-full border gap-4 grid grid-cols-1 lg:grid-cols-4 xl:p-4 xl:grid-cols-[repeat(auto-fit,minmax(208px,236px))] ">
              {recipeResponse?.data?.map((recipe) => (
                <RecipeCard recipe={recipe} key={recipe.id} />
              ))}
            </div>
          )}
        </div>
        <div className="flex gap-2 justify-center h-12 items-center">
          {pages.map((page) => (
            <Button
              key={page}
              onClick={() => handlePageClick(page)}
              className={cn(
                "cursor-pointer",
                page === currentPage
                  ? "bg-primary"
                  : "bg-secondary text-secondary-foreground hover:text-white"
              )}
            >
              {page}
            </Button>
          ))}
        </div>
      </div>
      <ReactQueryDevtools initialIsOpen />
    </>
  );
}
