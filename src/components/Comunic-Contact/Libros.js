import libro from 'assets/img/Libro.png';

function Libros() {
  return (
    <div className="w-ful bg-plomo">
      <div className="relative z-10">
        <h1 className="pt-20 pb-10 text-center text-5xl font-extrabold font-sans text-azuls">
          Libros Recomendados
        </h1>

        <div className="flex pb-20 flex-wrap justify-center items-center mb-20 gap-2 ">
          <div className="relative group cursor-pointer group overflow-hidden text-gray-50 h-72 w-56 rounded-2xl hover:duration-700 duration-700 sm:w-full md:w-1/3 lg:w-1/4 px-4 flex items-center justify-center mb-4 ">
            <div className=' shadow-2xl'>
            <div className="w-64 h-80 text-gray-800  flex items-center justify-center">
              <a
                href="https://www.jugandoainvertir.com.ar/descargas/Padre-Rico-Padre-Pobre.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-64 h-80  text-gray-800 flex items-center justify-center"
              >
                <img
                  src={libro}
                  className="w-full h-full"
                  alt="Imagen de preguntas"
                />
              </a>
            </div>

            <div className="absolute bg-gray-50 -bottom-24 w-64 p-3 flex flex-col gap-1 group-hover:-bottom-0 group-hover:duration-600 duration-500 items-center justify-center">
              <span className="text-rojoficial font-bold text-xs">Ciee</span>
              <span className="text-gray-800 font-bold text-3xl">
                Libro
              </span>
              <p className="text-neutral-800">
                Padre rico padre pobre
              </p>
            </div>
            </div>

          </div>

          <div className="relative group cursor-pointer group overflow-hidden text-gray-50 h-72 w-56 rounded-2xl hover:duration-700 duration-700 sm:w-full md:w-1/3 lg:w-1/4 px-4 flex items-center justify-center mb-4 ">
            <div className=' shadow-2xl'>
            <div className="w-64 h-80 text-gray-800  flex items-center justify-center">
              <a
                href="https://www.jugandoainvertir.com.ar/descargas/Padre-Rico-Padre-Pobre.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-64 h-80   text-gray-800 flex items-center justify-center"
              >
                <img
                  src={libro}
                  className="w-full h-full"
                  alt="Imagen de preguntas"
                />
              </a>
            </div>

            <div className="absolute bg-gray-50 -bottom-24 w-64 p-3 flex flex-col gap-1 group-hover:-bottom-0 group-hover:duration-600 duration-500 items-center justify-center">
              <span className="text-rojoficial font-bold text-xs">Ciee</span>
              <span className="text-gray-800 font-bold text-3xl">
                Libro
              </span>
              <p className="text-neutral-800">
                Padre Rico Y Padre Pobre
              </p>
            </div>
            </div>

          </div>
         
        </div>

      </div>
    </div>
  );
}

export default Libros;
