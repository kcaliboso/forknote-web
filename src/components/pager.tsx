import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from "@/components/ui/pagination";
import { getPaginationRange } from "@/lib/utils";

interface PagerProps {
  className?: string;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function Pager({
  currentPage,
  totalPages,
  onPageChange,
  className,
}: PagerProps) {
  const paginationRange = getPaginationRange(currentPage, totalPages, 1, 1);

  return (
    <Pagination className={className}>
      <PaginationContent className="justify-center">
        <PaginationItem className={currentPage === 1 ? "hidden" : "block"}>
          <PaginationPrevious
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (currentPage > 1) onPageChange(currentPage - 1);
            }}
          />
        </PaginationItem>

        {paginationRange.map((elem, idx) => {
          if (elem === "ellipsis") {
            return (
              <PaginationItem key={`ellipsis-${idx}`}>
                <PaginationEllipsis />
              </PaginationItem>
            );
          } else {
            const pageNum = elem as number;
            return (
              <PaginationItem key={pageNum}>
                <PaginationLink
                  href="#"
                  isActive={pageNum === currentPage}
                  onClick={(e) => {
                    e.preventDefault();
                    if (pageNum !== currentPage) onPageChange(pageNum);
                  }}
                >
                  {pageNum}
                </PaginationLink>
              </PaginationItem>
            );
          }
        })}

        <PaginationItem
          className={currentPage === totalPages ? "hidden" : "block"}
        >
          <PaginationNext
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (currentPage < totalPages) onPageChange(currentPage + 1);
            }}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
