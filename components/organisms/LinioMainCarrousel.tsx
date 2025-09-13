'use client'
import { useEffect, useRef, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const images = [
  'https://images.falabella.com/v3/assets/bltf612eb601c634386/blt4ed00bc6979257f1/6807c7f7e8bf0d0fbef05501/Vitrina_Dk_Linio_Celulares.webp',
  'https://images.falabella.com/v3/assets/bltf612eb601c634386/blt633564ce1ef5a31c/6807c808da898c20b0f87d9d/Vitrina_Dk_Linio_Infantil.webp',
  'https://images.falabella.com/v3/assets/bltf612eb601c634386/blt714214784ac3a2da/6807c808e41b1f12e6bb95c6/Vitrina_Dk_Linio_Motos.webp',
  'https://images.falabella.com/v3/assets/bltf612eb601c634386/blt03fe45d47b6f5071/6807c7f877cfbfc1564093a0/Vitrina_Dk_Linio_Computo.webp',
  'https://images.falabella.com/v3/assets/bltf612eb601c634386/blt03ddd50684b1d620/6807c808850b441f61b11a1c/Vitrina_Dk_Linio_Mascotas.webp',
  'https://images.falabella.com/v3/assets/bltf612eb601c634386/blt6d38d761db0d7757/6807c7f83ed107ad6bd03454/Vitrina_Dk_Linio_Herramientas.webp'
];

const ImageCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(nextSlide, 4000);
    return resetTimeout;
  }, [currentIndex]);

  return (
     <div className="w-full max-w-[1920px] mx-auto relative h-[460px] overflow-hidden rounded-lg">
      <div
        className="w-full h-full bg-cover bg-center transition-all duration-700 rounded-lg"
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      />
      
      {/* Botones de navegación del carrusel */}
      <div className="absolute inset-y-0 left-0 flex items-center">
        <button 
          onClick={prevSlide}
          className="bg-white bg-opacity-60 hover:bg-opacity-90 p-3 ml-2 rounded-full shadow-lg transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </div>

      <div className="absolute inset-y-0 right-0 flex items-center">
        <button 
          onClick={nextSlide}
          className="bg-white bg-opacity-60 hover:bg-opacity-90 p-3 mr-2 rounded-full shadow-lg transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Indicadores de navegación */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-all duration-300 ${
              currentIndex === idx ? 'bg-white scale-125' : 'bg-gray-400'
            }`}
            onClick={() => setCurrentIndex(idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;