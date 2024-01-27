import { useEffect, useState  } from "react"
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
import { Switch } from '@headlessui/react'
import { Link } from "react-router-dom";
import axios from "axios";
import CircleLoader from "react-spinners/CircleLoader";

const ContactSection = () => {

  useEffect(()=>{
    window.scrollTo(0,0)
},[])

const [enabled, setEnabled] = useState(false)

const [loading, setLoading] = useState(false)

const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    mensaje: '',
    phone: '',
    budget: '',
});

const { 
name,
email,
subject,
mensaje,
phone,
budget 
} = formData;

const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

const onSubmit = e => {
    e.preventDefault();

    if(enabled){
        setLoading(true);

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        const formData = new FormData()
        formData.append('name', name)
        formData.append('email', email)
        formData.append('phone', phone)
        formData.append('subject', subject)
        formData.append('mensaje', mensaje)
        formData.append('budget', budget)

        const fetchData = async()=>{
            const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/contacts/`,formData, config)
            if(res.status === 200){
                setLoading(false);
                setFormData({
                    name:'',
                    email:'',
                    subject:'',
                    mensaje:'',
                    phone:'',
                    budget:'',
                })
                alert('mensaje has been sent.')
            }else{
                setLoading(false);
                alert('Error sending mensaje.')
            }
        }
        fetchData()

    }else{
        alert('You must accept the terms of service and conditions')
    }
}




  return (
    <section className="text-gray-600 body-font relative">
      <div className="absolute inset-0">
        <iframe
          title="map"
          width="100%"
          height="100%"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          scrolling="no"
          src="https://maps.google.com/maps?q=Puno,%20Peru&output=embed"
          style={{}}
        ></iframe>
      </div>


        <div className="container px-5 py-24 mx-auto flex">
          <div className="xl:w-2/5  bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
            <h2 className="text-4xl font-bold text-center mb-6 text-rojoficial">
              Contactanos
            </h2>

          <form onSubmit={e=>onSubmit(e)} className="grid grid-cols-1 gap-y-6">
        <div>
          <label htmlFor="full-name" className="sr-only">
            Nombre Completo
          </label>
          <input
            type="text"
            name="name"
            value={name}
            required
            onChange={e=>onChange(e)}
            autoComplete="name"
            className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-orange-500 focus:ring-orange-500"
            placeholder="Nombre Completo"
          />
        </div>

        <div>
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            value={email}
            onChange={e=>onChange(e)}
            name="email"
            type="email"
            required
            className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-orange-500 focus:ring-orange-500"
            placeholder="Email"
          />
        </div>

          <div>
          <label htmlFor="price" className="sr-only">
              Phone
          </label>
          <div className="relative mt-1 rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <span className="text-gray-500 sm:text-sm">+</span>
              </div>
              <input
              type="number"
              name="phone"
              value={phone}
              required
              onChange={e=>onChange(e)}
              className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="51 999 123 456"
              aria-describedby="price-currency"
              />
          </div>
          </div>

        <div>
          <label className="sr-only">
            Asunto
          </label>
          <input
            type="text"
            name="subject"
            value={subject}
            required
            onChange={e=>onChange(e)}
            className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-orange-500 focus:ring-orange-500"
            placeholder="Subject"
          />
        </div>

        <div>
          <label htmlFor="mensaje" className="sr-only">
            Mensaje
          </label>
          <textarea
            id="mensaje"
            name="mensaje"
            value={mensaje}
            required
            onChange={e=>onChange(e)}
            rows={4}
            className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-orange-500 focus:ring-orange-500"
            placeholder="mensaje"
            defaultValue={''}
          />
        </div>

        <div className="px-4 py-5 sm:px-6">
              <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap">
                  <div className="grid-cols-12 ml-4 mt-2 flex">
                      <Switch
                          checked={enabled}
                          onChange={setEnabled}
                          className={`${enabled ? 'bg-rojoficial' : 'bg-gray-300'}
                          col-span-3 relative inline-flex h-[32px] w-[72px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                      >
                          <span
                          aria-hidden="true"
                          className={`${enabled ? 'translate-x-10' : 'translate-x-0'}
                              pointer-events-none inline-block h-[28px] w-[28px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                          />
                      </Switch>
                      <p className="col-span-9 ml-4 text-sm font-regular leading-6 text-gray-600">
                          Acepta Nuestros <span className="text-blue-500"><Link to='/terms'>Terminos de Servicios</Link></span> y <span className="text-blue-500"><Link to='/privacy'>Términos de Provacidad</Link></span>.
                      </p>
                      
                  </div>
                  <div className="ml-4 mt-2 flex-shrink-0">
                      {
                          loading ?
                          <div
                              className="relative inline-flex items-center rounded-md border border-transparent bg-orange-600 px-4 py-3 text-lg font-medium text-white shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                          >
                              <CircleLoader loading={loading} size={25} color="#ffffff"/>
                          </div>
                          :
                          <button
                              type="submit"
                              className="relative inline-flex items-center rounded-md border border-transparent bg-rojoficial px-4 py-3 text-lg font-medium text-white shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                          >
                              Enviar Mensaje
                          </button>

                      }
                  </div>
              </div>
          </div>
      </form>
          </div>
        </div>
    </section>
  );
};

export default ContactSection;
