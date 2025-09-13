'use client'
import { useEffect, useRef, useState } from 'react';



const Categories = () => {
  return (
    <div className="w-full max-w-[980px] mx-auto text-center mt-28">
      <h2 className="text-2xl font-semibold text-gray-800">Categorías del Mundo Linio</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mt-20">
        {/* Celulares */}
        <div className="flex flex-col items-center">
          <a href="#" className="hover:underline">
            <span className="mt-2 text-lg text-gray-700">Celulares</span>
          </a>
        </div>

        {/* Muebles */}
        <div className="flex flex-col items-center">
          <a href="#" className="hover:underline">
            <span className="mt-2 text-lg text-gray-700">Muebles</span>
          </a>
        </div>

        {/* Computación */}
        <div className="flex flex-col items-center">
          <a href="#" className="hover:underline">
            <span className="mt-2 text-lg text-gray-700">Computación</span>
          </a>
        </div>

        {/* Belleza y Cuidado Personal */}
        <div className="flex flex-col items-center">
          <a href="#" className="hover:underline">
            <span className="mt-2 text-lg text-center text-gray-700">Belleza y Cuidado Personal</span>
          </a>
        </div>
        
        {/* Electrodomésticos */}
        <div className="flex flex-col items-center">
          <a href="#" className="hover:underline">
            <span className="mt-2 text-lg text-gray-700">Electrodomésticos</span>
          </a>
        </div>
        
        {/* Deportes */}
        <div className="flex flex-col items-center">
          <a href="#" className="hover:underline">
            <span className="mt-2 text-lg text-gray-700">Deportes</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Categories;