import React from 'react';

const VisionyMision = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      
        <h2 className=" py-6 lg:py-20 text-3xl lg:text-4xl font-extrabold font-pop text-azuls">Nuestra Misión y Visión</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-40 mb-6 lg:mb-20 ">
        
        <div className="w-72  lg:w-[580px] h-72 lg:h-[350px]  bg-azuls rounded-lg overflow-hidden shadow-lg transition duration-600 transform-gpu hover:scale-105">
          <div className="relative w-full h-full flex flex-col justify-center items-center transition-opacity duration-400 ">
              <span className="text-plomo text-2xl lg:text-4xl font-pop font-bold animate-pulse">Visión</span>
              <div className="second-content absolute inset-0 flex justify-center items-center bg-[#004665] text-white text-center opacity-0 transition-opacity duration-400 hover:opacity-100 ">
              <span className="text-plomo text-base lg:text-xl font-Rale p-6 lg:p-20 text-justify animate-bounce">Ser la red global que conecta a las mentes empresariales para crear un futuro empresarial más dinámico, inclusivo y sostenible.</span>
              </div>
          </div>
        </div>

        <div className="w-72 lg:w-[580px] h-72 lg:h-[350px]  bg-black rounded-lg overflow-hidden shadow-lg transition duration-600 transform-gpu hover:scale-105 ">
          <div className="relative w-full h-full flex flex-col justify-center items-center transition-opacity duration-400">
            <div className="first-content relative w-full h-full flex flex-col justify-center items-center transition-opacity duration-400 opacity-100 hover:opacity-0  bg-[#264c9e] rounded-lg">
              <span className="text-plomo text-2xl lg:text-4xl font-pop font-bold  animate-pulse">Misión</span>
            </div>
            <div className="second-content absolute inset-0 flex justify-center items-center bg-[#2953ac] text-white text-center opacity-0 transition-opacity duration-400 hover:opacity-100">
              <span className="text-plomo text-base lg:text-xl font-Rale p-6 lg:p-20 text-justify animate-bounce">Potenciar el éxito de empresarios y emprendedores a nivel mundial, conectando mentes y creando oportunidades.</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default VisionyMision;
