"use client";
import { useEffect, useRef, useState } from "react";
import {
  MousePointerClick,
  CreditCard,
  Calendar,
  BookOpen,
  User,
} from "lucide-react";

const images = [
  "https://www.epssura.com/files/home-2021/img/banner-fiebre-amarilla-2025.png",
  "https://www.epssura.com/files/home-2021/img/banner-fraude-ginecologia-junio-2025.png",
  "https://www.epssura.com/files/home-2021/img/banner-farmadomicilios.png",
  "https://www.epssura.com/files/home-2021/img/banner-como-reclamar-los-medicamentos-2024.jpg",
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
    <div className="w-full  mx-auto relative h-[420px] overflow-hidden group">
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, idx) => (
          <div
            key={idx}
            className="min-w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(24,23,23,0.38), rgb(0,0,0)), url(${img})`,
            }}
          />
        ))}
      </div>

      {/* Botones de navegación del carrusel */}
      {/* Flecha izquierda */}
      <div className="absolute inset-y-0 left-0 flex items-center text-[#C2C2C2]">
        <button
          onClick={prevSlide}
          className="p-3 ml-2 rounded-full transition hover:text-white
                     opacity-100 -translate-x-12  group-hover:translate-x-0 duration-300"
        >
          <svg
            width="30px"
            height="30px"
            viewBox="0 0 1024 1024"
            className="icon"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M768 903.232l-50.432 56.768L256 512l461.568-448 50.432 56.768L364.928 512z"
                fill="currentColor"
              ></path>
            </g>
          </svg>
        </button>
      </div>

      {/* Flecha derecha */}
      <div className="absolute inset-y-0 right-0 flex items-center text-[#C2C2C2]">
        <button
          onClick={nextSlide}
          className="p-3 ml-2 rounded-full transition hover:text-white
                     opacity-100 translate-x-12  group-hover:translate-x-0 duration-300"
        >
          <svg
            width="30px"
            height="30px"
            viewBox="0 0 1024 1024"
            className="icon"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            transform="rotate(180)"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M768 903.232l-50.432 56.768L256 512l461.568-448 50.432 56.768L364.928 512z"
                fill="currentColor"
              ></path>
            </g>
          </svg>
        </button>
      </div>

      {/* Indicadores de navegación */}
      <div className="absolute bottom-30 left-1/4 transform -translate-x-3/4 flex space-x-2 gap-1">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-all duration-300 ${
              currentIndex === idx ? "bg-[#049ad3] scale-110" : "bg-gray-400"
            }`}
            onClick={() => setCurrentIndex(idx)}
          />
        ))}
      </div>
      {/* Opciones a un clic */}
      <div className="absolute bottom-0 left-1/2  -translate-x-2/4  space-x-20 w-[59%]">
        <div className="w-full text-white">
          <div className="  items-center py-4">
            {/* Título con líneas */}
            <div className="flex items-center w-full justify-center mb-3">
              <div className="flex-1 border-t-2 border-white"></div>
              <span className="px-1 text-[18px] font-semibold mb-1">
                OPCIONES A UN CLIC
              </span>
              <div className="flex-1 border-t-2 border-white"></div>
            </div>

            {/* Opciones */}
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex flex-wrap justify-center text-sm divide-x divide-gray-500">
                <div className="flex items-center gap-2 px-4 cursor-pointer hover:text-[#08a4e4] transition">
                  <span className="w-4 h-4">📱</span>
                  <span>SERVICIOS A UN CLIC</span>
                </div>
                <div className="flex items-center gap-2 px-4 cursor-pointer hover:text-[#08a4e4] transition">
                  <span className="w-4 h-4">💳</span>
                  <span>MEDIOS DE PAGO</span>
                </div>
                <div className="flex items-center gap-2 px-4 cursor-pointer hover:text-[#08a4e4] transition">
                  <span className="w-4 h-4">🖱️</span>
                  <span>TURNO VIRTUAL</span>
                </div>
                <div className="flex items-center gap-2 px-4 cursor-pointer hover:text-[#08a4e4] transition">
                  <span className="w-4 h-4">📋</span>
                  <span>DIRECTORIO MÉDICO</span>
                </div>
                <div className="flex items-center gap-2 px-4 cursor-pointer hover:text-[#08a4e4] transition">
                  <span className="w-4 h-4">👤</span>
                  <span>CERTIFICADO DE DISCAPACIDAD</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
