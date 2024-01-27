//seccion donde esta las letras que se escriben solas

function Header(){
    return(
        <div className="relative isolate px-6  lg:px-8">
        <div className="mx-auto max-w-full xl:mx-12 sm:py-48 xl:pb-10 lg:py-56 lg:pt-40 lg:pb-40 pt-24 pb-12 xl:pt-14">
          <div className="">
            <h1 className="text-6xl font-semibold tracking-tight text-gray-900 sm:text-6xl pb-4">
                Acerca de Nosotros
            </h1>
            <p className="mt-6 text-xl leading-9 text-gray-600 max-w-4xl">
            La camara de Internacional de Empresarios y Emprendedores es una institución gremial privada, sin fines de lucro, que representa a los empresarios de la Región de Puno,  cuyo fin es buscar el desarrollo integral de sus asociados, teniendo como uno de sus objetivos establecer niveles de autoridad,  coordinación y responsabilidad en el cumplimiento de sus funciones.
            </p>
          </div>
        </div>
      </div>
    )
}

export default Header