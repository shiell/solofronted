import CapacitacionM from 'assets/img/CapacitacionM.png'

export default function QueEs() {
    return (
      <div className="relative overflow-hidden bg-white">
        <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-5 lg:pb-5">
          <div className="relative mx-auto max-w-8xl px-4 sm:static sm:px-6 lg:px-8 mr-20 ml-20">
            <div className="lg:grid lg:grid-cols-2 lg:gap-x-1"> {/* Establecido espacio de 20px entre columnas */}
             
             
            <div>
      <div className=" ">
        <div className="zoom absolute overflow-hidden rounded-3xl bg-cover bg-no-repeat shadow-lg dark:shadow-black/20 bg-[50%]">
          <img  src={CapacitacionM}
          className="w-250  align-middle transition duration-300 ease-linear"
           width={280}
           height={220}
            />
        </div>
        <div className=" zoom absolute overflow-hidden left-80 top-40 rounded-3xl bg-cover bg-no-repeat shadow-lg dark:shadow-black/20 bg-[50%]">
          <img src="https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Square/1.webp" 
               className="w-250 align-middle transition duration-300 ease-linear"
               width={280}
               height={220}
           />
          
        </div>
      </div>
    </div>



              <div className=" mr-0"> {/* Establecido margen izquierdo de 40px */}
                <h1 className="mt-16 text-4xl font-bold font-pop tracking-tight text-rojoficial sm:text-4xl text-justify ">
                Conoce más sobre el servicio de centro de capacitación empresarial                </h1>
                <p className="mt-10 text-base font-pop text-justify text-gray-500">
                En el centro de capacitación empresarial, te brindamos la valiosa oportunidad de desarrollarte en el entorno laboral actual. Nuestros programas están cuidadosamente diseñados para potenciar tus habilidades y conocimientos en áreas críticas como comunicación efectiva, liderazgo proactivo, resolución ágil de problemas y colaboración en equipo.                </p>
                <a
                  href="#"
                  className="mt-10 inline-block rounded-xl border border-transparent bg-red-600 py-3 px-4 text-center font-medium text-white hover:bg-rojoficial"
                >
                  Consultas
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }