import { apiFetch } from "../singletonFetch"
import { ProductDTO, ProductDAO } from "@/interfaces/products/product"

export const getProductsService = (): Promise<ProductDAO[]> => {
  return apiFetch('/products', 'GET')
}

export const getProductByIdService = (id: number | string): Promise<ProductDAO> => {
  return apiFetch(`/products/${id}`, 'GET')
}
