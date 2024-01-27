import React from "react";
import Logo_Email from 'assets/img/Email.svg'
import Logo_Reloj from 'assets/img/Reloj.svg'
import Logo_Localizacion from 'assets/img/Localizacion.svg'
import Logo_Telefono from 'assets/img/Telefono.svg'

const InfoBar = () => {
  return (
    <div className="bg-white p-4 py-10">
      <div className="flex items-center">
        <div className="lg:px-20">
          <h2 className="text-rojoficial text-4xl font-bold">¿Quieres Asesoramiento o Capacitación en Comercio Exterior?</h2>
          <h3 className="text-azuls text-2xl font-bold mt-4">Escribenos:</h3>

          <div className="flex flex-wrap lg:grid lg:grid-cols-4 items-center bg-gray-200  py-5  rounded-full mt-10 lg:gap-4">

              <div className='text-azuls font-regular text-lg inline-flex bg-yellow-300'>
                  <img
                  src={Logo_Telefono}
                  alt="Telefono Icon"
                  width={30}
                  height={24}
                  style={{
                    margin: '0px 5px 0 0px'
                  }}
                />

                
                0987 654 321
              </div>
              
              <div className='text-azuls font-regular text-lg inline-flex bg-purple-200'>
                <img
                  src={Logo_Reloj}
                  alt="Logo_Reloj"
                  width={30}
                  height={24}
                  style={{
                    margin: '0 5px 0 0'
                  }}
                />
                Lun - Vier 08:00 - 18:00
              </div>

              <a href="https://maps.app.goo.gl/5Gy9wbv93AChzXqd8" target="_blank" rel="noopener noreferrer">
                <div className='text-azuls font-regular text-lg inline-flex bg-green-400'>
                  <img
                    src={Logo_Localizacion}
                    alt="Logo_Localizacion"
                    width={43}
                    height={37}
                    style={{
                      alignSelf: 'center',
                      padding: '0 0 0 12px',
                      margin: '0 5px 0 0',
                    }}
                  />
                  Av. Costanera con Jr. Los Incas
                </div>
              </a>

              <div className='text-azuls font-regular text-lg inline-flex bg-blue-300'>
                <img
                  src={Logo_Email}
                  alt="Logo_Email"
                  width={43}
                  height={37}
                  style={{
                    alignSelf: 'center',
                    padding: '0 0 0 12px',
                    margin: '0 5px 0 0'
                  }}
                />
                info@example.com
              </div>

          </div>


        </div>
      </div>
    </div>
  );
};

export default InfoBar;


/*

<div className="border-l-2 border-azuls h-6 mx-3 bg-slate-200"></div>
*/