import {
  useQuery,
  keepPreviousData,
  useQueryClient,
} from "@tanstack/react-query";
import axios from "@/lib/axios";
import type { Recipe } from "@/types/models/Recipe";
import type { ApiResponse } from "@/types/response/ApiResponse";
import { useEffect, useState, type ChangeEvent, type MouseEvent } from "react";
import { Button } from "@/components/ui/button";
import Search from "@/components/search";
import Spinner from "@/components/icons/spinner";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { type ColumnDef } from "@tanstack/react-table";
import { DataTable } from "@/components/data-table";

import { format } from "date-fns";
import { useNavigate } from "react-router";

import { MoreHorizontal, Trash2Icon } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Pager } from "@/components/pager";

export default function UserRecipeList() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

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

  function handleSearch(event: ChangeEvent<HTMLInputElement>) {
    console.log(event?.target.value);
  }

  function handleOpenRecipe(recipeId: string) {
    navigate(`/my/recipe/${recipeId}`);
  }

  function handleEditRecipe(
    event: MouseEvent<HTMLDivElement>,
    recipeId: string
  ) {
    console.log(recipeId);
    event.stopPropagation();
  }

  const columns: ColumnDef<Recipe>[] = [
    {
      accessorKey: "id",
      header: "Recipe Name",
    },
    {
      accessorKey: "name",
      header: "Recipe Name",
    },
    {
      accessorKey: "createdAt",
      header: () => "Created on",
      cell: ({ row }) => {
        const formattedDate = format(row.getValue("createdAt"), "MMMM d, yyyy");

        return formattedDate;
      },
    },
    {
      id: "actions",
      cell: ({ row }) => {
        const recipe = row.original;

        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="size-8">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem onClick={(e) => handleEditRecipe(e, recipe.id)}>
                Edit Recipe
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Trash2Icon className="text-red-500" />
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];

  return (
    <div className="flex flex-col items-stretch h-[calc(100vh-96px)]">
      <div className="self-end h-16 flex items-center ">
        <Search show={true} onChange={handleSearch} />
      </div>
      <div className="flex-grow">
        {isFetching ? (
          <div className="w-full h-full flex justify-center items-center">
            <Spinner className="size-24 text-primary" />
          </div>
        ) : (
          <DataTable
            columns={columns}
            data={recipeResponse?.data ?? []}
            onRowClick={handleOpenRecipe}
          />
        )}
      </div>
      <div className="flex gap-2 justify-center h-12 items-center ">
        <Pager
          className="justify-end py-2"
          currentPage={currentPage}
          totalPages={recipeResponse?.meta?.totalPages ?? 1}
          onPageChange={(p) => setCurrentPage(p)}
        />
      </div>
      <ReactQueryDevtools initialIsOpen />
    </div>
  );
}
