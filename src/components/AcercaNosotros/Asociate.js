import { useEffect, useState } from 'react';

function Asociate() {
  const [welcomeMessageShow, setWelcomeMessageShow] = useState(true);

  useEffect(() => {
    // Código de transición o lógica de mostrar/ocultar el mensaje de bienvenida usando Alpine.js
    // Aquí puedes usar useState y useEffect de React para manejar la lógica de mostrar/ocultar si lo necesitas
  }, []);

  return (
    <div className="min-w-screen min-h-screen bg-gray-900 flex items-center justify-center px-5 py-5">
      {welcomeMessageShow && (
        <div className="bg-indigo-600 text-white rounded shadow-xl py-5 px-5 w-full lg:w-10/12 xl:w-3/4">
          <div className="flex flex-wrap -mx-3 items-center">
            <div className="w-full sm:w-1/2 md:w-2/4 px-3 text-left">
              <div className="p-5 xl:px-8 md:py-5">
                <h3 className="text-2xl lg:text-4xl font-pop font-bold text-plomo">Asóciate con Nosotros!</h3>
                <h5 className=" text-base lg:text-xl mb-3 font-Rale font-medium text-indigo-900">Únete a la Cámara Internacional de Empresarios y Emprendedores CIEE</h5>
                <p className="text-sm lg:text-base text-indigo-200 font-Rale font-medium ">
                Sé parte de una red global dedicada a impulsar el crecimiento empresarial y la colaboración internacional. Al asociarte con nosotros, te conectarás con una comunidad diversa de visionarios empresariales y emprendedores comprometidos con el éxito mutuo.
                </p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/4 px-3 text-center">
              <div className="p-5 xl:px-8 md:py-5">
                <a
                  className="block w-full py-2 px-4 rounded text-indigo-600 bg-gray-200 hover:bg-white hover:text-gray-900 focus:outline-none transition duration-150 ease-in-out mb-3"
                  href="https://codepen.io/ScottWindon"
                  target="_blank"
                >
                  Asóciate
                </a>
                <button
                  onClick={() => setWelcomeMessageShow(false)}
                  className="w-full py-2 px-4 rounded text-white bg-indigo-900 hover:bg-gray-900 focus:outline-none transition duration-150 ease-in-out"
                >
                  No Gracias
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Asociate;
