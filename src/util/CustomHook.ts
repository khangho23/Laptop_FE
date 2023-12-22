import React from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const useQuery = () => {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
}
const useFetch = axios.create({
    baseURL: "https://laptopbe-production.up.railway.app"
    // baseURL: "http://localhost:8080"
});

export {
    useQuery,
    useFetch
}




