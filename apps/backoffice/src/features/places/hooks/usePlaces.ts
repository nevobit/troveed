import { useQuery } from "@tanstack/react-query";
import { placesApi } from "../services";

export const usePlaces = () => {
    const { isLoading, data } = useQuery({
        queryFn: placesApi,
        queryKey: ['places'],
    });

    return { isLoading, places: data }
}