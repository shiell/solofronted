//s
import { Typewriter } from 'react-simple-typewriter'

function EncabezadoPrincipal  
(){
    return(
        <div className="relative lg:h-[200px] h-20 md:h-40 overflow-hidden ">
            <img
                src="https://cdn.pixabay.com/photo/2017/11/16/10/32/businessman-2954004_1280.jpg"
                className="w-full h-auto transform -translate-y-1/3 "
                style={{
                    filter: `brightness(45%)`,
                    background: "black",
                }}
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center z-10">
                <h1 className="text-1xl font-bold tracking-tight text-white sm:text-2xl md:text-3xl lg:text-5xl">
                    <span className=' hidden md:block'>
                        <Typewriter
                            words={['Bolsa de Trabajo']}
                            loop={0}
                            cursor
                            cursorStyle='_'
                            typeSpeed={100}
                            deleteSpeed={100}
                            delaySpeed={3000}
                        />
                    </span>
                    <span className='md:hidden'>
                        Bolsa de Trabajo
                    </span> 
                </h1>
            </div>
        </div>
    )
}

export default EncabezadoPrincipal


