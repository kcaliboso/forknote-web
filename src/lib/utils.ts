import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import DOMPurify from "dompurify";

type PageElement = number | "ellipsis";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function createImageUrl(imageLink: string, path: string) {
  return `${import.meta.env.VITE_API_URL}/uploads/images/${path}/${imageLink}`;
}

export function createMarkup(htmlString: string) {
  return {
    __html: DOMPurify.sanitize(htmlString),
  };
}

export function getPaginationRange(
  currentPage: number,
  totalPages: number,
  siblingCount = 1,
  boundaryCount = 1
): PageElement[] {
  const result: PageElement[] = [];
  const totalNumbers = siblingCount * 2 + 3 + boundaryCount * 2;

  if (totalPages <= totalNumbers) {
    for (let i = 1; i <= totalPages; i++) {
      result.push(i);
    }
    return result;
  }

  const leftSiblingIndex = Math.max(
    currentPage - siblingCount,
    boundaryCount + 2
  );
  const rightSiblingIndex = Math.min(
    currentPage + siblingCount,
    totalPages - boundaryCount - 1
  );

  // First pages
  for (let i = 1; i <= boundaryCount; i++) {
    result.push(i);
  }

  // Left ellipsis
  if (leftSiblingIndex > boundaryCount + 2) {
    result.push("ellipsis");
  } else {
    for (let i = boundaryCount + 1; i < leftSiblingIndex; i++) {
      result.push(i);
    }
  }

  // Main range
  for (let i = leftSiblingIndex; i <= rightSiblingIndex; i++) {
    result.push(i);
  }

  // Right ellipsis
  if (rightSiblingIndex < totalPages - boundaryCount - 1) {
    result.push("ellipsis");
  } else {
    for (let i = rightSiblingIndex + 1; i <= totalPages - boundaryCount; i++) {
      result.push(i);
    }
  }

  // Last pages
  for (let i = totalPages - boundaryCount + 1; i <= totalPages; i++) {
    result.push(i);
  }

  return result;
}
