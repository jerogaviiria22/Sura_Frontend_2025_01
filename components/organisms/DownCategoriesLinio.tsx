'use client'
import { useEffect, useRef, useState } from 'react';



const DownCategories = () => {
  return (
    <div className="w-[full] max-w-[980px] mx-auto text-center  ml-110">
      {/* <h2 className="text-2xl font-semibold text-gray-800">Envíos Gratis en miles productos desde $149.000*</h2> */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mt-20">
        {/* Celulares */}
        <div className="flex flex-col items-center">
          <a href="#" className="hover:underline">
            <span className="mt-2 text-lg text-gray-700">Envíos Gratis en miles productos desde $149.000</span>
          </a>
        </div>
        <div className="flex flex-col items-center">
          <a href="#" className="hover:underline">
            <span className="mt-2 text-lg text-gray-700">Gestiona tus cambios y devoluciones</span>
          </a>
        </div>

        {/* Muebles */}
        <div className="flex flex-col items-center">
          <a href="#" className="hover:underline">
            <span className="mt-2 text-lg text-gray-700">Destacados Banco Falabella</span>
          </a>
        </div>

        {/* Computación */}
        <div className="flex flex-col items-center">
          <a href="#" className="hover:underline">
            <span className="mt-2 text-lg text-gray-700">Retiro en Tienda</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default DownCategories;