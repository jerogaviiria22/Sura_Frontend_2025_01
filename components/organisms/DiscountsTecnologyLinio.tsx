'use client'
import { useEffect, useRef, useState } from 'react';
import { getProductsService } from '@/libs/products/productService';
import { ProductDAO } from '@/interfaces/products/product';

// const products = [
//   {
//     image: 'https://media.falabella.com/falabellaCO/119528256_01/w=276,h=276',
//     brand: 'ADATA',
//     name: 'Disco duro adata externo hd330 1 tb antigolpes azul usb 3.1',
//     originalPrice: '$351.900',
//     discountedPrice: '$404.700',
//     rating: 4.5,
//   },
//   {
//     image: 'https://media.falabella.com/falabellaCO/118426155_01/w=276,h=276',
//     brand: 'ONE PIXEL',
//     name: 'Tablet para Niños Krono Kids 2GB Ram 16 GB Azul',
//     originalPrice: '$269.900',
//     discountedPrice: '$299.900',
//     rating: 5,
//   },
//   {
//     image: 'https://media.falabella.com/falabellaCO/119682039_01/w=276,h=276',
//     brand: 'CREATIVE LABS',
//     name: 'Camara Web Creative LIVE CAM SYNC 1080P V2 Webcam USB',
//     originalPrice: '$149.900',
//     discountedPrice: '$250.000',
//     discount: '-40%',
//     rating: 4.2,
//   },
//   {
//     image: 'https://media.falabella.com/falabellaCO/119470212_01/w=276,h=276',
//     brand: 'B BRAX&STERN',
//     name: 'Radio Carro Android WIFI GPS Bluetooth Pantalla 7" 2 Din Brax&Stern',
//     originalPrice: '$249.900',
//     discountedPrice: '$399.000',
//     discount: '-37%',
//     rating: 4.7,
//   },
// ];

const DiscountsTeconology = () => {
const [products, setProducts] = useState<ProductDAO[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProductsService()
        setProducts(data)
      } catch (error) {
        console.error("Error al cargar productos:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  if (loading) {
    return <p className="text-center mt-10">Cargando productos...</p>
  }
  return (
    <div className="w-full max-w-[1200px] mx-auto mt-10 p-4">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">
        ¡Descuentos en Tecnología!
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {products.map((product) => (
          <div
            key={product.id_product}
            className="relative flex flex-col h-[400px] items-start bg-white rounded-lg overflow-hidden border border-gray-200 group"
          >
            {/* Imagen */}
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto object-cover"
            />

            {/* Contenido */}
            <div className="p-3 w-full">
              <p className="text-xs text-gray-500 font-medium">
                {product.brand}
              </p>
              <p className="text-sm font-semibold text-gray-800 line-clamp-2 mt-1">
                {product.name}
              </p>

              <div className="flex items-center mt-2">
                <span className="text-xl text-gray-500">{product.price}</span>
                {product.realPrice && (
                  <span className="ml-2 text-xs font-semibold text-white bg-red-600 px-1 rounded-sm">
                    -{Math.floor(
                      (1 - Number(product.price) / Number(product.realPrice)) *
                        100
                    )}
                    %
                  </span>
                )}
              </div>

              <p className="text-xs text-gray-500 line-through mt-1">
                {product.realPrice}
              </p>
            </div>

            {/* Botón que aparece al hacer hover */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-[90%] hidden group-hover:flex justify-center">
              <button className="bg-gray-800 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-900 transition">
                Ver producto
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DiscountsTeconology;
