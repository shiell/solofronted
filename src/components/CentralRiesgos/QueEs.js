import LogoCheck from 'assets/img/check.svg'

export default function QueEs() {
    return (
        <div className=" sm:px-10 md:px-16  lg:flex lg:px-20 space-x-5 border border-yellow-500">
            {/*Div de la imagenes */}
              <div class=" mt-16 lg:w-1/2    lg:gap-2 flex items-center">
                <div className="grid grid-cols-2  gap-3 lg:gap-6 overflow-hidden mx-auto">

                  <div class=" w-44 h-44 md:w-72 md:h-52 lg:w-60 lg:h-60 2xl:w-full  flex items-center justify-center rounded-full overflow-hidden">
                      <img
                          alt="gallery"
                          class="w-full h-full object-cover object-center "
                          src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp" />
                  </div>                  
                  <div class=" w-44 h-44 md:w-72 md:h-52 lg:w-60 lg:h-60 2xl:w-full flex items-center justify-center rounded-lg overflow-hidden ">
                      <img
                        alt="gallery"
                        class="w-full h-full object-cover object-center"
                        src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp" />
                  </div>
                  <div class="w-44 h-44 md:w-72 md:h-52 lg:w-60 lg:h-60 2xl:w-full flex items-center justify-center rounded-lg overflow-hidden ">
                      <img
                        alt="gallery"
                        class="w-full h-full object-cover object-center"
                        src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp" />
                  </div>
                  <div class="w-44 h-44 md:w-72 md:h-52 lg:w-60 lg:h-60 2xl:w-full flex items-center justify-center rounded-r-full overflow-hidden">
                      <img
                        alt="gallery"
                        class="w-full h-full object-cover object-center"
                        src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp" />
                  </div>

                </div>
              </div>

            {/*Div del texto */}
              <div className="  mt-16  lg:w-1/2"> {/* Texto*/}
                <h1 className="font text-2xl lg:text-4xl font-bold tracking-tight text-rojoficial ">
                ¿Qué es el servicio de centro de capacitación empresarial?                </h1>
                <p className="mt-5  text-sm lg:text-base font-semibold text-azuls">
                En el centro de capacitación empresarial, te brindamos la valiosa oportunidad de desarrollarte en el entorno laboral actual. Nuestros programas están cuidadosamente diseñados para potenciar tus habilidades y conocimientos en áreas críticas como comunicación efectiva, liderazgo proactivo, resolución ágil de problemas y colaboración en equipo.                </p>
                
                <h2 className="mt-5 2xl:mt-10 text-xl lg:text-3xl  text-rojoficial">
                  <b>¿En que me beneficia la bolsa de valores?</b></h2>
                  <div class="mt-5 px-5 text-sm lg:text-base  text-azuls font-semibold ">
                    <ul>
                      <li class="flex items-center mb-3 2xl:mb-5">
                        <img 
                            src={LogoCheck}
                            style={{
                                margin: '0px 20px 0 10px'
                            }
                            }
                            />
                        Accesos a multiples oportunidades de empleo
                      </li>
                      <li class="flex items-center mb-3 2xl:mb-5">
                        <img 
                            src={LogoCheck}
                            style={{
                                margin: '0px 20px 0 10px'
                            }
                            }
                            />
                        Ahorro de tiempo buscando trabajo 
                      </li>
                      <li class="flex items-center mb-3 2xl:mb-5">
                        <img 
                            src={LogoCheck}
                            style={{
                                margin: '0px 20px 0 10px'
                            }
                            }
                            />
                        Obtención de información del mercado laboral 
                      </li>
                      <li class="flex items-center mb-3">
                        <img 
                            src={LogoCheck}
                            style={{
                                margin: '0px 20px 0 10px'
                            }
                            }
                            />
                        Alertas de empleos 
                      </li>
                     
                      
                    </ul>
                  </div>
                
                <a
                  href="#"
                  className="mt-5 2xl:mt-10 inline-block rounded-md border border-transparent bg-red-600 py-3 px-4 text-center font-medium text-white hover:bg-rojoficial"
                >
                  Shop Collection
                </a>
              </div>

         </div>
    );
  }