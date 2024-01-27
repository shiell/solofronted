import React, { useState } from "react";
import ImaPreguntas from 'assets/img/Preguntas.png'

const PreguntasFrecuentes = () => {
  const AccordionItem = ({ header, text }) => {
    const [active, setActive] = useState(false);

    const handleToggle = () => {
      setActive(!active);
    };

    return (
      <div className="mb-8 w-full rounded-lg bg-white p-4 shadow-2xl dark:bg-dark-2 dark:shadow-[0px_20px_95px_0px_rgba(0,0,0,0.30)] sm:p-8 lg:px-6 xl:px-8  hover:-translate-y-4 transition duration-300 ease-in-out">
        <button
          className={`faq-btn flex w-full text-left`}
          onClick={handleToggle}
        >
          <div className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-azuls text-blue dark:bg-white/5 hover:-translate-y-4 transition duration-300 ease-in-out">
            <svg
              className={`fill-white stroke-white  duration-200 ease-in-out ${
                active ? "rotate-180" : ""
              }`}
              width="17"
              height="10"
              viewBox="0 0 17 10"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
                fill=""
                stroke=""
              />
            </svg>
          </div>

          <div className="w-full">
            <h4 className="mt-1 text-lg font-semibold text-justify text-indigo-600 dark:text-white">
              {header}
            </h4>
          </div>
        </button>

        <div
          className={`pl-[62px] duration-200 ease-in-out ${
            active ? "block" : "hidden"
          }`}
        >
          <p className="py-3 text-[14px] font-rale font-normal text-justify leading-relaxed text-azuls dark:text-dark-6">
            {text}
          </p>
        </div>
      </div>
    );
  };

  return (
    <section className="relative z-20 px-6 lg:px-24 overflow-hidden bg-azulclaro pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[90px] bg-">
      <div className="container mx-auto ">
        
            <div className="mx-auto w-full text-center ">
             
              <h2 className="mb-8 text-3xl font-extrabold font-pop text-azuls dark:text-white sm:text-3xl lg:text-4xl">
                Preguntas Frecuentes
              </h2>

              <p className="text-base text-body-color font-pop font-medium dark:text-dark-6 ">
              Aquí encontrarás las respuestas a las preguntas más comunes que los empresarios y emprendedores tienen sobre la Cámara Internacional de Empresarios y Emprendedores.
              </p>

  

            </div>
            <div className="w-full lg:w-1/3 mx-auto  ">
                <img
                    src={ImaPreguntas}
                    className="w-full h-full object-cover"
                   s alt="Imagen de preguntas"
                />
                </div>
          

            <div className="-mx-4 flex flex-wrap ">
              <div className="w-full px-4 lg:w-1/2">
                <AccordionItem
                  header="¿Qué es la Cámara Internacional de Empresarios y Emprendedores?"
                  text="La Cámara Internacional de Empresarios y Emprendedores es una organización sin fines de lucro que tiene como objetivo ayudar a los empresarios y emprendedores a alcanzar sus objetivos empresariales. La organización ofrece una variedad de servicios y recursos para ayudar a los miembros a crecer y expandir sus negocios."
                />
                <AccordionItem
                  header="¿Cómo puedo unirme a la Cámara Internacional de Empresarios y Emprendedores?"
                  text="Para unirse a la Cámara Internacional de Empresarios y Emprendedores, simplemente visita nuestro sitio web y completa el formulario de solicitud de membresía. Una vez que hayas completado el formulario, uno de nuestros representantes se pondrá en contacto contigo para completar el proceso de registro."
                />
                <AccordionItem
                  header="¿Cómo puedo participar en los eventos de la Cámara Internacional de Empresarios y Emprendedores?"
                  text="Para participar en los eventos de la Cámara Internacional de Empresarios y Emprendedores, simplemente visita nuestro sitio web y revisa nuestro calendario de eventos. Una vez que hayas encontrado un evento que te interese, regístrate en línea y uno de nuestros representantes se pondrá en contacto contigo para confirmar tu asistencia."
                />
              </div>
              <div className="w-full px-4 lg:w-1/2">
                <AccordionItem
                  header="¿Cómo puedo ponerme en contacto con la Cámara Internacional de Empresarios y Emprendedores?"
                  text="Para ponerte en contacto con la Cámara Internacional de Empresarios y Emprendedores, simplemente visita nuestro sitio web y completa el formulario de contacto. Uno de nuestros representantes se pondrá en contacto contigo lo antes posible."
                />
                <AccordionItem
                  header="¿Cómo puedo actualizar mi información de contacto? "
                  text="Para actualizar tu información de contacto, simplemente inicia sesión en tu cuenta en nuestro sitio web y actualiza tu perfil. Si tienes problemas para actualizar tu información, ponte en contacto con nosotros y uno de nuestros representantes te ayudará."
                />
                <AccordionItem
                  header="¿Cómo puedo cancelar mi membresía en la Cámara Internacional de Empresarios y Emprendedores?"
                  text="Para cancelar tu membresía en la Cámara Internacional de Empresarios y Emprendedores, ponte en contacto con nosotros directamente y uno de nuestros representantes te ayudará con el proceso."
                />
              </div>
            </div>
      </div>

    
    </section>
  );
};

export default PreguntasFrecuentes;


