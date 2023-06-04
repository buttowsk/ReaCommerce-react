import {fakestoreApi} from "../../services/fakestoreApi";

export const getProduct = (limit) => {
    return (
        fakestoreApi.get(`/products?limit=${limit}`)
            .then(response => {
                return response.data
            })
    )
}