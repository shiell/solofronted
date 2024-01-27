import React, { useEffect, useRef } from 'react';
import 'animate.css';

export default function Fotos() {
  const capacitacionRef = useRef(null);
  const bolsaTrabajoRef = useRef(null);
  
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };
  
    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === capacitacionRef.current) {
            entry.target.classList.add('animate__animated', 'animate__slideInDown');
          } else if (entry.target === bolsaTrabajoRef.current) {
            entry.target.classList.add('animate__animated', 'animate__slideInRight'); // Cambié 'animate__slideInLeft' a 'animate__slideInRight'
          }
  
          observer.unobserve(entry.target);
        }
      });
    };
  
    const observer = new IntersectionObserver(callback, options);
  
    if (capacitacionRef.current) {
      observer.observe(capacitacionRef.current);
    }
  
    if (bolsaTrabajoRef.current) {
      observer.observe(bolsaTrabajoRef.current);
    }
  
    return () => {
      if (capacitacionRef.current) {
        observer.unobserve(capacitacionRef.current);
      }
  
      if (bolsaTrabajoRef.current) {
        observer.unobserve(bolsaTrabajoRef.current);
      }
    };
  }, []);
  
  
  return (
    <section
      className="relative flex flex-col w-full h-[600px] xl:h-[710px] bg-cover bg-fixed bg-center flex justify-center items-center py-12 "
      style={{
        backgroundImage: 'url(https://cdn.pixabay.com/photo/2018/03/10/12/00/teamwork-3213924_1280.jpg)',
      }}
    >
      <h1 className="text-white text-5xl font-semibold mt-20 mb-10">
        This is Parallax Effect
      </h1>

      <div className="absolute inset-0 flex items-center justify-center text-white bg-azuls bg-opacity-40">
              <div className="bg-azuls flex flex-col md:flex-row px-5 md:px-8 lg:px-16 w-full space-y-6 md:space-y-0 md:space-x-10 items-center justify-center ">
                
              <div className="w-full md:w-2/6 flex justify-center" ref={capacitacionRef}>
                  <div className="relative w-full h-[300px] md:w-[400px] md:h-[400px] 3xl:w-[550px] 3xl:h-[400px] -my-12">
                      <img
                        src="https://cdn.pixabay.com/photo/2014/12/15/13/40/smartphone-569076_1280.jpg"
                        alt=""
                        className="w-full h-full object-cover object-center rounded-lg"
                      />
                  </div>
              </div>

              <div className="w-full md:w-4/6 flex items-center justify-center py-16 mb-12" ref={bolsaTrabajoRef}>
                <div className="pl-2">
                  <div className="flex">
                    <svg
                      className="h-12 w-12 text-white opacity-25"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                    >
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    <h2 className="mt-6 ml-2 text-3xl font-extrabold">
                      Conoce Nuestra Bolsa de Trabajo
                    </h2>
                  </div>
                  <p className="mt-6 text-base font-medium text-white text-justify">
                    Si has completado recientemente tu formación académica y te
                    encuentras en la búsqueda de oportunidades laborales, te
                    invitamos a postularte aquí. De igual manera, si eres un
                    profesional dedicado a la identificación de talento y estás en
                    la búsqueda de individuos excepcionales, te alentamos a publicar
                    en nuestra distinguida Bolsa de Valores.
                  </p>
                  <button className="bg-rojoficial text-white px-6 py-3 rounded-lg mt-6 font-bold">
                    Ir a Bolsa de Trabajo
                  </button>
                </div>
              </div>
        </div>
      </div>
    </section>
  );
};


