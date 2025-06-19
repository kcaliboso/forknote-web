import type { ApiResponseMeta } from "./ApiResponseMeta";

export interface ApiResponse<T> {
  data: T | null;
  status: "sucess" | "fail" | "error";
  results?: number;
  message?: string;
  meta?: ApiResponseMeta;
}
