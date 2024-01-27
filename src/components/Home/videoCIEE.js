import React, { useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from "react-feather";





<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />


const Videos = () => {

  const informacionRef = useRef(null);
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Puedes ajustar este valor según tus necesidades
    };

    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          informacionRef.current.classList.add('animate__animated', 'animate__backInLeft');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    if (informacionRef.current) {
      observer.observe(informacionRef.current);
    }

    return () => {
      if (informacionRef.current) {
        observer.unobserve(informacionRef.current);
      }
    };
  }, []);

  

  return (
    <div className="w-full">
      <div className="flex lg:flex-row bg-gray-100 ">
        <div ref={informacionRef} className="flex flex-col lg:items-center text-left lg:w-2/5 xl:py-32 md:py-6 lg:py-20">
            <div className='px-6 md:pl-14 xl:pl-24 py-8'>
              <h2 className="text-xl font-bold text-azuls md:text-3xl lg:4xl">
              Desata tu Potencial Empresarial:  <span className="text-rojoficial font-semibold">Conviértete en un Líder con Nuestro Centro de Capacitación</span>
              </h2>
                  <p className="mt-8 text-sm text-gray-500 md:text-base text-justify">
                        ¡Transforma tu visión empresarial con conocimientos que impulsarán tu éxito! Descubre nuestro Centro de Capacitación Empresarial, donde el aprendizaje se fusiona con la innovación. Desarrolla habilidades clave, liderazgo sólido y estrategias empresariales que te catapultarán hacia nuevas alturas. ¡Tu viaje hacia el éxito comienza aquí! Explora ahora."
                        Recuerda adaptar el mensaje según la tonalidad y la voz de tu marca. ¡Espero que resulte efectivo para atraer a los visitantes!
                  </p>
              <div className="flex lg:justify-start ">
                
                <a
                  
                  className="mt-6 px-14 py-3 bg-rojoficial text-white text-md font-semibold rounded hover:bg-gray-400"
                  href="/CapacitacionEmpresarial ml-4 "
                  
                >
                  Explorar
                </a>
              </div>
            </div>
          </div>

          <div className="hidden lg:block lg:w-3/5" style={{ clipPath: 'polygon(25% 0, 100% 0%, 100% 100%, 0 100%)' }}>
            <div className="h-full  " style={{ backgroundImage: 'url(https://portal.andina.pe/EDPfotografia3/Thumbnail/2018/04/18/000497621W.jpg)' }}>
              <div className="h-full bg-black opacity-25"></div>
            </div>
          </div>
        </div>
  </div>

  );
};

export default Videos;

/*

import React, { useState } from 'react';

const Videos = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white overflow-hidden lg:py-20 py-4">
      <div className=" lg:flex flex-col-reverse lg:flex-row lg:space-x-5 ">

        <div className=" lg:w-1/2 px-6 md:px-10 lg:px-0 xl:pl-24 xl:pr-0 lg:pl-8 lg:flex mt-6 lg:mt-0 border border-green-400  ">
          <div className="text-left border border-purple-400 ">
            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 ">
              Cámara Internacional de Empresarios y Emprendedores <br />{" "}
              <span className="text-blue-600">CIEE</span>
            </h1>

            <p className="mt-6 lg:mt-10 text-gray-600 ">
              Ofrecemos soluciones innovadoras diseñadas para potenciar tu
              experiencia y alcanzar tus metas. Desde asesoramiento en comercio
              exterior hasta ambientes ideales para tu negocio, cada servicio está
              cuidadosamente creado para impulsar tu éxito.
            </p>
            <div>
              <span className="text-blue-600">
                ¡Asóciate hoy y comencemos este viaje juntos!
              </span>
            </div>
            <button className="w-full px-5 py-3 mt-6 lg:mt-10 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-rojoficial rounded-lg lg:w-auto hover:bg-red-600 focus:outline-none focus:bg-azuls font-bold ">
              ¡Quiero Asociarme!
            </button>
          </div>
        </div>

        <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2 border border-purple-600">
          <img
            className="w-full h-full object-cover lg:max-w-3xl"
            src="https://www.cutedigitalmedia.com/blog/wp-content/uploads/2023/05/Portada-negocio-rentable-en-usa.jpg"
            alt="Catalogue-pana.svg"
          />
        </div>
  </div>
</div>

  );
};

export default Videos;


*/