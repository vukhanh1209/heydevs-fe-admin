export type PaginationRES<T> = {
  content: T;
  totalPages: number;
  number: number;
  totalElements: number;
};
