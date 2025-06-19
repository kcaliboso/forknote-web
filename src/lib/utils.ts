import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import DOMPurify from "dompurify";

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
