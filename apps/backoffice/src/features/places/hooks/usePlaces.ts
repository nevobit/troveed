import { useQuery } from "@tanstack/react-query";
import { placesApi } from "../services";
import { useSearchParams } from "react-router-dom";

export const usePlaces = () => {
    const [searchParams] = useSearchParams();
    const limit = searchParams.get('limit') || "14";
    const page = searchParams.get('page') || "1";


    const { isLoading, data } = useQuery({
        queryFn:() => placesApi(limit, page),
        queryKey: ['places'],
    });

    return { isLoading, places: data }
}