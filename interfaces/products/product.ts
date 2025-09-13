export interface ProductDTO {
  image: string
  imageTwo: string
  imageThree: string
  imageFour: string
  imageFive: string
  brand: string
  name: string
  price: string
  realPrice: string
  stairs: string
  seller: string
  mainSpecifications: string
  includes: string
  dimensions: string
  model: string
  detailsGuarantee: string
  condition: string
  additionalInformation: string
}

export interface ProductDAO extends ProductDTO {
  id_product: number | string
}