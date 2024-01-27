import {connect} from 'react-redux'
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

import { Link, NavLink } from 'react-router-dom'
import loading_dots from 'assets/img/loading-dots.gif'
import Logo_ciee from 'assets/img/Logociee.png'
import Logo_FB from 'assets/img/facebook.svg'
import Logo_YT from 'assets/img/youtube.svg'
import Logo_Twiter from 'assets/img/Twiter.svg'
import Logo_Instagram from 'assets/img/Instagram.svg'
import Logo_Email from 'assets/img/Email.svg'
import Logo_Reloj from 'assets/img/Reloj.svg'
import Logo_Localizacion from 'assets/img/Localizacion.svg'
import Logo_Telefono from 'assets/img/Telefono.svg'
import React, { useState, Fragment } from "react";


function Navbar(){
    
  const [showServicesMenu, setShowServicesMenu] = useState(false);
  

  const services = [ //TODO: Los servicios de pantalla grande
    { name: 'Centro de Capacitación Empresarial',  href: '/CapacitacionEmpresarial' },
    { name: 'Alquiler de Ambientes',  href: '/AlquilerAmbientes' },
    { name: 'Bolsa de Trabajo',  href: '/BolsaTrabajo' },
    { name: 'Comercio Exterior',  href: '/ComercioExterior' },
  ];
  

    const [loading,setLoading]=useState(true)
    window.onscroll = function() {scrollFunction()}

    //TODO: funcion para cuando haya un scroll mayor a 50 solo se muestre el nav colore rojo
    function scrollFunction() {
      if(document.getElementById('nav')) {
        // Obtiene el div con id `nav-bottom`
        const navBottom = document.getElementById('nav-bottom');
    
        //TODO: Si el usuario se ha desplazado hacia abajo en la página más de 50 píxeles, cambia el color de fondo del div a verde
        if (document.documentElement.scrollTop > 70) {
          navBottom.style.backgroundColor = 'rojoficial';
          navBottom.style.position = 'fixed';
          navBottom.style.top = '0';
          navBottom.style.zIndex = 30;


        } else {
          // Si no, cambia el color de fondo del div a blanco
          navBottom.style.backgroundColor = '#E52B2B';
          navBottom.style.position = 'relative';
          navBottom.style.top = 'auto';
          navBottom.style.zIndex = 30;

        }
      }
    }

    //TODO:para la pantalla de celulares
    const [open, setOpen] = useState(true) 
  
    //TODO:Opciones, para el menú desplegable de pantallas chicas
    const solutions = [
    {
      name: 'Inicio',
      description: 'Crecimiento empresarial a través del aprendizaje',
      href: '/',
      icon: IconOne,
    },
    {
      name: 'SERVICIOS',
      description: 'Espacios para tus ideas',
      href: '',
      icon: IconTwo,
      subOptions: [ // Agrega subopciones
        {
          name: 'Centro de Capacitacion Empresarial',
          href: '/CapacitacionEmpresarial',
        },
        {
          name: 'Alquiler de Ambientes',
          href: '/AlquilerAmbientes',
        },
        {
          name: 'Bolsa de Trabajo',
          href: '/BolsaTrabajo',
        },
        {
          name: 'Comercio Exterior',
          href: '/ComercioExterior',
        },
      // Agrega más subopciones si es necesario
      ],
    },
    {
      name: 'Acerca de Nosotros',
      description: 'Infórmate para tomar decisiones',
      href: '/Nosotros',
      icon: IconThree,
    },
    {
      name: 'Comunicacion',
      description: 'Empleo para todos',
      href: '/Comunicacion',
      icon: IconThree,
    },
    ]

    const [isExpanded, setIsExpanded] = useState(false);

  

    return(
    <nav id='nav' className=' z-50 w-full relative transition duration-300 ease-in-out'>

          {/*Div de la barra ploma */}
          <div className=' h-[80px] bg-plomo bg-opacity-90 pt-[30px] hidden lg:block '>
          
              {/*Div de los logo mas su descripcion */}
              <div id="nav-top" className=' float-left lg:ml-[100px]  ' >
                        <div className='text-azuls font-regular text-sm inline-flex xl:mr-9 md:mr-28'>
                        <img 
                              alt='' 
                              src={Logo_Telefono}
                              width={20}
                              height={14}
                              style={{
                                  margin: '0px 5px 0 0px'
                              }
                              }
                              />
                          0987 654 321 
                        </div> 
                        <div className='text-azuls font-regular text-sm inline-flex xl:mx-9 md:mr-28'> 
                        <img 
                              alt='' 
                              src={Logo_Reloj}
                              width={20}
                              height={14}
                              style={{
                                  
                                  margin: '0 5px 0 0'
                              }
                              }
                              />
                          Lun - Vier 08:00 - 18:00 
                        </div>
                        <div className='text-azuls font-regular text-sm inline-flex xl:mx-9 md:mr-28'>
                      <img 
                              alt='' 
                              src={Logo_Localizacion}
                              width={33}
                              height={27}
                              style={{
                                  alignSelf: 'center',
                                  padding: '0 0 0 12px',
                                  margin: '0 5px 0 0'
                              }
                              }
                              />
                        Av. Amazonas y Quito
                        </div>
                        <a href="#">
                          <div className='text-azuls font-regular text-sm inline-flex xl:mx-9 md:mr-0'>
                          <img 
                              alt='' 
                              src={Logo_Email}
                              width={33}
                              height={27}
                              style={{
                                  alignSelf: 'center',
                                  padding: '0 0 0 12px',
                                  margin: '0 5px 0 0'
                              }
                              }
                              />
                          info@example.com
                          </div>
                        </a> 
              </div> 

              {/*Div de los logos de los redes sociales */}
              <div className='float-right mt-[-12px] mr-[100px] hidden xl:flex '>
                          <div className='bg-azuls w-[43px] h-[43px] flex justify-content: center mx-2 rounded-[11px]'>
                            <a href='https://web.facebook.com/profile.php?id=100080739507055&locale=es_LA' >

                                <img
                                  alt='' 
                                  src={Logo_FB}
                                  width={40}
                                  height={34}
                                  style={{
                                      padding:'8px 5px 3px 8px',
                                      alignSelf: 'center',
                                  }
                                  }
                                  />
                            </a>
                          </div>

                          <div className='bg-azuls w-[43px] h-[43px] flex justify-content: center mx-2 rounded-[11px]'>
                              <a href='https://web.facebook.com/profile.php?id=100080739507055&locale=es_LA' >
                                <img 
                                  alt='' 
                                  src={Logo_YT}
                                  width={40}
                                  height={40}
                                  style={{
                                    padding:'8px 5px 3px 8px',
                                    alignSelf: 'center',
                                    
                                  }}
                                  />
                              </a>   
                          </div>

                          <div className='bg-azuls w-[43px] h-[43px] flex justify-content: center mx-2 rounded-[11px]'>
                              <a href='https://web.facebook.com/profile.php?id=100080739507055&locale=es_LA' >
                                <img 
                                  alt='' 
                                  src={Logo_Instagram}
                                  width={40}
                                  height={34}
                                  style={{
                                    padding:'8px 5px 3px 8px',
                                    alignSelf: 'center',
                                  }}
                                  />
                              </a>
                          </div>

                          <div className='bg-azuls w-[43px] h-[43px] flex justify-content: center mx-2 rounded-[11px]'>
                              <a href='https://web.facebook.com/profile.php?id=100080739507055&locale=es_LA' >
                                <img 
                                  alt='' 
                                  src={Logo_Twiter}
                                  width={40}
                                  height={34}
                                  style={{
                                    padding:'8px 5px 3px 8px',
                                    alignSelf: 'center',
                                  }}
                                />
                              </a>
                          </div>
              </div>  
                
          </div>

          
          {/*Div de la barra roja del nav */}
          <div id="nav-bottom" className='hidden lg:flex justify-content-space-between w-full h-[48px] bg-rojoficial  '>


              <div className='bg-white w-[470px] h-full trapezoide '>
                <Link to='/' className=''>
                  <img 
                    alt='' 
                    src={Logo_ciee}
                    width={90}
                    height={70}
                    className='mt-2 ml-[100px]'     
                    style={{
                      padding:'0px 0px 7px 0px',
                    }}
                  />
                    
                </Link>

              </div> 


              {/* Div de la barra roja  */}
              <div className=" w-full3">

                  <div className="lg:mt-[12px] xl:mt-[12px] xl:ml-[140px]">

                  <NavLink to='/' className="text-lg font-medium leading-6 text-white hover:underline hover: underline-offset-4 xl:mx-14 mx-14">Inicio</NavLink>

                  <NavLink to='/Nosotros' className="text-lg font-medium leading-6 text-white  hover:underline hover: underline-offset-4 xl:mx-14 mx-14 ">Nosotros</NavLink>

                      
                <NavLink
                  className="text-lg font-medium leading-6 text-white hover:underline hover:underline-offset-4 inline-flex z-20  xl:mx-14 mx-16 relative"
                  onMouseEnter={() => setShowServicesMenu(true)}
                  onMouseLeave={() => {
                    setTimeout(() => setShowServicesMenu(false), 300); // Ocultar después de 1000 milisegundos (1 segundo)
                  }}
                  
                >
                  Servicios

                  {showServicesMenu && (
                    <div className="absolute left-0 mt-[26px] bg-gray-100 border border-gray-300 w-52  shadow-lg text-sm"
                    onMouseEnter={() => setShowServicesMenu(true)}
                    
                    >
                      {services.map((service) => (
                        <Link
                          key={service.name}
                          to={service.href}
                          className=" z-20 block px-4 py-4 text-gray-800 hover:bg-gray-200 border-t-2 border-gray-200"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  )}

                </NavLink>
                
                  

                  <NavLink to='/Comunicacion' className="text-lg font-medium leading-6 text-white hover:underline hover: underline-offset-4 xl:mx-14 ml-14 ">Comunicaciones</NavLink>
                  </div>
              </div>
          </div>
          
          
          {/*Div de navegacion para pantallas chicas */}
          <div id="nav-bottom" className="lg:hidden flex justify-content-space-between w-full h-[48px] bg-rojoficial justify-between">
                  <div className="bg-white w-[470px] h-full trapezoide lg:w-[60px]">
                    <Link to="/" className="">
                      <img
                        src={Logo_ciee}
                        width={70}
                        height={50}
                        className="mt-2 ml-[50px]"
                        style={{
                          padding: "0px 0px 7px 0px",
                        }}
                      />
                    </Link>
                  </div>



                  <div className="my-auto" /*boton responsive para celulares... VID 01: min  05:48*/ > 
                  <Popover className="relative ">
                    {({ open }) => (
                      <>
                        <Popover.Button //* Bottoom menu 
                          className={`
                            ${open ? '' : 'text-opacity-90'}
                            group inline-flex items-center rounded-md bg-azuls px-2 py-2 mx-3 text-base font-medium text-white hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 border border-blue-800`}
                        >
                              {
                                open ?
                                <i className="bx bx-x"></i>
                                :
                                <i className="bx bx-menu"></i>
                              }
                        </Popover.Button>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0 translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 translate-y-1"
                        >
                          <Popover.Panel className="absolute -left-[132px] z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform sm:px-0 lg:max-w-3xl  ">

                            <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">

                              <div className="relative grid gap-8 bg-azuls p-7 ">
                                {solutions.map((item) => (

                                  //Pregunta si la opcion tiene subopciones y si tiene se convierte en buttom
                                    item.subOptions ? (
                                      <button
                                        key={item.name}
                                        className="-m-3  transition duration-150 ease-in-out hover:bg-gray-600 focus:outline-none focus-visible:ring focus-visible:ring-sky-500 focus-visible:ring-opacity-50 border border-rojoficial rounded-lg" 
                                        onClick={() => setIsExpanded(!isExpanded)}

                                      >
                                      <div className='flex items-center rounded-lg p-3'>
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center text-white"> 
                                            <item.icon aria-hidden="true" />{/*Div donde se llama al icono para el buttom */}
                                        </div>
                                        <div className="ml-4"> {/*Div donde se llama el nombre y su descripcion */}
                                            <p className=" text-sm font-medium text-white hover:text-sky-400 text-left  ">
                                              {item.name}
                                            </p>
                                            <p className="text-sm text-white">
                                              {item.description}
                                            </p>
                                        </div>
                                      </div>
                                      
                                      {/* Mostrando los servicios */}
                                      {isExpanded ? (
                                          <div className='mt-2 text-white text-left pl-4 bg-orange-400'>
                                            <ul className='mt-2 py-3'>
                                              {item.subOptions.map((subOption) => (
                                                <li className='mt-2 py-[1px] font-semibold' key={subOption.name}>
                                                  <Link to={subOption.href} className='hover:underline'>
                                                    {subOption.name}
                                                  </Link>
                                                </li>
                                              ))}
                                            </ul>
                                          </div>
                                        ) : null}                                  
                                      </button>
                                    ):


                                  <Link
                                    key={item.name}
                                    to={item.href}
                                    className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-600 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50 border border-rojoficial"
                                  >
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center text-white "> {/* DIv donde se llaman a los iconos */}
                                      <item.icon aria-hidden="true" />
                                    </div>
                                      <div className="ml-4">
                                        <p className="text-sm font-medium text-white">
                                          {item.name}
                                        </p>
                                        <p className="text-sm text-white">
                                          {item.description}
                                        </p>
                                      </div>
                                  </Link>

                                ))}
                              </div>

                              {/*La ultima parte Descripcion  */}
                              <div className="bg-gray-50 p-4 "> 
                                <a
                                  href="##"
                                  className="flow-root rounded-md px-2 py-2 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                                >
                                  <span className="flex items-center">
                                    <span className="text-sm font-medium text-rojoficial ">
                                      Camara Internacional de Empresarios y Emprendedores
                                    </span>
                                  </span>
                                  <span className="block text-sm text-gray-500 mt-4">
                                    CIEE Empresarial, conectando empresas
                                  </span>
                                </a>
                              </div>
                            </div>
                          </Popover.Panel>
                        </Transition>
                      </>
                    )}
                  </Popover>

                    
                  </div>


          </div>



      </nav>
    )
}

const mapStateToProp=state=>({

})

export default connect(mapStateToProp, {

}) (Navbar)


function IconOne() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <path
        d="M24 11L35.2583 17.5V30.5L24 37L12.7417 30.5V17.5L24 11Z"
        stroke="#FB923C"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.7417 19.8094V28.1906L24 32.3812L31.2584 28.1906V19.8094L24 15.6188L16.7417 19.8094Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.7417 22.1196V25.882L24 27.7632L27.2584 25.882V22.1196L24 20.2384L20.7417 22.1196Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
    </svg>
  )
}

function IconTwo() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <path
        d="M28.0413 20L23.9998 13L19.9585 20M32.0828 27.0001L36.1242 34H28.0415M19.9585 34H11.8755L15.9171 27"
        stroke="#FB923C"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.804 30H29.1963L24.0001 21L18.804 30Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
    </svg>
  )
}

function IconThree() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <rect x="13" y="32" width="2" height="4" fill="#FDBA74" />
      <rect x="17" y="28" width="2" height="8" fill="#FDBA74" />
      <rect x="21" y="24" width="2" height=" md:mr-4" fill="#FDBA74" />
      <rect x="25" y="20" width="2" height="16" fill="#FDBA74" />
      <rect x="29" y="16" width="2" height="20" fill="#FB923C" />
      <rect x="33" y=" md:mr-4" width="2" height="24" fill="#FB923C" />
    </svg>
  )
}