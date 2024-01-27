function Error404(){
    return(
        
<div class="h-screen w-screen bg-gray-50 flex items-center">
    <div class="mx-auto container flex flex-col md:flex-row items-center justify-between px-5 text-gray-700">
            <div class="w-full lg:w-1/2 mx-auto border ">
                <div class="text-7xl text-green-500 font-dark font-extrabold mb-8 mx-auto"> 404</div>
                    <p class="text-2xl md:text-3xl font-light leading-normal mb-8 mx-auto">
                        Página no encontrada
                    </p>
            
            <a href="/" class="px-5 inline py-3 text-sm font-medium leading-5 shadow-2xl text-white transition-all duration-400 border border-transparent rounded-lg focus:outline-none bg-green-600 active:bg-red-600 hover:bg-red-700">Regresar al Inicio</a>
             </div>
        <div class="w-full lg:flex lg:justify-end lg:w-1/2 mx-auto my-12 ">
        <img src="https://user-images.githubusercontent.com/43953425/166269493-acd08ccb-4df3-4474-95c7-ad1034d3c070.svg" class="" alt="Page not found"/>
        </div>
    
    </div>
</div>
    )
}

export default Error404