export default function QuienesSomos() {
    return (
        <section class="relative isolate overflow-hidden bg-white px-6 py-6 lg:py-20 lg:px-24">
        <div class="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20"></div>
        <div class="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-gray-100 shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>

        <div class="mx-auto my-auto max-w-2xl lg:max-w-4xl block rounded-lg  bg-[hsla(0,0%,100%,0.7)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[30px] dark:bg-[hsla(0,0%,5%,0.55)] dark:shadow-black/20 md:py-16 md:px-12 border">

            <blockquote class="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
            <h1 class="mb-10 text-3xl font-bold font-pop tracking-tight md:text-3xl xl:text-4xl  text-azuls">
                    Quiénes Somos <span class="text-rojoficial dark:text-rojoficial capitalize">y qué hacemos</span>
                    </h1>
              <p className="text-base lg:text-lg font-rale font-normal text-gray-600  text-justify">Bienvenido a la Cámara Internacional de Empresarios y Emprendedores (CIEE), un punto de encuentro global para visionarios empresariales y emprendedores comprometidos con el desarrollo económico y la colaboración internacional. En la CIEE, creemos en la fuerza transformadora de la innovación y la colaboración empresarial para construir un mundo más próspero y sostenible.</p>
            </blockquote>
            <figcaption class="mt-10">
              <img class="mx-auto h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
              <div class="mt-4 flex items-center justify-center space-x-3 text-base">
                <div class="font-semibold text-gray-900">Ciee</div>
                <svg viewBox="0 0 2 2" width="3" height="3" aria-hidden="true" class="fill-gray-900">
                  <circle cx="1" cy="1" r="1" />
                </svg>
                <div class="text-gray-600 ">Empresarial</div>
              </div>
            </figcaption>
        </div>
        
       </section>
    )
  }