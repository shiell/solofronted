import React, { useEffect, useRef } from 'react';

const LoQueValoramos = () => {

  const participacionRef = useRef(null);
  const comunicacionRef = useRef(null);
  
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };
  
    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === participacionRef.current) {
            entry.target.classList.add('animate__animated', 'animate__slideInDown');
          } else if (entry.target === comunicacionRef.current) {
            entry.target.classList.add('animate__animated', 'animate__slideInLeft');
          }
  
          observer.unobserve(entry.target);
        }
      });
    };
  
    const observer = new IntersectionObserver(callback, options);
  
    if (participacionRef.current) {
      observer.observe(participacionRef.current);
    }
  
    if (comunicacionRef.current) {
      observer.observe(comunicacionRef.current);
    }
  
    return () => {
      if (participacionRef.current) {
        observer.unobserve(participacionRef.current);
      }
  
      if (comunicacionRef.current) {
        observer.unobserve(comunicacionRef.current);
      }
    };
  }, []);


  return (
    <div className="bg-white py-20 w-full overflow-hidden">
      <div ref={participacionRef} className="container mx-4 sm:mx-10 md:mx-20 lg:mx-28">
        
        
        <div className="text-center w-full pb-8 sm:pb-16">
          <h3 className="uppercase text-rojoficial font-semibold text-lg sm:text-lg lg:text-xl">
            ¿Cuáles son nuestras métricas?
          </h3>
          <p className="lg:text-4xl text-2xl text-azuls font-bold pt-4 xl:w-1/2 mx-auto">
            Métricas que Impulsan la Excelencia Empresarial 
          </p>
        </div>
        
        <div ref={comunicacionRef} className="flex flex-col w-full xl:flex-row xl:mt-8 mb-12 xl:px-0 px-4">
          {metricaCard("Participación Empresarial", "Destacamos la colaboración activa y la interacción constante entre empresarios y emprendedores, creando un espacio donde las ideas fluyen, las experiencias se comparten y el conocimiento colectivo impulsa el crecimiento. Creemos en construir juntos el camino hacia el éxito")}
          {metricaCard("Comunicación Efectiva", "Nos comprometemos a facilitar canales de comunicación abiertos y transparentes entre nuestros miembros. Ya sea a través de eventos, plataformas digitales o sesiones personalizadas, nos esforzamos por cultivar un ambiente donde las ideas fluyan sin restricciones")}
          {metricaCard("Apoyo Continuo", "Estamos dedicados a proporcionar las herramientas y el respaldo necesarios para que alcances tus metas empresariales. Creemos en un apoyo constante que trasciende las barreras, permitiéndote enfrentar desafíos con confianza y avanzar hacia el éxito sostenible.")}
        </div>
      </div>
    </div>
  );
};

const metricaCard = (title, description) => {
  return (
    <div className="mb-8 xl:w-1/3 xl:mb-0 xl:pr-0 text-justify">
      <div className="bg-[hsla(0,0%,100%,0.7)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[30px] mx-2">
        <div className="flex flex-wrap mb-4">
          <div className="w-1/6 items-center mx-auto">
            {/* Icon SVG here */}
          </div>
          <div className="w-5/6">
            <h4 className="text-black items-center xl:text-2xl font-semibold">{title}</h4>
          </div>
        </div>
        <p className="px-1 text-sm sm:text-base">
          <b className="font-normal text-azuls text-justify">{description}</b>
        </p>
      </div>
    </div>
  );
};

export default LoQueValoramos;
