"use client";

import AmazonLogin from '@/app/(webpage)/login/page';
import React, { useState } from 'react';

export default function HeaderComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentView, setCurrentView] = useState('header');
  const [isOpen, setIsOpen] = useState(false);
  const categories = {
    "Tecnología": {
      "Celulares y teléfonos": ["Smartphones", "Smartwatches", "Accesorios", "Carcasas", "Cargadores y cables"],
      "Tv y video": ["Televisores", "Accesorios", "Proyección", "Teatro en casa"],
      "Audio": ["Audífonos", "Parlantes bluetooth", "Barras de sonido", "Mini componentes"],
      "Computación": ["Computadores portátiles", "PC de escritorio", "Tablets", "Accesorios de Tablets", "Monitores", "Accesorios de computadoras", "Almacenamiento", "WebCams", "Impresoras"],
      "Zona gamer": ["Play station", "Nintendo", "Xbox", "Accesorios gaming"],
      "Cámaras": ["Cámaras profesionales", "Cámaras de seguridad", "Drones y accesorios"],
      "Smart Home": ["Aspiradora robot", "Iluminación inteligente", "Calefacción inteligente", "Streaming", "Asistente por voz", "Seguridad y vigilancia"],
    },
    "Electrodomésticos": {
      "Refrigeración": ["Neveras frost", "Neveras no frost", "Nevecones", "Cavas", "Congeladores", "Dispensadores de agua", "Minibares"],
      "Lavado y planchado": ["Lavadoras", "Lavadoras secadoras", "Planchas", "Secadoras"],
      "Aspirado y limpieza": ["Aspiradoras", "Aspiradoras robot", "Hidrolavaoras"],
      "Cocina": ["Estufas de piso", "Estufas empotrables", "Extractores y campanas", "Hornos empotrables", "Lavavajillas"],
      "Electrodomésticos de cocina": ["Cafeteras", "Batidoras", "Freidoras de aire", "Exprimidores y extractores", "Licuadoras", "Ollas arroceras y multiusos", "Microondas", "Hornos eléctricos", "Hervidores", "Sandwicheras y waffleras"],
      "Climatización": ["Calefacción", "Aires acondicionados", "Purificadores de aire", "Ventiladores", "Deshumificador"],
      "Máquinas de coser": [""],
    },
    "Hogar": {
      "Muebles de sala": ["Juegos de sala", "Mesa de centro y auxiliares", "Muebles de tv", "Poltronas", "Puffs", "Sofá camas", "Sofás", "Sofás en L"],
      "Oficina y escritorios": ["Escritorios", "Sillas de oficina", "Sillas gamer"],
      "Muebles de comedor": ["Juegos de comedor", "Mesas de comedor", "Sillas bar", "Sillas de comedor"],
      "Parrillas y BBQ": [""],
      "Dormitorio": ["Cabeceros y mesas de noche", "Camas y base camas", "Closets armarios", "Colchones", "Cómodas y cajoneras", "Juegos de dormitorio"],
      "Ropa de cama": ["Almohadas", "Cojines y pieceras", "Edredones y cubrelechos", "Fundas de duvet", "Mantas de cobijas", "Protectores de colchón", "Sábanas y juegos de cama"],
      "Decoración e iluminación": ["Alfombras y tapetes", "Cortinas y blackouts", "Decoración", "Iluminación exterior", "Ilumación interior", "Lámparas"],
    },
    "Ferreteria y Automotriz": {
      "Herramientas eléctricas e inalámbricas": ["Atornilladores", "Esmeriles y tronzadoras", "Lijadoras", "Rotomartillos y demoledores", "Sierras", "Taladros"],
      "Herramientas manuales": ["Alicates", "Cajas de herramientas", "Destornilladores", "Llaves y juegos de copas", "Martillos y mazos", "Serruchos y sierras", "Set de herramientas"],
      "Máquinas y complementos": ["Bombas de agua y motobombas", "Compresores", "Generadores y plantas eléctricas", "Hídrolavadoras y accesorios", "Motosierras", "Riego de jardín"],
      "Automotriz": ["Accesorios de exterior", "Accesorios de interior", "Accesorios para motos", "Audio y video", "Herramientas y equipos mecánicos", "Limpieza y cuidado", "Líquidos y lubricantes", "Llantas y rines", "Radios", "Repuestos y autopartes", "Seguridad para autos"],
    },
    "Belleza y Cuidado Personal": {
      "Perfumes": ["Perfumes mujer", "Perfumes hombre"],
      "Cuidado capilar": ["Shampoo y acondicionador", "Tratamientos capilares", "Onduladores de pelo", "Alisadores de pelo", "Secadores de pelo", "Afeitadoras y Cortapelos", "Cepillos y accesorios"],
      "Cuidado de la piel": ["Cuidado Corporal", "Cuidado Facial", "Dermocosmética"],
      "Maquillaje": ["Labios", "Piel", "Ojos", "Cejas", "Brochas y accesorios de maquillaje"],
      "Salud y bienestar": ["Bienestar sexual", "Equipos médicos y de movilidad", "Fajas y Moldeadores", "Farmacia y botiquín", "Monitores y medición", "Ortopedia"],
      "Suplementos y Vitaminas": [""],
    },
    "Moda": {
      "Moda mujer": ["Blusas y Camisetas", "Chaquetas y Abrigos", "Jeans y pantalones", "Ropa deportiva", "Ropa interior y pijamas", "Sacos", "Vestidos de Baño", "Vestidos y enteritos"],
      "Zapatos mujer": ["Botas y botines", "Sandalias", "Tenis", "Tacones", "Zapatos casuales"],
      "Accesorios mujer": ["Carteras y Bolsos", "Cinturones", "Gafas", "Joyas", "Relojes"],
      "Maletas de viaje": [""],
      "Moda hombre": ["Buzos", "Camisas y Camisetas", "Chaquetas y abrigos", "Jeans y pantalones", "Pantalonetas de Baño", "Ropa deportiva", "Sacos"],
      
    }
  };
  const [activeCategory, setActiveCategory] = useState<keyof typeof categories>("Tecnología");
  const slugify = (str: string) =>
    str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/\s+/g, "-");

  if (currentView === 'login') {
    return <AmazonLogin />;
  }
  return (
    <header className="w-full">
      {/* Barra superior blanca */}
      <div className="w-full bg-white border-b border-gray-200">
        <div className="max-w-[1200px] flex items-center gap-8 h-8 px-4">
          <img
            src="https://images.falabella.com/v3/assets/blt7c5c2f2f888a7cc3/blt422ee1291fbab2a2/marketplace-disabled.svg"
            alt="Falabella"
            className="h-3.5"
          />
          <img
            src="https://images.falabella.com/v3/assets/blt7c5c2f2f888a7cc3/blt55f993da75fa018d/homecenter-disabled.svg"
            alt="Homecenter"
            className="h-2.5"
          />
          <img
            src="https://images.falabella.com/v3/assets/blt088e6fffbba20f16/blta5a44443cc0e501c/63b6ff659233961262fbd64c/logo-linio.svg"
            alt="Linio"
            className="h-8"
          />
        </div>
      </div>

      <div className="w-full bg-[#C300A2]">
        <div className=" flex items-center h-18 px-4">

          {/* Logo */}
          <div className="mr-15">
            <img
              src="https://images.falabella.com/v3/assets/blt088e6fffbba20f16/bltf580cd4c16460848/64feccbe1d03ade334df3b16/linio.svg"
              alt="Linio"
              className="h-10"
            />
          </div>

          {/* Categorías */}

          <div className="inline-block text-left"
          >

            {/* Botón */}
            <button
              onClick={() => {
                setIsOpen(!isOpen);
                setActiveCategory("Tecnología");
              }}
              className="flex items-center gap-2 px-4 py-1.5 border border-white text-white font-semibold rounded-full bg-[#C300A2] "
            >
              Categorías
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-8 w-4 transform transition-transform ${isOpen ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Mega Menú */}
            {isOpen && (
              <div className="absolute top-[110px] left-0 w-screen h-[490px] bg-white shadow-lg z-50 flex"
                onMouseLeave={() => setIsOpen(false)}>
                {/* Categorías principales */}
                <div className="w-56 border-r border-gray-200 bg-gray-50 mt-5 ml-5">
                  {Object.keys(categories).map((cat) => (
                    <button
                      key={cat}
                      className={`w-full text-left px-4 py-2 font-medium text-sm  rounded-3xl text-black hover:bg-pink-100 ${activeCategory === cat ? "bg-pink-100 text-pink-700" : ""
                        }`}
                      onMouseEnter={() => setActiveCategory(cat as keyof typeof categories)}
                    >
                      <div className="flex items-center justify-between w-full">
                        <span>{cat}</span>
                        <svg fill="currentColor" width="18px" height="18px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path></g>
                        </svg>
                      </div>
                    </button>
                  ))}
                </div>

                {/* Subcategorías dinámicas */}
                <div className="flex-1 p-6 grid grid-cols-3 gap-6 overflow-y-auto">
                  {Object.entries(categories[activeCategory]).map(([subcat, items]) => (
                    <div key={subcat}>
                      <a
                        href={`/categorias/${slugify(activeCategory)}/${slugify(subcat)}`}
                        className="block font-semibold text-gray-600 mb-2 hover:text-black"
                      >
                        {subcat}
                      </a>
                      <ul className="space-y-1">
                        {items.map((item) => {
                          return (
                            <li key={item}>
                              <a
                                href={`/categorias/${slugify(activeCategory)}/${slugify(item)}`}
                                className="text-sm text-gray-600 hover:text-black"
                              >
                                {item}
                              </a>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  ))}

                </div>
              </div>
            )}
          </div>

          {/* Barra de búsqueda */}
          <div className="flex items-center w-full max-w-6xl bg-white rounded-full overflow-hidden ml-5">
            <input
              type="text"
              placeholder="Buscar en Linio"
              className="flex-1 px-3 py-2 text-sm text-gray-2000 outline-none border-none"
            />
            <button className="bg-[#495867] w-[46px] h-[46px] flex items-center justify-center rounded-full ">
              <svg xmlns="https://images.falabella.com/v3/assets/blt088e6fffbba20f16/blt71d9874fe32f0ffa/63b733a51d6eeb10b65d828c/hr-3-search-desktop.svg" className="h-8 w-8 text-white mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z" />
              </svg>
            </button>
          </div>


          <nav className="flex items-center gap-4 text-white text-base font-medium ml-4">
            <div className="flex items-center gap-4 text-white text-base font-semibold">
              <div
                className="relative"
                onMouseEnter={() => setIsMenuOpen(true)}
                onMouseLeave={() => setIsMenuOpen(false)}
              >
                {/* Botón */}
                <a
                  href="#"
                  className="flex flex-col leading-tight hover:underline"
                >
                  <span className="font-bold leading-[16px] text-[19px] text-white no-underline mt-[5px] font-semibold">
                    Hola,
                  </span>
                  <span className="flex items-center mb-2 gap-1 font-bold leading-[16px] font-black text-[19px] text-white no-underline mt-[5px]">
                    Inicia sesión
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </a>

                {/* Menú desplegable */}
                {isMenuOpen && (
                  <div
                    className="absolute right-0 top-full w-56 shadow-lg bg-white focus:outline-none z-50 pt-2"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                  >
                    <div className="py-1" role="none">
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                        onClick={() => {
                          setIsMenuOpen(false);
                          setCurrentView("login");
                        }}
                      >
                        Inicia sesión
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                      >
                        Regístrate
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                      >
                        Mi cuenta
                      </a>
                      <hr className="my-2 border-gray-200" />
                      <a
                        href="#"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                      >
                        <svg
                          className="w-5 h-5 mr-2 text-purple-600"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zM12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8a3 3 0 110-6 3 3 0 010 6zm0-4a1 1 0 100 2 1 1 0 000-2z" />
                        </svg>
                        CMR Puntos
                      </a>
                    </div>
                  </div>
                )}
              </div>

              {/* Separador */}
              <span className="border-r border-white/50 h-14"></span>
              {/* Mis compras */}
              <a href="#" className="flex flex-col leading-tight hover:underline">
                <span className="font-bold leading-[16px] text-[19px] text-white no-underline mt-[5px] font-semibold">Mis</span>
                <span className="flex items-center mb-2 font-bold leading-[16px] font-black text-[19px] text-white no-underline mt-[3px]">
                  compras
                </span>
              </a>
              {/* Separador */}
              <span className="border-r border-white/50 h-14"></span>
              {/* Favoritos */}
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.3} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </a>
              {/* Separador */}
              <span className="border-r border-white/50 h-14"></span>
              {/* Carrito con badge */}
              <a href="#" className="relative">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.182 1.625.707 1.625H18m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="absolute -top-1 -right-2 bg-[#3b4552] text-white text-xs font-bold rounded-full w-[18px] h-[18px] flex items-center justify-center">0</span>
              </a>
            </div>
          </nav>
        </div>
      </div>
      <div className="flex justify-center w-full bg-white text-gray-800 border-b border-gray-200">
        <div className="w-full max-w-[14100px] px-4 py-3 flex items-center justify-between">
          {/* Sección de "Ingresa tu ubicación" */}
          <div className="flex items-center space-x-2 cursor-pointer text-sm font-semibold">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
            </svg>
            <span className="text-[#495867]">Ingresa tu ubicación</span>
          </div>
          {/* Sección de "Vende en Falabella" */}
          <div className="hidden lg:flex items-center space-x-4 text-sm font-medium">
            <a href="#" className="hover:text-[#c300a2] transition-colors text-[#495867]">Vende en falabella.com</a>
            {/* <a href="#" className="hover:text-[#c300a2] transition-colors text-[#495867]">Tarjetas y cuentas</a> */}
            <a href="#" className="flex items-center space-x-1 hover:text-[#c300a2] transition-colors text-[#495867]">
              <span>Tarjetas y cuentas</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            <a href="#" className="hover:text-[#c300a2] transition-colors text-[#495867]">Novios</a>
            <a href="#" className="flex items-center space-x-1 hover:text-[#c300a2] transition-colors text-[#495867]">
              <span>Ayuda</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
