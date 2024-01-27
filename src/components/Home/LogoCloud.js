

import React from 'react';

const LogoCloud = () => {
  return (
    <div className=''>
      <div className='bg-azuls py-12'>

                  <div className=" text-left ">
                      <h2 className="text-3xl text-center text-white font-bold md:text-4xl uppercase">Nuestros Asociados </h2>
                    </div>

        <div className='bg-white rounded-xl mx-28 my-12 border border-indigo-500/50 shadow-xl shadow-indigo-500/50'>
        

                    
                
                    <div className="w-full grid grid-cols-1 lg:grid-cols-5 gap-y-16 items-center py-16  ">
                        <img
                          className="col-span-2 max-h-[150px] w-full object-contain lg:col-span-1"
                          src="https://www.regionpuno.gob.pe/wp-content/uploads/2023/08/Escudo-Region-Puno.png"
                          alt="Transistor"
                          width={158}
                          height={48}
                        />
                        <img
                          className="col-span-2 max-h-[150px] w-full object-contain lg:col-span-1"
                          src="https://iconape.com/wp-content/png_logo_vector/municipalidad-de-puno-logo.png"
                          alt="Reform"
                          width={158}
                          height={48}
                        />
                        <img
                          className="col-span-2 max-h-[150px] w-full object-contain lg:col-span-1"
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Logo_UNAP.png/800px-Logo_UNAP.png"
                          alt="Tuple"
                          width={158}
                          height={48}
                        />
                        <img
                          className="col-span-2 max-h-[110px] w-full object-contain sm:col-start-2 lg:col-span-1"
                          src="https://seeklogo.com/images/S/sunat-logo-A71EE74E0A-seeklogo.com.png"
                          alt="SavvyCal"
                          width={158}
                          height={48}
                        />
                        <img
                          className="col-span-2 col-start-2 max-h-[150px] w-full object-contain sm:col-start-auto lg:col-span-1"
                          src="https://pbs.twimg.com/profile_images/2137261758/episunap_400x400.png"
                          alt="Statamic"
                          width={158}
                          height={48}
                        />
                        
                        
                    </div>


  


        </div>
      </div>
    </div>
  );
};

export default LogoCloud;
