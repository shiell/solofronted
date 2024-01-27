import React, { useEffect, useRef } from 'react';
import 'animate.css/animate.min.css';

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />


const Informacion = () => {

  const informacionRef = useRef(null);
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // ajustable
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

 
    return(
      <div className='bg-gray-200 overflow-hidden'>
          <div ref={informacionRef} className='text-center py-6 lg:py-20 bg-white px-6'>
            <div class="hidden md:block absolute inset-y-0 right-1/2 -z-10 mr-4 md:mx-16 xl:mx-24 w-[200%] origin-bottom-left skew-x-[-30deg] bg-plomo shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 xl:origin-center"></div>

            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold text-azuls">
              Cámara Internacional de Empresarios y Emprendedores <span className="text-rojoficial text-2xl md:text-3xl lg:text-5xl">CIEE</span>
            </h2>

            <p className="mt-3 lg:mt-8 text-xs md:text-sm lg:text-base xl:text-lg text-gray-900 md:mx-8 xl:mx-36 text-justify block rounded-lg bg-[hsla(0,0%,100%,0.7)] px-4 md:px-6 xl:px-12 py-6 md:py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[30px]">
              ¡Bienvenido a la puerta digital de CIEE, tu espacio integral para explorar, aprender y conectarte con oportunidades únicas!
              Navega y descubrirás un universo de posibilidades que hemos creado pensando en ti.
              Te invitamos a ser parte de nuestra comunidad en línea, donde la innovación, el conocimiento y las oportunidades se entrelazan. 
              Únete a nosotros para explorar, aprender y avanzar juntos en esta emocionante travesía.
            </p>

              <div className="hidden lg:block items-center md:flex-row justify-center lg:justify-start mt-6 md:mt-8">
                <a
                  className="mb-2 md:mb-0 mx-4 px-4 py-3 bg-rojoficial text-gray-200 text-sm md:text-md font-semibold rounded hover:bg-gray-800"
                  href="/Nosotros"
                >
                  Conócenos más
                </a>
                <a
                  className="mx-4 px-4 py-3 bg-gray-300 text-gray-900 text-xs md:text-sm font-semibold rounded hover:bg-gray-400"
                  href="/"
                >
                  Learn More
                </a>
              </div>
          </div>
</div>

);
};

export default Informacion;


