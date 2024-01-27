import LogoCheck from 'assets/img/check.svg'

export default function QueEs() {
    return (

      
      <div className="overflow-hidden xl:mr-20 xl:ml-4  space-x-12 lg:flex my-5 mx-2 ">

        {/* Div donde van los cuadraditos */}
        
        <div className='lg:w-1/2 w-full lg:gap-4 gap-1 grid lg:grid-cols-8  lg:mt-[92px] gap-y-1 m-auto  grid-cols-3 '>

            <div className='bg-rojoficial lg:col-span-4 lg:col-start-2 lg:col-end-5 h-36'>
                        <img
                            src="https://plus.unsplash.com/premium_photo-1683121633519-761e98017e2c?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt=""
                            className="h-full w-full object-cover object-top"
                          />
            </div>
            <div className='bg-rojoficial lg:col-span-4 lg:col-start-5 lg:col-end-8 h-36'>
                <img
                    src="https://plus.unsplash.com/premium_photo-1661281337214-c5f344300d92?auto=format&fit=crop&q=80&w=2071&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    className="h-full w-full object-cover object-top"
                    />
            </div>


            <div className='bg-rojoficial lg:lg:col-span-2 lg:col-start-1 lg:col-end-4 h-36'>
                <img
                    src="https://plus.unsplash.com/premium_photo-1683121731093-475880e5f3d7?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    className="h-full w-full object-cover object-top"
                    />
            </div>
            <div className='bg-rojoficial lg:col-span-4 lg:col-start-4 lg:col-end-6 h-36'>
            <img
                    src="https://cdn.pixabay.com/photo/2016/10/09/19/19/coins-1726618_640.jpg"
                    alt=""
                    className="h-full w-full object-cover object-top"
                    />
            </div>
            <div className='bg-rojoficial lg:col-span-2 lg:col-start-6 lg:col-end-9 h-36'>
                <img
                    src="https://cdn.pixabay.com/photo/2022/06/08/05/42/handshake-7249766_1280.jpg"
                    alt=""
                    className="h-full w-full object-cover object-top"
                    />
            </div>


            <div className='bg-rojoficial lg:col-span-4 lg:col-start-2 lg:col-end-5 h-36'>
                <img
                    src="https://plus.unsplash.com/premium_photo-1661349604449-93300bfb3365?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    className="h-full w-full object-cover object-top"
                    />
            </div>
            <div className='bg-rojoficial lg:col-span-4 lg:col-start-5 lg:col-end-8 h-36 '>
                <img
                    src="https://images.unsplash.com/photo-1616587226960-4a03badbe8bf?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    className="h-full w-full object-cover object-top"
                    />
            </div>

        </div>



        {/*Div del texto */}
        <div className=" lg:w-1/2 w-full lg:mt-[92px]  mt-6 xl:pl-6 "> 
            <div className="">
              <h1 className="font w-full text-2xl lg:text-4xl font-bold tracking-tight text-rojoficial pr-32">
              ¿Qué es la Bolsa de Trabajo?
              </h1>
              <p className="mt-6 text-base text-gray-500 mr-[80px]">
              La bolsa de trabajo es un servicio en el que las empresas o empleadores publican ofertas de empleo y los individuos en busca de trabajo pueden buscar y postularse para esos puestos
              </p>
              <div className=" mt-10 ">
                  <h2 className="lg:text-4xl text-2xl text-rojoficial"><b>¿En que me beneficia la bolsa de valores?</b></h2>

                    <p className="mt-4 text-base text-gray-500 mr-[80px] ">
                    Si estás buscando trabajo, hay muchas razones por las que ir a una bolsa de trabajo:
                    </p>
                  
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
                        Accesos a multiples oportunidades de empleo
                      </li>
                      <li class="flex items-center mb-3">
                        <img 
                            src={LogoCheck}
                            style={{
                                margin: '0px 20px 0 10px'
                            }
                            }
                            />
                        Ahorro de tiempo buscando trabajo 
                      </li>
                      <li class="flex items-center mb-3">
                        <img 
                            src={LogoCheck}
                            style={{
                                margin: '0px 20px 0 10px'
                            }
                            }
                            />
                        Obtención de información del mercado laboral 
                      </li>
                      <li class="flex items-center mb-3">
                        <img 
                            src={LogoCheck}
                            style={{
                                margin: '0px 20px 0 10px'
                            }
                            }
                            />
                        Alertas de empleos 
                      </li>
                      <li class="flex items-center mb-3">
                        <img 
                            src={LogoCheck}
                            style={{
                                margin: '0px 20px 0 10px'
                            }
                            }
                            />
                        Facilidad en el proceso de solicitud
                      </li>
                      
                    </ul>
                  </div>
                  
                  <a
                    href="/PublicacionTrabajos"
                    className=" mt-12 inline-block rounded-md border border-transparent bg-rojoficial py-3 px-8 text-center font-medium text-white hover:bg-indigo-700"
                  >
                    <b> Quiero ver la bolsa de trabajo</b>
                  </a>
              </div>
            </div>
        </div>
            
      </div> 
    )
  }
  