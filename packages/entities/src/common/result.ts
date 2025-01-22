export interface Result<T> {
    count: number;
    items: T[];
    pageInfo: {
        page: number;
        hasNextPage: boolean;
        hasPrevPage: boolean;
        nextPage: number;
        prevPage: number;
    }
}