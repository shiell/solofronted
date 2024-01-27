import { connect } from 'react-redux';
import logo_ciee from 'assets/img/Logociee.png';

const Navigation = {
  company: [
    { name: 'Centro de Capacitación Empresarial', href: '#' },
    { name: 'Alquiler de Ambientes', href: '#' },
    { name: 'Central de Riesgos', href: '#' },
    { name: 'Bolsa de Trabajo', href: '#' },
    { name: 'Comercio Exterior', href: '#' },
  ],
};

function Footer() {
  return (
    <footer className="bg-plomo bg-opacity-90">
      <div className="py-10  w-full">
        <div className="xl:mx-14 grid grid-cols-1 lg:grid-cols-3 gap-20">
            <div className="px-8 lg:px-0 flex items-center justify-center">
              <div>
              <img
                src={logo_ciee}
                alt=""
                width={150}
                height={140}
                className=""
              />
              <p className="text-sm text-azul font-rale font-bold pt-6">
                Asociate y sé parte de la familia
              </p>
              <button
                type="button"
                className="nl-12 relative inline-flex items-center rounded-md border border-transparent bg-azuls px-16 py-2 text-sm font-medium text-white shadow-sm hover:bg-textoplomo focus:outline-none focus:ring-2 focus:ring-azul focus:ring-offset-2 mt-2"
              >
                Asociarme
              </button>
              </div>
            </div>

            <div className="px-8 lg:px-0">
              <h3 className="text-base font-medium text-red-600 font-rale-800">
                <b>CÁMARA INTERNACIONAL DE EMPRESARIOS Y EMPRENDEDORES</b>
              </h3>
              <p className="text-sm text-textoplomo font-ralew pt-2">
                La Cámara Internacional de Empresarios y Emprendedores es una
                organización sin fines de lucro que reúne a emprendedores de todo
                el mundo. Su objetivo es conectar a emprendedores, proporcionarles
                recursos y oportunidades, y apoyar su crecimiento y éxito.
              </p>
            </div>

            <div className="px-8 lg:px-0 flex items-center justify-center">
              <div>
              <h3 className="text-base font-medium text-red-600">
                <b>NUESTROS SERVICIOS</b>
              </h3>
              <ul role="list" className="mt-4 space-y-1">
                {Navigation.company.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-sm font-ralew text-textoplomo hover:text-rojo"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
              </div>
            </div>
        </div>
        <div className="mt-12 border-t border-gray-300 pt-8">
          <p className="text-sm text-textoplomo xl:text-center font-ralew">
            Copyright &copy; 2023. Cámara Internacional de Empresarios y
            Emprendedores. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(Footer);
