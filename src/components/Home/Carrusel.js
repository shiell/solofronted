import React, { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import { ChevronLeft, ChevronRight } from "react-feather";

//importando imagenes para el carousel
import Img_comercioExterior from "assets/img/services/home/ComercioExterior.jpg"
import Img_CapacitacionEmpresarial from "assets/img/services/home/CapacitacionEmpresarial.png"
import Img_AlquilerAmbientes from "assets/img/services/home/AlquilerAmbientes.png"
import Img_CentralRiesgos from "assets/img/services/home/CentralRiesgos.png"
import Img_BolsaTrabajo from "assets/img/services/home/BolsaTrabajo.png"


import Snowfall from 'react-snowfall';

export default function Carousel() {
  const autoSlide = false;
  const autoSlideInterval = 12000; //TODO: tiempo de cambio entre imagenes

  //*array de imagenes, texto y descripcion que se van a mostrar en el carusel 
  const slides = [
    {
      image:Img_CapacitacionEmpresarial,
      text: "Centro de Capacitacion Empresarial",
      description: '"Desarrolla tus habilidades y crece profesionalmente"',
      buttonUrl: "https://web.facebook.com/profile.php?id=100011395595669&locale=es_LA",
    },
    {
      image:Img_AlquilerAmbientes,
      text: "Alquiler de Ambientes",
      description: '"Encuentra el espacio perfecto para tu negocio"',
      buttonUrl: "https://web.facebook.com/profile.php?id=100011395595669&locale=es_LA",
    },
    {
      image: Img_CentralRiesgos,
      text: "Central de Riesgos",
      description: '"Protege tu negocio de riesgos financieros"',
      buttonUrl: "URL_del_primer_boton",
    },
    {
      image: Img_BolsaTrabajo,
      text: "Bolsa de Trabajo",
      description: '"Encuentra la oportunidad laboral que mejor se ajuste a tus habilidades y aspiraciones profesionales."',
      buttonUrl: "URL_del_primer_boton",
    },
    {
      image: Img_comercioExterior,
      text: "Comercio Exterior",
      description: '"Expande tu negocio a nuevos mercados"',
      buttonUrl: "URL_del_primer_boton",
    },
  ];

  //tamaño de pantallas
  const screenSizes = {
    sm: "640px",
    md: "768px",
    lg: "1090px",
    xl: "1350px",
    "2Xl": "1540px",
    "3xl": "1720px",
    "4xl": "1856px",
  };

  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (autoSlide) return;

    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);


  // Verificar el tamaño de la pantalla y aplicar la lógica para calcular la altura del carrusel
  const isLgScreen = window.innerWidth > parseInt(screenSizes.lg);
  const carouselHeight = isLgScreen ? window.innerHeight - 128 : undefined;

// Obtener el ancho y la altura de la pantalla

  //  // Obtenemos el tamaño de la pantalla
  //  const width = window.innerWidth;
  //  const height = window.innerHeight;

  //  // Creamos un mensaje de alerta
  //  const message = `
  //    El tamaño de la pantalla es:
  //    Ancho: ${width} píxeles
  //    Alto: ${height} píxeles
  //  `;

  //  // Mostramos el mensaje de alerta
  //  alert(message);



  const text = (
      
      <div className=" flex flex-col justify-center xl:pl-60 pl-10 md:pl-20 lg:pl-40 text-white w-full absolute z-20  h-full ">
        <h1 className="relative text-xl xl:text-5xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white  ">
          {slides[curr] && (
            <Typewriter
              words={[slides[curr].text]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={4000}
            />
          )}
        </h1>
        <p className=" mt-1 lg:mt-3 text-xs lg:text-lg xl:text-xl leading-1 text-gray-100 ">
          {slides[curr] && slides[curr].description}
        </p>
        
        <a
          href={slides[curr] && slides[curr].buttonUrl}
          className=" text-white mt-5 bg-rojoficial text-center xl:w-32 w-20 py-2 text-xs lg:text-base rounded-lg z-20"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver mas
        </a>
        {/*<Snowfall quantity={5} />*/}
        <div className="absolute inset-0 flex items-center justify-between p-1 md:p-4 lg:p-4  z-10 opacity-50 ">
          <button
            onClick={prev}
            className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
          >
            <ChevronLeft className="lg:w-10 lg:h-10 w-4 h-4"  />
          </button>

          <button
            onClick={next}
            className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
          >
            <ChevronRight className="lg:w-10 lg:h-10 w-4 h-4" />
          </button>
      </div>

      </div>
    
  );

  return (
    <div className=" relative  overflow-hidden"
    style={{ height: isLgScreen ? `${carouselHeight}px` : undefined }}
    >
            
      {text}
        

      <div
        className={`flex transition ease-out `}
        style={{
          transform: `translateX(-${curr * 100}%)`,
        }}
      >
        
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide.image}
            className="w-full"
            style={{
              filter: `brightness(45%)`,
              background: "black",
            }}
            alt={`Slide ${index}`}
          />
        ))}
      </div>







    </div>
  );
}
