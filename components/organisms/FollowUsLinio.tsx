'use client'
import { useEffect, useRef, useState } from 'react';

const FollowUs = () => {
    return (
        <div className="w-[full] max-w-[980px] mx-auto text-center">
            <p className="text-md text-gray-800 mt-10">Siguenos</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-15 mt-8  ml-63">
                {/* Celulares */}
                <div className="flex flex-col items-center">
                    <a href="#" className="hover:underline">
                        <span className="mt-2 text-lg text-gray-700">Instagram</span>
                    </a>
                </div>
                <div className="flex flex-col items-center">
                    <a href="#" className="hover:underline">
                        <span className="mt-2 text-lg text-gray-700">Facebook</span>
                    </a>
                </div>

                {/* Muebles */}
                <div className="flex flex-col items-center">
                    <a href="#" className="hover:underline">
                        <span className="mt-2 text-lg text-gray-700">Tik Tok</span>
                    </a>
                </div>

                {/* Computación */}
                <div className="flex flex-col items-center">
                    <a href="#" className="hover:underline">
                        <span className="mt-2 text-lg text-gray-700">Linkedin</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default FollowUs;