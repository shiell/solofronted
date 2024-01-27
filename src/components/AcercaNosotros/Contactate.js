import Logo_Telefono from 'assets/img/Telefono.svg'
import Logo_Localizacion from 'assets/img/Localizacion.svg'
import Logo_Email from 'assets/img/Email.svg'



export default function Conectate() {
    return (
        <div className="  bg-white   ">

            <h1 className="mt-16 font text-2xl lg:text-3xl font-bold tracking-tight text-azuls  text-center">
                Conéctate con Nosotros                
            </h1>
            <h2 className="font text-2xl lg:text-3xl font-bold tracking-tight text-rojoficial  text-center">
                Tu Opinión Nos Importa                
            </h2>

            <div class=" mt-16 lg:w-1/2    lg:gap-6 flex items-center  mx-auto my-auto ">
                <div className="   grid grid-cols-3  gap-3 lg:gap-x-8   mx-auto">

                  <div class="w-8 h-8 md:w-72  wmd:h-52 lg:w-40 lg:h-24 2xl:w-full  flex items-center justify-center ">
                      <img
                          alt="gallery"
                          class="w-20 h-20 object-cover  object-center "
                          src={Logo_Telefono}/>
                  </div>  
                  <div class=" w-44 h-44 md:w-72 md:h-52 lg:w-40 lg:h-24 2xl:w-full  flex items-center justify-center ">
                      <img
                          alt="gallery"
                          class="w-20 h-20 object-cover object-center "
                          src={Logo_Localizacion}/>
                  </div>  
                  <div class=" w-44 h-44 md:w-72 md:h-52 lg:w-40 lg:h-24 2xl:w-full  flex items-center justify-center ">
                      <img
                          alt="gallery"
                          class="w-20 h-20 object-cover object-center "
                          src={Logo_Email}/>
                  </div>   
                  
                              
                  <div class=" w-44 h-44 md:w-72 md:h-52 lg:w-48 lg:h-32 2xl:w-full flex items-center justify-center  overflow-hidden border-r-4 border-textoplomo">
                      <p>+51 999999999</p>
                  </div>
                  <div class="w-44 h-44 md:w-72 md:h-52 lg:w-48 lg:h-32 2xl:w-full flex items-center justify-center  text-center overflow-hidden  border-r-4 border-textoplomo">
                        <p>Av.Costanera Sur con Jr los Incas</p>
                  </div>
                  <div class="w-44 h-44 md:w-72 md:h-52 lg:w-40 lg:h-32 2xl:w-full flex items-center justify-center  ">
                        <p>CentraldeRiesgos@gmail.com</p>
                  </div>

                </div>
 


            </div>
              
         </div>
    );
  }