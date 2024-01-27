import Logo_Telefono from 'assets/img/Telefono.svg';
import Logo_Localizacion from 'assets/img/Localizacion.svg';
import Logo_Email from 'assets/img/Email.svg';

export default function Conectate() {
  return (
    <div className="bg-white py-20 ">

      <h1 className=" font text-2xl lg:text-5xl font-bold tracking-tight text-azuls text-center">
        Conéctate con Nosotros
      </h1>
      <h2 className="font text-2xl lg:text-4xl font-bold tracking-tight text-rojoficial text-center">
        Tu Opinión Nos Importa
      </h2>


        <div className="mt-16 lg:mt-24 grid grid-cols-1 md:grid-cols-3 lg:mx-60">

            <div className="w-full md:w-72 lg:w-full flex flex-col items-center justify-center border-r-4 border-gray-600 h-44">
            <img
              alt="gallery"
              className="w-20 h-20 object-cover object-center"
              src={Logo_Telefono} />
            <hr className="border-textoplomo w-full my-2 lg:hidden" />
            <p className="mt-3 text-center lg:text-left">+51 999999999</p>
            </div>
           

            <div className="w-full md:w-72 lg:w-full flex flex-col items-center justify-center mt-6 md:mt-0 border-r-4 border-gray-600 h-44">
            <img
              alt="gallery"
              className="w-20 h-20 object-cover object-center"
              src={Logo_Localizacion} />
            <hr className="border-textoplomo w-full my-2 lg:hidden" />
            <p className="mt-3 text-center lg:text-left">Av.Costanera Sur con Jr los Incas</p>
            </div>


            <div className="w-full md:w-72 lg:w-full flex flex-col items-center justify-center mt-6 md:mt-0 ">
            <img
              alt="gallery"
              className="w-20 h-20 object-cover object-center"
              src={Logo_Email} />
            <hr className="border-textoplomo w-full my-2 lg:hidden" />
            <p className="mt-3 text-center lg:text-left">CentraldeRiesgos@gmail.com</p>
            </div> 

        </div>


    </div>
  );
}

<div className="border-l-2 border-azuls h-6 mx-3  flex flex-col"></div>