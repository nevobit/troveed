export interface Result<T> {
    count: number;
    items: T[];
    pageInfo: {
        page: number;
        pages: number;
        hasNextPage: boolean;
        hasPreviousPage: boolean;
        nextPage: number;
        previousPage: number;
    }
}