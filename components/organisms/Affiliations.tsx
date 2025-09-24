"use client";
import React from "react";
import { ArrowRight } from "lucide-react";

const affiliationsItems = [
  {
    title: "Plan de Beneficios en Salud",
    img: "https://www.epssura.com/files/home-2021/img/plan-de-beneficios-en-salud-2025.webp",
    link: "#",
  },
  {
    title: "Régimen subsidiado",
    img: "https://www.epssura.com/files/home-2021/img/regimen-subsidiado-2025.webp",
    link: "#",
  },
];

class Affiliations extends React.Component {
  render() {
    return (
      <section className="bg-[#ecf0f1] py-6 w-full">
        <div className="mx-auto text-center">
          <h2 className="text-[#0133a1] text-3xl md:text-4xl font-bold py-2">
            Todo sobre afiliaciones
          </h2>
          <div className="border-t-2 border-[#ccd6ec] max-w-[60px] mx-auto"></div>
        </div>

        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-start gap-10 px-4 mt-5">


          {/* ----------- COLUMNA IZQUIERDA ----------- */}
          <div className="md:w-[45%] w-full flex flex-col gap-6">


            <div className="flex flex-col gap-4">
              {affiliationsItems.map((item, i) => (
                <div
                  key={i}
                  className="flex bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
                >
                  {/* Imagen izquierda */}
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-32 h-24 object-cover"
                  />

                  {/* Texto + enlace */}
                  <div className="flex flex-1 justify-between items-center px-4">
                    <h3 className="font-semibold text-gray-700 text-md">
                      {item.title}
                    </h3>
                    <a
                      href={item.link}
                      className="text-[#003DA5] font-bold flex items-center gap-1 hover:text-[#1f57cf]"
                    >
                      IR <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#"
              className="text-[#003DA5] font-bold underline flex items-center gap-1 hover:no-underline"
            >
              Solicitar turno virtual de afiliación
            </a>
          </div>

          {/* ----------- COLUMNA DERECHA ----------- */}
          <div className="md:w-[55%] w-full relative flex justify-center items-center">
            {/* Cuadro azul de fondo */}
            <div className="absolute top-8 left-8 right-0 bottom-0 bg-[#00AEC7] rounded-sm -z-10"></div>

            {/* Imagen principal con overlay */}
            <div className="relative w-full max-w-[520px] shadow-lg">
              <img
                src="/vendor/imgs/doctor-afiliacion.webp"
                alt="Afiliación EPS"
                className="w-full h-[340px] object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex flex-col justify-center px-8">
                <p className="text-white text-lg font-semibold mb-2">
                  Si te trasladaron a EPS SURA
                </p>
                <a
                  href="#"
                  className="text-white font-bold flex items-center gap-1 hover:underline"
                >
                  INGRESA AQUÍ <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Affiliations;
