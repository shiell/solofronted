import LogoCheck from 'assets/img/check.svg'


export default function QueEs() {
    return (
      <div className="overflow-hidden xl:mx-20  xl:flex lg:py-10 border grid grid-cols-1">

        {/* Div donde van los cuadraditos */}
        <div className=" transform xl:w-1/2 w-full relative xl:p-8  flex xl:pl-0 md:mt-8 xl:mt-12  mt-4">
                    <div className="flex items-center space-x-2 lg:space-x-6 ">
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="lg:h-60 lg:w-40 md:h-44 md:w-32  h-36 w-24 overflow-hidden rounded-sm">
                          <img
                            src="https://cdn.pixabay.com/photo/2019/06/29/04/00/fisherman-4305368_1280.jpg"
                            alt=""
                            className="h-full object-cover object-center"
                          />
                        </div>
                        <div className="lg:h-60 lg:w-40 md:h-44 md:w-32  h-36 w-24 overflow-hidden rounded-sm">
                          <img
                            src="https://cdn.pixabay.com/photo/2016/10/15/05/49/dock-1741969_1280.jpg"
                            alt=""
                            className="h-full object-cover object-center"
                          />
                        </div>
                      </div>

                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="lg:h-60 lg:w-40 md:h-44 md:w-32  h-28 w-24 overflow-hidden rounded-sm">
                          <img
                            src="https://cdn.pixabay.com/photo/2022/05/09/05/27/handshake-7183724_1280.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="lg:h-60 lg:w-40 md:h-44 md:w-32  h-36 w-24 overflow-hidden rounded-sm">
                          <img
                            src="https://cdn.pixabay.com/photo/2018/03/13/15/42/fruit-3222854_1280.jpg"
                            alt=""
                            className="h-full object-cover object-center"
                          />
                        </div>
                        <div className="lg:h-60 lg:w-40 md:h-44 md:w-32  h-28 w-24 overflow-hidden rounded-sm">
                          <img
                            src="https://cdn.pixabay.com/photo/2021/11/15/18/38/container-6799046_1280.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 gap-y-6 lg:gap-y-8 ">
                        <div className="lg:h-60 lg:w-40 md:h-44 md:w-32 h-36 w-24 rounded-sm border ">
                          <img
                            src="https://cdn.pixabay.com/photo/2015/09/23/16/51/tuna-fish-954070_1280.jpg"
                            alt=""
                            className="h-full object-cover object-center"
                          />
                        </div>
                        <div className="lg:h-60 lg:w-40 md:h-44 md:w-32  h-36 w-24  rounded-sm">
                          <img
                            src="https://cdn.pixabay.com/photo/2022/05/12/09/33/fashion-7191167_1280.jpg"
                            alt=""
                            className="h-full object-cover object-center"
                          />
                        </div>
                      </div>
                    </div>
        </div>




        {/*Div del texto */}
        <div className="w-full xl:w-1/2 pt-10  xl:mt-14"> 
            <div className="">
              <h1 className="font text-2xl font-bold tracking-tight text-rojoficial sm:text-4xl pr-32">
                ¿Que es el comercio exterior y cuales son sus beneficios?
              </h1>
              <p className="mt-6 text-base text-gray-500 mr-[80px]">
              El comercio exterior es el intercambio de bienes y servicios entre países o regiones. Es una actividad esencial para la economía global, ya que permite a los países aprovechar sus ventajas comparativas y beneficiarse de la especialización.
              </p>
              <div className=" mt-10 ">
                  <h2 className="text-3xl text-rojoficial"><b>Beneficios</b></h2>
                  
                  <div class="p-5 text-base text-gray-500">
                    <ul>
                      <li class="flex items-center mb-3">
                        <img 
                            src={LogoCheck}
                            style={{
                                margin: '0px 20px 0 10px'
                            }
                            }
                            />
                        Aumenta el crecimiento económico 
                      </li>
                      <li class="flex items-center mb-3">
                        <img 
                            src={LogoCheck}
                            style={{
                                margin: '0px 20px 0 10px'
                            }
                            }
                            />
                        Mejora la eficiencia económica 
                      </li>
                      <li class="flex items-center mb-3">
                        <img 
                            src={LogoCheck}
                            style={{
                                margin: '0px 20px 0 10px'
                            }
                            }
                            />
                        Proporciona oportunidades de empleo 
                      </li>
                      <li class="flex items-center mb-3">
                        <img 
                            src={LogoCheck}
                            style={{
                                margin: '0px 20px 0 10px'
                            }
                            }
                            />
                        Nuevas oportunidades de mercado
                      </li>
                      <li class="flex items-center mb-3">
                        <img 
                            src={LogoCheck}
                            style={{
                                margin: '0px 20px 0 10px'
                            }
                            }
                            />
                        Competitividad global
                      </li>
                      
                    </ul>
                  </div>
                  
                  <a
                    href="#"
                    className=" mt-12 inline-block rounded-md border border-transparent bg-rojoficial py-3 px-8 text-center font-medium text-white hover:bg-indigo-700"
                  >
                    <b> Quiero mi Asesoramiento en Comercio exterior</b>
                  </a>
              </div>
            </div>
        </div>
            
      </div> 
    )
  }
  