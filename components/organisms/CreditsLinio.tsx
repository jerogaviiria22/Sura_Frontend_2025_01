import React from 'react';

const LinioFalabellaBanner = () => {
  return (
    <div className="w-full bg-gray-100 p-8 md:p-12 lg:p-16 flex flex-col items-center text-center mt-10">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-600 mb-2">
        Linio Colombia llegó a Falabella.com con ofertas irresistibles
      </h1>
      <p className="text-sm md:text-base text-gray-600 mb-6">
        Si tienes dudas sobre tus pedidos en curso, o deseas obtener más información sobre la migración de Linio a Falabella.com, 
        <a href="#" className="text-purple-600 hover:underline">conoce más aquí</a>
      </p>
      
      <div className="max-w-6xl text-left text-gray-700 space-y-4">
        <p>
          Linio Colombia es una plataforma de compras en línea que te ofrece un amplio catálogo de productos a precios competitivos durante todo el año. Encontrarás ofertas irresistibles en tus marcas y categorías favoritas como electrodomésticos, moda mujer, deportes y cuidado personal para que compres todo lo que deseas en pocos clics.
        </p>
        <p className="text-gray-500">
          Descubre promociones en celulares para que actualices tus dispositivos, hallarás diferentes marcas y modelos como el Samsung Galaxy S23 Ultra, celulares Motorola, Oppo, Infinix, celulares Samsung gama media, celulares Xiaomi y otros teléfonos móviles que se ajustan a tu presupuesto.
        </p>
        <p className="text-gray-500">
          ¿Quieres renovar la decoración de tu hogar? Es la oportunidad perfecta para cambiar los muebles de sala, convertir tu dormitorio en el espacio cómodo que tanto deseas y modernizar tus muebles para TV. En Linio hallarás toda la información que necesitas para escoger las medidas correctas y el modelo con colores ideales.
        </p>
        <p className="text-gray-500">
          Si eres un amante de los videojuegos, también tenemos las consolas que buscas. Elige entre el PlayStation 4 y PlayStation 5 de Sony, el Nintendo Switch con todos sus accesorios o la última serie de consolas Xbox.
        </p>
        <p className="text-gray-500">
          Nuestra tienda en línea es un lugar seguro y confiable para hacer tus compras, aprovecha las ofertas en sillas gamer, audífonos inalámbricos, vestidos elegantes, bicicletas, maletas de viaje y chaquetas para hombre con envíos gratis y diferentes métodos de pago.
        </p>
        <p className="text-gray-500">
          Descubre en Linio Colombia las ofertas de hoy. ¡Haz clic!
        </p>
      </div>
    </div>
  );
};

export default LinioFalabellaBanner;
