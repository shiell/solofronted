import React, { useRef, useEffect, useState, useMemo } from "react";
import CaseCard from "components/Home/CaseCard";
import Slider from "react-slick"; 
import { useMediaQuery } from "react-responsive";
 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


export default function CardBeneficios() {

  const posts = useMemo(() => [
    {
      id:"12",
      title: 'Capacitación y Consultoría Empresarial',
      href: '/',
      description:'Consultoría empresarial para optimizar procesos internos, mejorar la eficiencia operativa y alcanzar los objetivos comerciales. ',
      imageUrl:
        'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

    },

    {
      id:"13",
      title: 'Publicidad de Ambientes',
      href: '/AlquilerAmbientes',
      description:
        'Difusión de ambientes, para eventos exclusivos',
      imageUrl:
        'https://images.unsplash.com/photo-1562235357-57c00cf7c441?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
     
    },

    {
      id:"14",
      title: 'Acceso y Publicidad en la Bolsa de trabajo',
      href: '/BolsaTrabajo',
      description:
        'Posibilidad de publicar ofertas laborales de forma gratuita o más económica en la Bolsa de Trabajo.',
      imageUrl:
        'https://img.freepik.com/vector-gratis/buscando-iconos-trabajo_98292-1238.jpg?w=740&t=st=1704682966~exp=1704683566~hmac=efdc8f53778d50834dda9b44cb198a4bc82bf9da71402510b94406fdee95185d',
    },
    
    {
      id:"15",
      title: 'Eventos Empresariales',
      href: '/',
      description:
        'Acceso a actividades de networking entre los socios para promover sinergias.',
      imageUrl:
        'https://images.unsplash.com/photo-1594122230689-45899d9e6f69?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

    },

    {
      id:"16",
      title: 'Acceso Gratuito al central de riesgos',
      href: '/CentralRiesgos',
      description:
        'Acceso gratuito o con descuento a la Central de Riesgos para consultar reportes crediticios de otras empresas.',
      imageUrl:
        'https://plus.unsplash.com/premium_photo-1661488575004-2363aca87837?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
     
    },

    {
      id:"17",
      title: 'Asesoría en Comercio Exterior',
      href: '/ComercioExterior',
      description:
        'Asesoría y apoyo en trámites de exportaciones e importaciones.',
      imageUrl:
        'https://images.unsplash.com/photo-1524522173746-f628baad3644?q=80&w=1862&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
     
    },

    {
      id:"18",
      title: 'Asesoría en Comercio Exterior',
      href: '/ComercioExterior',
      description:
        'Asesoría y apoyo en trámites de exportaciones e importaciones.',
      imageUrl:
        'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
     
    },


   


    ], []);

    const isLargeScreen = useMediaQuery({ minWidth: 1124 });
    const slidesToShow = isLargeScreen ? 2 : 1;
  
    const breakpoints = [
      { breakpoint: 640, settings: { slidesToShow: 1, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
      { breakpoint: 1020, settings: { slidesToShow: 1, slidesToScroll: 1 } },
      { breakpoint: 1100, settings: { slidesToShow: 1, slidesToScroll: 1 } },
      { breakpoint: 1270, settings: { slidesToShow: 2, slidesToScroll: 2 } },
      { breakpoint: 1520, settings: { slidesToShow: 2, slidesToScroll: 2 } },
      { breakpoint: 1900, settings: { slidesToShow: 2, slidesToScroll: 2 } },
    ];
  
    const carouselRef = useRef(null);
    const [autoplay, setAutoplay] = useState(true);
    const [currentSlide, setCurrentSlide] = useState(0);
  
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      autoplay: autoplay,
      autoplaySpeed: 5000,
      slidesToShow: slidesToShow,
      slidesToScroll: 1,
      responsive: breakpoints,
    };
  
    useEffect(() => {
      const interval = setInterval(() => {
        setAutoplay(true);
        const totalItems = posts.length;
        const nextIndex = (currentSlide + 1) % totalItems;
        setCurrentSlide(nextIndex);
        carouselRef.current.slickGoTo(nextIndex);
      }, 5000);
  
      return () => clearInterval(interval);
    }, [posts]);
  
    const handleMouseEnter = () => {
      setAutoplay(false);
    };
  
    const handleMouseLeave = () => {
      setAutoplay(true);
    };
  
    return ( 
      <div className="relative max-w-[1970px] overflow-hidden text-azuls">
          <div className="py-6 md:py-8 xl:py-14 border-blue-500 md:border-b-4 md:border-t-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-azuls text-center px-6 md:px-10">
              Descubre Nuestros Servicios Integrados para el Éxito Empresarial
            </h2>
          </div>

            <div className="relative my-14 bg-gray-white pt-12 pb-8 bg-[hsla(0,0%,100%,0.7)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[30px]">
              <Slider
                ref={carouselRef}
                {...settings}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {posts.map((post, index) => (
                  <CaseCard key={post.id} index={index} data={post} />
                ))}
              </Slider>

              <div className="flex justify-center mt-8">
                {posts.map((_, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      setCurrentSlide(index);
                      carouselRef.current.slickGoTo(index);
                    }}
                    className={`w-4 h-4 mx-2 cursor-pointer rounded-full ${
                      currentSlide === index ? " bg-sky-400" : "bg-gray-300"
                    }`}
                  ></div>
              ))}
            </div>
        </div>
      </div>

    );
  }