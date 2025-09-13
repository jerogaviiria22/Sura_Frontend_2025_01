"use client";

import React, { useState } from "react";
import LoginComponent from "@/components/molecules/LoginComponent";
import HeaderComponent from "@/components/organisms/HeaderComponent";

const AmazonLogin = () => {
  const [showModal, setShowModal] = useState(true);

  return (
    <div>
      <HeaderComponent />

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40">
          <div className="bg-white w-full max-w-md rounded-lg shadow-lg relative p-6">
            {/* Botón cerrar */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>

            {/* Logo como imagen */}
            <div className="mb-4">
              <img
                src="https://images.falabella.com/v3/assets/blt7c5c2f2f888a7cc3/blt9a6cb2faab703fa5/65a68ebb130790558acbf0cb/falabella.com_green_icon.svg"
                alt="Logo"
                className="h-8"
              />
            </div>

            {/* Título */}
            <h2 className="text-xl font-semibold mb-4">
              Inicia sesión para comprar
            </h2>

            {/* Formulario */}
            <LoginComponent />

            {/* Registrarse */}
            <p className="text-center text-sm text-gray-600 mt-4">
              ¿Aún no tienes cuenta?{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Regístrate
              </a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AmazonLogin;
