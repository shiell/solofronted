import React, { useEffect, useRef } from 'react';
import 'animate.css';

export default function Fotos() {
  const capacitacionRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate__animated', 'animate__slideInDown');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    if (capacitacionRef.current) {
      observer.observe(capacitacionRef.current);
    }

    return () => {
      if (capacitacionRef.current) {
        observer.unobserve(capacitacionRef.current);
      }
    };
  }, []);

  return (
    <section class="pb-10 bg-w sm:pb-16 lg:pb-24 z-10 relative overflow-hidden">
      <div class=" ">
        <div ref={capacitacionRef} className="mx-6 lg:mx-24 py-8 mt-10 mb-16 bg-[hsla(0,0%,100%,0.7)] px-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[30px]">
            <div class="absolute inset-y-0 right-1/2 -z-10 w-[200%] origin-bottom-left skew-x-[-70deg] bg-plomo shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>
            <h2 class="text-azuls text-4xl font-bold capitalize w-full">
                Explora Nuestro Álbum de Éxitos Empresariales
            </h2>
            <p class=" mt-2 text-xl font-semibold text-rojoficial">
                Imágenes Inspiradoras de Eventos y Capacitaciones"
            </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:mx-24">
            <a href="/CapacitacionEmpresarial" class=" shadow-2xl relative ">
                <div class="  h-full relative shadow-2xl overflow-hidden group ">
                    <div class=" absolute -bottom-10 group-hover:top-0 left-0 w-full h-full group-hover:bg-black hover:opacity-60 transition-all ease-in-out duration-500  ">
                        <div class="w-full h-full   p-5   relative">
                            <div class="absolute bottom-0 group-hover:bottom-24 text-white text-left   transition-all ease-in-out duration-500 ">
                                <h2 class="text-2xl font-bold  text-white mb-0 pb-1">Conociendo mercados Internacionales</h2>
                                
                            </div>
                        </div>
                    </div>
                    <img src="https://aulavirtual.pj.gob.pe/wp-content/uploads/2018/11/DSC03764.jpg" class="w-full z-0  h-full  object-cover example "/>
                </div>
            </a>

            <a href="/CapacitacionEmpresarial" class=" shadow-2xl relative ">
                <div class="  h-full relative shadow-2xl overflow-hidden group ">
                    <div class=" absolute -bottom-10 group-hover:top-0 left-0 w-full h-full group-hover:bg-black hover:opacity-60 transition-all ease-in-out duration-500  ">
                        <div class="w-full h-full   p-5   relative">
                            <div class="absolute bottom-0 group-hover:bottom-24 text-white  text-left   transition-all ease-in-out duration-500 ">
                                <h2 class="text-2xl font-bold  text-white mb-0 pb-1">Capacitación de cumplimiento normativo</h2>
                                
                            </div>
                        </div>
                    </div>
                    <img src="https://portal.munipuno.gob.pe/sites/default/files/2023-06/Captura%20de%20pantalla%202023-06-15%20085156.png" class="w-full z-0  h-full    object-fill example "/>
                </div>
            </a>

            <a href="#" class=" shadow-2xl relative ">
                <div class="  h-full relative shadow-2xl shadow-azuls overflow-hidden group ">
                    <div class=" absolute -bottom-10 group-hover:top-0 left-0 w-full h-full group-hover:bg-black hover:opacity-60 transition-all ease-in-out duration-500  ">
                        <div class="w-full h-full   p-5   relative">
                            <div class="absolute bottom-0 group-hover:bottom-24 text-white  text-left   transition-all ease-in-out duration-500 ">
                                <h2 class="text-2xl font-bold  text-white mb-0 pb-1">Capacitación de normas empresariales</h2>
                                
                            </div>
                        </div>
                    </div>
                    <img src="https://portal.munipuno.gob.pe/sites/default/files/2022-09/WhatsApp%20Image%202022-09-08%20at%203.51.02%20PM.jpeg" class="w-full z-0  h-full    object-fill example "/>
                </div>
            </a> 

            <a href="#" class=" shadow-2xl relative ">
                <div class="  h-full relative shadow-2xl shadow-azuls overflow-hidden group ">
                    <div class=" absolute -bottom-10 group-hover:top-0 left-0 w-full h-full group-hover:bg-black hover:opacity-60 transition-all ease-in-out duration-500  ">
                        <div class="w-full h-full   p-5   relative">
                            <div class="absolute bottom-0 group-hover:bottom-24 text-white  text-left   transition-all ease-in-out duration-500 ">
                                <h2 class="text-2xl font-bold  text-white mb-0 pb-1">Cumplimiento normativo</h2>
                            </div>
                        </div>
                    </div>
                    <img src="https://radioondaazul.com/wp-content/uploads/2023/08/IX-asamblea-del-Comite-Colegiado.jpg" class="w-full z-0  h-full    object-fill example "/>
                </div>
            </a>

            <a href="#" class=" shadow-2xl relative ">
                <div class="  h-full relative shadow-2xl shadow-azuls overflow-hidden group ">
                    <div class=" absolute -bottom-10 group-hover:top-0 left-0 w-full h-full group-hover:bg-black hover:opacity-60 transition-all ease-in-out duration-500  ">
                        <div class="w-full h-full   p-5   relative">
                            <div class="absolute bottom-0 group-hover:bottom-24 text-white  text-left   transition-all ease-in-out duration-500 ">
                                <h2 class="text-2xl font-bold  text-white mb-0 pb-1">Importación y exportacion de productos</h2>
                                
                            </div>
                        </div>
                    </div>
                    <img src="https://www.perucamaras.org.pe/images/eventos/evi84.jpg" class="w-full z-0  h-full    object-fill example "/>
                </div>
            </a>

            <a href="#" class=" shadow-2xl relative ">
                <div class="  h-full relative shadow-2xl shadow-azuls overflow-hidden group ">
                    <div class=" absolute -bottom-10 group-hover:top-0 left-0 w-full h-full group-hover:bg-black hover:opacity-60 transition-all ease-in-out duration-500  ">
                        <div class="w-full h-full   p-5   relative">
                            <div class="absolute bottom-0 group-hover:bottom-24 text-white  text-left   transition-all ease-in-out duration-500 ">
                                <h2 class="text-2xl font-bold  text-white mb-0 pb-1">Travsesía Comercial</h2>
                                
                            </div>
                        </div>
                    </div>
                    <img src="https://dircetur.regionpuno.gob.pe/wp-content/uploads/2023/04/Presentamos-1.png" class="w-full z-0  h-full    object-fill example "/>
                </div>
            </a>


        </div>

</div></section>

        )
    }


    //style={{ backgroundImage: 'linear-gradient(90deg, #003A54 25%, #115474 48%, #2194b4 71%, #4bc8c6 100%)' }}