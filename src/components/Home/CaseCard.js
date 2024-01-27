import { Link } from "react-router-dom"

//! codigo de los cards y sus efectos de cuando pasas el mouse por ella: vid01 min: 04:13 ...
function CaseList({data, index}){
    return(
        <Link to={data.href}
            //TODO:agregamos, cuando pasemos el mause por el div que el color del texto sea naranja
            onMouseEnter={() =>{
                const title_elemnet = document.getElementById(index) // obtenemos el div con Id "title "
                title_elemnet.classList.add(
                  'text-rojoficial', 
                  "transform", //Habilita transformaciones CSS en el elemento.
                  "scale-110",  //Escala el elemento al 105% de su tamaño original.
                  "transition-all", 
                  "ease-out", 
                  "duration-200" 
                )       
            }}
            
            //TODO:agregamos, cuando pasemos el mause se salga del div que el color del texto vuelva a ser negro
                onMouseLeave={() =>{
                const title_elemnet = document.getElementById(index) // obtenemos el div con Id "title "
                title_elemnet.classList.remove(
                  'text-rojoficial', 
                  "transform", 
                  "scale-110"
                )    // quitanos la propiedad
                  
            }}
        
        className=""
        >
        <div className="flex flex-col rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-azuls mx-8 border-4 border-gray-300 h-full md:flex-row ">
            <img
              id={data.id}
              className="lg:w-2/5 lg:h-64 w-full h-64 rounded-t-lg  md:!rounded-none md:!rounded-l-lg object-cover  overflow-hidden"
              src={data.imageUrl}
              alt=""
            />

            <div className="flex flex-col justify-start p-6 lg:w-3/5 lg:h-64 w-full h-52 overflow-hidden border-l-0 md:border-l-8">
              <h5
                id={index}
                className="mb-2 text-xl font-medium text-white"
              >
                {data.title}
              </h5>
              <p className="mb-4 text-sm text-neutral-200">
                {data.description}
              </p>
              <p className="text-xs text-neutral-300">
                Last updated 3 mins ago
              </p>
            </div>
</div>




      </Link>
    )
}
export default CaseList


