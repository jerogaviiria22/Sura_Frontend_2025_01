import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#0c2941] text-white font-sans">
            {/* Sección superior con fondo más claro */}
            <div className="bg-[#1e364b] py-8 md:py-12 lg:py-16">
                <div className="max-w-[1200px] mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                        {/* Te ayudamos */}
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Te ayudamos</h3>
                            <ul className="space-y-2 text-sm text-gray-300">
                                <li><a href="#" className="hover:underline">Venta telefónica</a></li>
                                <li><a href="#" className="hover:underline">Centro de ayuda</a></li>
                                <li><a href="#" className="hover:underline">Devoluciones y cambios</a></li>
                                <li><a href="#" className="hover:underline">Información legal</a></li>
                                <li><a href="#" className="hover:underline">Facturas</a></li>
                                <li><a href="#" className="hover:underline">Estado de mi pedido</a></li>
                                <li><a href="#" className="hover:underline">Formulario de reclamos</a></li>
                                <li><a href="#" className="hover:underline">Canal de integridad</a></li>
                                <li><a href="#" className="hover:underline">Defensoría Vendedores y Proveedores</a></li>
                                <li><a href="#" className="hover:underline">Cómo cuidamos tus datos</a></li>
                                <li><a href="#" className="hover:underline">Peticiones, quejas y reclamos</a></li>
                                <li><a href="#" className="hover:underline">https://www.sic.gov.co/</a></li>
                                <li><a href="#" className="hover:underline">Propiedad industrial</a></li>
                            </ul>
                        </div>
                        {/* Sé parte de falabella.com */}
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Sé parte de falabella.com</h3>
                            <ul className="space-y-2 text-sm text-gray-300">
                                <li><a href="#" className="hover:underline">Vende en falabella.com</a></li>
                                <li><a href="#" className="hover:underline">Nuestros inversionistas</a></li>
                                <li><a href="#" className="hover:underline">Trabaja en grupo Falabella</a></li>
                                <li><a href="#" className="hover:underline">Venta Empresa</a></li>
                                <li><a href="#" className="hover:underline">Proveedores</a></li>
                            </ul>
                        </div>
                        {/* Únete a nuestros programas */}
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Únete a nuestros programas</h3>
                            <ul className="space-y-2 text-sm text-gray-300">
                                <li><a href="#" className="hover:underline">CMR Puntos</a></li>
                                <li><a href="#" className="hover:underline">Novios Falabella</a></li>
                                <li><a href="#" className="hover:underline">Club Bebé</a></li>
                                <li><a href="#" className="hover:underline">Club Hogar</a></li>
                                <li><a href="#" className="hover:underline">Fashion Club</a></li>
                            </ul>
                        </div>
                        {/* Nuestras empresas */}
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Nuestras empresas</h3>
                            <ul className="space-y-2 text-sm text-gray-300">
                                <li><a href="#" className="hover:underline">Falabella.com</a></li>
                                <li><a href="#" className="hover:underline">Falabella</a></li>
                                <li><a href="#" className="hover:underline">Linio</a></li>
                                <li><a href="#" className="hover:underline">Homecenter</a></li>
                                <li><a href="#" className="hover:underline">Banco Falabella</a></li>
                                <li><a href="#" className="hover:underline">Seguros Falabella</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sección inferior con fondo más oscuro y borde */}
            <div className="py-8 md:py-12 lg:py-16">
                <div className="max-w-[1200px] mx-auto px-4">
                    <div className="flex space-x-4">
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                            <svg className="w-6 h-6 text-white hover:text-red-400 transition" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.873V14.89H8.435v-2.89h1.996V10.1c0-1.979 1.19-3.245 3.018-3.245.889 0 1.782.158 1.782.158v1.944h-1.002c-.98 0-1.28.614-1.28 1.258v1.545h2.89l-.468 2.89h-2.422V21.873A9.991 9.991 0 0022 12z" clipRule="evenodd" />
                            </svg>
                        </a>
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                            <svg className="w-6 h-6 text-white hover:text-gray-400 transition" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.172 6.848a2.536 2.536 0 011.056-.47c.507-.092 1.026-.039 1.517.147.288.106.577.241.859.431.144.098.27.206.39.324.12.118.23.23.333.344.103.114.195.215.281.332a.965.965 0 01.127.177c.07.114.13.238.19.362.06.124.11.253.155.385.045.132.08.267.11.402a.885.885 0 01.076.326c.01.096.02.193.02.29a3.79 3.79 0 01-.06.76c-.033.167-.066.333-.105.5a.96.96 0 01-.137.368c-.066.12-.137.245-.214.363-.077.118-.159.23-.25.337a.89.89 0 01-.354.321c-.083.042-.167.078-.25.109-.083.03-.166.05-.25.07a.9.9 0 01-.25.02c-.114.004-.228.01-.342.016a3.99 3.99 0 01-.796.03c-.22.008-.44.01-.66.01a4.01 4.01 0 01-1.047-.042c-.225-.01-.45-.022-.67-.047-.11-.012-.22-.027-.33-.047a.9.9 0 01-.322-.11c-.105-.05-.21-.11-.315-.175-.105-.065-.21-.135-.31-.21-.09-.075-.17-.16-.25-.25-.07-.075-.14-.155-.21-.24-.07-.085-.13-.175-.18-.27a.92.92 0 01-.186-.33c-.04-.12-.075-.25-.105-.38-.03-.13-.05-.26-.07-.4a.97.97 0 01-.02-.32c0-.12.006-.24.02-.36a.98.98 0 01.09-.32c.03-.09.07-.18.11-.27.04-.09.09-.18.14-.265.05-.085.11-.16.17-.235.06-.075.13-.14.2-.2a.96.96 0 01.27-.24c.09-.05.18-.09.27-.13.09-.04.18-.07.28-.1a.95.95 0 01.29-.07c.1-.01.2-.02.3-.02a.84.84 0 01.32-.01c.21-.005.42-.008.64-.008.21 0 .42.003.63.008a.84.84 0 01.32.01c.1.005.2.01.3.02.1.01.19.02.28.035.09.015.18.03.27.05a.96.96 0 01.29.13c.09.04.18.08.27.13.09.05.18.1.26.16.08.06.16.12.23.19.07.07.13.14.2.21a.96.96 0 01.24.27c.05.09.09.18.13.27.04.09.07.18.09.27.02.09.03.18.04.28a.98.98 0 010.35c.004.114.01.228.016.342a3.99 3.99 0 01.03.796c.008.22.01.44.01.66z" clipRule="evenodd" />
                            </svg>
                        </a>
                        <div className=' flex gap-6 mb-5 ml-60'>

                        <h6>Terminos y condiciones</h6>
                        <h6>Politica de cookies</h6>
                        <h6>Politica de privacidad</h6>
                        </div>
                    </div>
                    {/* Después de la línea */}
                    <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">

                        <div className="text-sm  text-gray-400">
                            <p className="mb-1">
                                &copy; TODOS LOS DERECHOS RESERVADOS
                            </p>
                            <p>
                                Falabella.com S.A.S NIT 900.499.302-8. Calle 99 #14-49 Piso 9, Bogotá, Colombia
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
