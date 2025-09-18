"use client";
import { useEffect, useRef, useState } from "react";
import {
  MousePointerClick,
  CreditCard,
  Calendar,
  BookOpen,
  User,
} from "lucide-react";

const items = [
  {
    img: "https://www.epssura.com/files/home-2021/img/foro-17-septiembre.jpg",
    alt: "Logo EPS Sura",
    text: "Hablemos de prevención del suicidio: botiquín de primeros auxilios en salud mental. - Conéctate a nuestro foro en vivo este miércoles 17 de septiembre a las 6:00 p. m.",
    button: "INGRESA",
    class: "font-bold text-[18px] mb-5",
  },
  {
    img: "https://www.epssura.com/files/home-2021/img/banner-fraude-ginecologia-junio-2025.png",
    alt: "Imagen salud",
    text: "Ninguna persona o institución de salud te va a solicitar en nombre de SURA, mostrar tus partes íntimas en una videollamada. Si te lo piden, ¡no lo hagas!",
    class: "font-bold text-[18px] mb-5 mt-5",
  },
  {
    img: "https://www.epssura.com/files/home-2021/img/banner-farmadomicilios.png",
    alt: "Imagen afiliados",
    text: "Farmadomicilios - La mejor opción para solicitar tus medicamentos sin filas ni desplazamientos.",
    button: "INGRESA AQUÍ",
    class: "font-bold text-[24px] mb-5",
  },
  {
    img: "https://www.epssura.com/files/home-2021/img/banner-como-reclamar-los-medicamentos-2024.jpg",
    alt: "Imagen afiliados",
    text: "¿Cómo reclamar los medicamentos que te ordena tu médico?",
    button: "AQUÍ TE CONTAMOS",
    class: "font-bold text-[24px] mb-5",
  },
];

const ImageCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    resetTimeout();
     timeoutRef.current = setTimeout(nextSlide, 10000);
    return resetTimeout;
  }, [currentIndex]);

  return (
    <div className="w-full  mx-auto relative h-[420px] overflow-hidden group">
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {items.map((item, idx) => (
          <div
            key={idx}
            className="relative min-w-full h-full bg-cover bg-center flex items-center justify-center"
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(24,23,23,0.38), rgb(0,0,0)), url(${item.img})`,
            }}
          >
            {/* Contenedor del texto */}
            <div className="text-left text-white p-6 absolute top-15   left-1/4 transform -translate-x-1/6  space-x-2  max-w-[600px]">
              <h1 className={item.class}>
                {item.text.split("-").map((line, idx) => (
                  <span key={idx} className="block leading-[1.2]">
                    {line}
                  </span>
                ))}
              </h1>

              {item.button && (
                <button className="px-7 py-1 rounded-full border-white border-2 transition-all font-bold text-[15px] cursor-pointer">
                  {item.button}
                </button>
              )}
            </div>
          </div>
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
              strokeLinecap="round"
              strokeLinejoin="round"
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
              strokeLinecap="round"
              strokeLinejoin="round"
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
        {items.map((_, idx) => (
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
