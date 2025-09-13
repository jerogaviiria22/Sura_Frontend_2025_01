"use client";

import AmazonLogin from '@/app/(webpage)/login/page';
import React, { useState } from 'react';

export default function HeaderComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentView, setCurrentView] = useState('header');
  const [isOpen, setIsOpen] = useState(false);
  
  //const [activeCategory, setActiveCategory] = useState<keyof typeof categories>("Tecnología");
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
      <div className="w-full bg-[#53575b] ">
        <div className="max-w-[1200px] flex items-center gap-8 h-[34px] px-4">
        </div>
      </div>

      <div className="w-full bg-white">
        <div className=" flex items-center h-18 px-4">

          {/* Logo */}
          <div className="ml-15 max-w-[190px] max-h-[190px]">
            <img
              src="https://www.epssura.com/files/home-2021/header-footer/logo_eps.png"
              alt="epssuralogo"
            
            />
          </div>
          <div className="gap-30   grid-5">
             a
            <span>Ley de transparencia</span>
            <span>Preguntas frecuentes</span>
            <span>Escríbenos tus PQRS</span>
            <span>Canales de contacto</span>
            <span>Solicitar clave</span>
          </div>
        

          {/* Categorías */}

          
          </div>
        </div>
    </header>
  )
}
