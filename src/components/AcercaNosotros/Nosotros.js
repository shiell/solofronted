function Nosotros() {
    return (
      <div className="relative">
        <img
          src="https://images.pexels.com/photos/3228766/pexels-photo-3228766.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
          className="absolute inset-0 object-cover w-full h-full"
          alt=""
        />
        <div className="relative bg-opacity-85 bg-black">
          <svg className="absolute inset-x-0 bottom-0 text-white" viewBox="0 0 1160 163">
            <path
              fill="currentColor"
              d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
            />
            {/* Rectángulo para cubrir la línea inferior */}
            <rect x="0" y="150" width="1160" height="18" fill="white" />
          </svg>
          <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col items-center justify-between xl:flex-row">
              <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                <h2 className="max-w-lg mt-8 xl:mb-32 xl:mt-32 text-4xl font-extrabold font-pop tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                  Sobre Nosotros <br className="hidden md:block" />
                </h2>
                {/* Aquí puedes agregar más contenido */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Nosotros;
  