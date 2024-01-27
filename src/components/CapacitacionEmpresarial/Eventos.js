import Evento1 from 'assets/img/Eve1.png'
import Evento2 from 'assets/img/Eve2.png'
export default function Eventos() {
    return (
      <div className="relative overflow-hidden bg-plomo">
        <div class="container my-10  mx-auto md:px-0">
         
          <section class="mb-10 text-center lg:text-left">
          <h2 className="mb-10 mt-10 text-3xl font-bold text-azuls text-center">Próximos Eventos</h2>
            <style>
              @media (min-width: 992px) (
                .rotate-lg-6 (
                transform: rotate(6deg);
                )
              )
            </style>
        
            <div class="py-0 md:px-0">
              <div class="container mx-auto xl:px-0     grid lg:grid-cols-2 lg:gap-x-10">


                <div class=" grid items-center lg:grid-cols-2 py-6">

                  <div class="mb-12 mr-10 md:mt-12 lg:mt-10 lg:mb-0">
                    <div
                      class="relative z-[1] block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-4 py-2 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[25px] dark:bg-[hsla(0,0%,5%,0.55)] dark:shadow-black/20 md:px-4 lg:-mr-14">
                      <h2 class="mb-4 text-3xl font-bold font-pop text-azuls">Creative Marketing Agency</h2>
                      <p class="mb-4 text-neutral-500 text-justify dark:text-neutral-300">
                      Nos complace invitarte a participar en nuestra conferencia empresarial en línea, donde la excelencia, la innovación y la conexión se fusionan en un evento único. 
                      </p>
        
                      <div class="grid gap-x-6 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 items-center">
                        
                        <div class="mb-4">
                          <p class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                              stroke="currentColor" class="mr-3 h-5 w-5">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>Fecha: 23/01/2024
                          </p>
                        </div>
        
                        <div class="mb-4">
                          <p class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                              stroke="currentColor" class="mr-3 h-5 w-5">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>Hora: 10:00 pm
                          </p>
                        </div>
        
                        
                      </div>

                      <a
                        href="#"
                        className="mt-10 inline-block rounded-xl border border-transparent bg-red-600 py-3 px-4 text-center font-medium text-white hover:bg-rojoficial"
                      >
                        Registrate Ahora
                      </a>
                    </div>
                  </div>

                  <div class="md:mb-12 lg:mb-0">
                  <img
                    src={Evento1}
                    className="w-full h-full object-cover"
                   s alt="Imagen de preguntas"
                />
                  </div>
                </div>

















                <div class=" grid items-center lg:grid-cols-2">

                  <div class="mb-12 mr-10 md:mt-12 lg:mt-10 lg:mb-0 ">
                    <div
                      class="relative z-[1] block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-4 py-2 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[25px] dark:bg-[hsla(0,0%,5%,0.55)] dark:shadow-black/20 md:px-4 lg:-mr-14">
                      <h2 class="mb-4  text-3xl font-bold font-pop text-azuls">Eventos</h2>
                      <p class="mb-4 text-neutral-500 font-Rale text-justify dark:text-neutral-300">
                      Un evento que redefine los límites del marketing creativo y la innovación empresarial.

                      </p>
        
                      <div class="grid gap-x-6 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                        <div class="mb-4">
                          <p class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                              stroke="currentColor" class="mr-2 h-5 w-5">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>Fecha: 23/01/2024
                            24/7
                          </p>
                        </div>
        
                        <div class="mb-4">
                          <p class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                              stroke="currentColor" class="mr-2 h-5 w-5">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>Hora: 9:00 pm
                          </p>
                        </div>
        
                      
                      
        
                        
                      </div>
                      <a
                        href="#"
                        className="mt-10 inline-block rounded-xl border border-transparent bg-red-600 py-3 px-4 text-center font-medium text-white hover:bg-rojoficial"
                      >
                        Registrate Ahora
                      </a>
                    </div>
                  </div>
                  

                  <div class="md:mb-12 lg:mb-0">
                  <img
                    src={Evento2}
                    className="w-full h-full object-cover"
                   s alt="Imagen de preguntas"
                />
                  </div>
                </div>


              </div>
            </div>
          </section>
          
        </div>
        </div>
        
    );
  }