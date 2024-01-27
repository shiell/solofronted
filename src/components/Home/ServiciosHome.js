import React from 'react';
import Snowfall from 'react-snowfall';

const incentives = [
    {
      name: 'Centro de Capacitación Empresariales:',
      imageSrc: 'https://4par.com.mx/images/Contenidos/landing-pages/Ventajas-Capacitacion.png',
      description: 
      '"Potenciamos el crecimiento de tu empresa a través de nuestro Centro de Capacitación Empresarial. Ofrecemos programas especializados que impulsan el desarrollo de habilidades clave, mejorando el rendimiento y la eficiencia de tu equipo. Descubre cómo la formación personalizada puede llevar a tu empresa al siguiente nivel."',
    },
    {
      name: 'Alquiler de Ambientes',
      imageSrc: 'https://plus.unsplash.com/premium_photo-1686167993442-ee5eaab0394f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description:
       '"Facilitamos el espacio perfecto para tus eventos y reuniones. Con nuestro servicio de alquiler de ambientes, podrás contar con instalaciones modernas y versátiles que se adaptan a tus necesidades. Desde salas de reuniones hasta auditorios, estamos aquí para hacer que tus eventos sean memorables."',
    },
    {
      name: 'Bolsa de Trabajo',
      imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-exchange-simple.svg',
      description:
      '"Conectamos talento con oportunidades. Explora nuestra Bolsa de Trabajo para acceder a las últimas ofertas laborales y encontrar el candidato perfecto para tu empresa. Simplificamos el proceso de reclutamiento, facilitando el crecimiento y el desarrollo profesional."',
    },
    {
      name: 'Comercio Exterior',
      imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-exchange-simple.svg',
      description:
        '"Conectamos talento con oportunidades. Explora nuestra Bolsa de Trabajo para acceder a las últimas ofertas laborales y encontrar el candidato perfecto para tu empresa. Simplificamos el proceso de reclutamiento, facilitando el crecimiento y el desarrollo profesional."',
    },
    
  ]
  
export default function ServiciosHome() {
    return (
      <div className="relative h-full  ">
        
        <div className=' h-full marquee-container absolute'>
            <img
              className="  w-full h-full z-0 opacity-70 marquee-image"
              src="https://i.ibb.co/Lvx7bcN/bg.jpg"
              alt=""
            />
            <img
            className=" w-full h-full z-0 opacity-70 marquee-image"
            src="https://i.ibb.co/Lvx7bcN/bg.jpg"
            alt=""
            />
        </div>
      <div className=" absolute inset-0 bg-black opacity-60 "></div>

      

      <Snowfall quantity={50} />

      <div className=" py-20 relative z-20">
          <h2 className=" text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white text-left px-6 md:px-24">
                Descubre Nuestros Servicios Integrados para el Éxito Empresarials
          </h2>

          <div className="mt-10 lg:mt-16 grid grid-cols-1 gap-y-12 gap-x-12 lg:grid-cols-2 mx-6 lg:mx-24 md:mx-10">
            {incentives.map((incentive) => (
              <div
                key={incentive.name}
                className=" sm:flex lg:block  p-8 shadow-lg rounded-md hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out border-4 border-white border-opacity-40 ">

                

                <div className="mt-4 sm:mt-0 mx-auto  lg:mt-6 lg:ml-0 text-center">
                  <h3 className="text-xl font-semibold text-white opacity-95  ">{incentive.name}</h3>
                  <p className="mt-2 text-sm text-white opacity-60 text-justify font-bold">{incentive.description}</p>
                </div>

              </div>
            ))}
          </div>
       </div>
       
    </div>


    )
  }



/*
  <div className="relative h-full marquee-container">
      <img
        className="absolute object-cover w-full h-full z-0 opacity-70 marquee-image"
        src="https://i.ibb.co/Lvx7bcN/bg.jpg"
        alt="Descripción de la imagen"
      />

      <div className="absolute inset-0 bg-black opacity-40"></div>

      <Snowfall quantity={50} />

      <div className=" py-12 relative z-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-black text-center border border-pink-500 px-6 md:px-10">
            Descubre Nuestros Servicios Integrados para el Éxito Empresarial
          </h2>

          <div className="mt-10 lg:mt-16 grid grid-cols-1 gap-y-12 gap-x-12 lg:grid-cols-2 mx-6 lg:mx-24 md:mx-10 ">
            {incentives.map((incentive) => (
              <div
                key={incentive.name}
                className="sm:flex lg:block bg-white p-8 shadow-lg rounded-md hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out border border-green-600 "
              >
                <div className="sm:flex-shrink-0">
                  <img className="h-16 mx-auto" src={incentive.imageSrc} alt="" />
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0 text-center">
                  <h3 className="text-lg font-semibold text-teal-800 ">{incentive.name}</h3>
                  <p className="mt-2 text-sm text-gray-600">{incentive.description}</p>
                </div>
              </div>
            ))}
          </div>
       </div>
    </div>

*/


    