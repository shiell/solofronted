import ImaPreguntas from 'assets/img/Pregunta.png'

function QueEs() {
  return (
    <div className=" py-6 px-6 lg:py-10 lg:px-24  ">

        <div className="container lg:flex justify-between items-center ">
          <div className="lg:w-6/12 lg:p-5 p-7 ">
            <h1 className="text-xl lg:text-3xl text-justify text-azuls font-extrabold font-pop leading-normal mb-5 capitalize ">
              ¿Que es la Cámara empresarial de empresarios y emprendedores ?
            </h1>
            <p className="text-base lg:text-lg font-rale font-normal text-justify  text-gray-600">
            Representamos y defendemos los intereses de los empresarios y emprendedores de un país, región o ciudad. Nuestro objetivo es promover el desarrollo económico y social a través de la creación y el fortalecimiento de empresas.            </p>

          
          </div>
          <div className="lg:w-5/12 order-2 ">
               <img
                    src={ImaPreguntas}
                    className="w-full h-full object-cover"
                    alt="Imagen de preguntas"
                />
          </div>
        </div>
      
    </div>
  );
}

export default QueEs;
