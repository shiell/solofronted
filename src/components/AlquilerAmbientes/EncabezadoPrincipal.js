//s
import { Typewriter } from 'react-simple-typewriter'

function EncabezadoPrincipal
(){
    return(
        <div className="relative h-[200px] overflow-hidden">
    <img
        src="https://getwallpapers.com/wallpaper/full/5/c/0/606489.jpg"
        className="w-full h-auto transform -translate-y-1/3"
        style={{
            filter: `brightness(40%)`,
            background: "black",
        }}
    />
    <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center z-10">
        <h1 className="text-1xl font-bold tracking-tight text-white sm:text-5xl">
             <span></span> 
            <Typewriter
                words={['Alquiler de Ambientes']}
                loop={0}
                cursor
                cursorStyle='_'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
            />
        </h1>
    </div>
</div>




    )
}

export default EncabezadoPrincipal


