import LogoCheck from 'assets/img/check.svg';

export default function QueEs() {
  return (
    <div className="lg:flex flex-col-reverse lg:flex-row lg:space-x-5 lg:py-20 py-4 border-4 border-yellow-500">

      {/* Div de las images */}
      <div className="lg:w-1/2 border border-amber-950 flex items-center justify-center">
        <div className="flex flex-col items-end px-3">
          <img
            className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
            src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt=""
          />
          <img
            className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
            src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt=""
          />
        </div>
        <div className="px-3">
          <img
            className="object-cover w-40 h-40 rounded shadow-lg sm:hbg-green-500ray-50-64 xl:h-80 sm:w-full xl:w-80"
            src="https://images.pexels.com/photos/3182739/pexels-photo-3182739.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
            alt=""
          />
        </div>
      </div>

      {/* Div del texto */}
      <div className="lg:w-1/2 px-6 lg:pl-0 lg:pr-16  mt-6 lg:mt-0 border border-purple-500">
        {/* Text */}
        <h1 className="font text-2xl lg:text-4xl font-bold tracking-tight text-rojoficial">
          ¿Por qué elegir CIEE para alquilar ambientes?
        </h1>

        <p className="mt-5 text-sm lg:text-base font-semibold text-azuls">
          En el centro de capacitación empresarial, te brindamos la valiosa oportunidad de desarrollarte en el entorno laboral actual. Nuestros programas están cuidadosamente diseñados para potenciar tus habilidades y conocimientos en áreas críticas como comunicación efectiva, liderazgo proactivo, resolución ágil de problemas y colaboración en equipo.
        </p>

        <h2 className="mt-5 2xl:mt-10 text-xl lg:text-3xl text-rojoficial">
          <b>¿Por qué elegir CIEE para alquilar ambientes?</b>
        </h2>
        <div className="mt-5 px-5 text-sm lg:text-base text-azuls font-semibold">
          <ul>
            <li className="flex items-center mb-3 2xl:mb-5">
              <img
                alt=""
                src={LogoCheck}
                style={{
                  margin: '0px 20px 0 10px',
                }}
              />
              Porque tenemos la experiencia y los recursos para ayudarte a organizar un evento inolvidable.
            </li>
            <li className="flex items-center mb-3 2xl:mb-5">
              <img
                alt=""
                src={LogoCheck}
                style={{
                  margin: '0px 20px 0 10px',
                }}
              />
              Porque contamos con una amplia variedad de ambientes para todos los presupuestos y necesidades.
            </li>
            <li className="flex items-center mb-3 2xl:mb-5">
              <img
                alt=""
                src={LogoCheck}
                style={{
                  margin: '0px 20px 0 10px',
                }}
              />
              Porque ofrecemos servicios personalizados para que tu evento sea un éxito.
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
