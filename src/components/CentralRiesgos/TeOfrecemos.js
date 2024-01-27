import Protestos from 'assets/img/Protestos.png'

export default function TeOfrecemos() {
    return (
      
      <div className="relative overflow-hidden bg-white">
   
        <div className="container mx-auto md:px-18 bg-gray-500">

        <section className="mb-10 text-center bg-red-500">
            <h2 className="mb-10 mt-10 text-3xl font-bold text-azuls">Te Ofrecemos</h2>

            <div class="grid-cols-1 sm:grid md:grid-cols-3 gap-6 md:gap-5">
                    <div
                        class="mx-12 md:mx-0 mt-0 flex flex-col rounded-lg bg-azuls shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0 ">
                        <a href="#!">
                        <img
                            class="rounded-t-lg"
                            src={Protestos}
                            alt="Hollywood Sign on The Hill" />
                        </a>
                        <div class="p-6">
                        <h5
                            class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                            Regulación de protestos
                        </h5>
                        <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                            This is a longer card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit
                            longer.
                        </p>
                        </div>
                    </div>
                    <div
                        class="mx-12 md:mx-0 mt-0 flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
                        <a href="#!">
                        <img
                            class="rounded-t-lg"
                            src={Protestos}
                            alt="Palm Springs Road" />
                        </a>
                        <div class="p-6">
                        <h5
                            class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                            Consultas nacionales sobre calificación financiera del cliente
                        </h5>
                        <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                            This is a longer card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit
                            longer.
                        </p>
                        </div>
                    </div>
                    <div
                        class="mx-12 md:mx-0 mt-0 flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
                        <a href="#!">
                        <img
                            class="rounded-t-lg"
                            src={Protestos}
                            alt="Skyscrapers" />
                        </a>
                        <div class="p-6">
                        <h5
                            class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                            Registro de moras
                        </h5>
                        <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                            This is a longer card with supporting text below as a natural
                            lead-in to additional content.
                        </p>
                        </div>
                    </div>
                    
                    </div>


  </section>
  
</div>
</div>

    );
  }