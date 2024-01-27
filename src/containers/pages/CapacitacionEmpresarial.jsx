import Nombrs from "components/CapacitacionEmpresarial/EncabezadoPrincipal";
import Footer from "components/navigation/Footer";
import Navbar from "components/navigation/Navbar";
import Layout from "hocs/layouts/Layout";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import QueEs from "components/CapacitacionEmpresarial/QueEs";
import TeOfrecemos from "components/CapacitacionEmpresarial/TeOfrecemos";
import Eventos from "components/CapacitacionEmpresarial/Eventos";

import FotosCapacitaciones from "components/CapacitacionEmpresarial/FotosCapacitaciones"
import Contactanos from "components/CapacitacionEmpresarial/Contactanos"

function CapacitacionEmpresarial(){
    useEffect(() =>{ // funcion para que en el home inicio desde arriba
        window.scrollTo(0,0)
        },[])
    return(
        <Layout>
            <Helmet>
                <title>CIEE | CapacitacionEmpresarial</title>
                <meta name="description" content="multiples serivicios para todo tipo de habilidades"/>
                <meta name="keywords" content="Capacitacion empresarial, comercio exterior, alquiler de ambientes, central de riesgos, bolsa de trabajo" />
                <meta name="robots" content="all" />
                <link rel="canonical" href="https://www.CIEEempresarial.com" />
                <meta name="author" content="Ethdiv" />
                <meta name="publisher" content="Ethdiv" />


                {/*Social Media Tags // para redes sociales */}
                <meta property="og:title" content="CIEE | CapacitacionEmpresarial" />
                <meta property="og:description" content="multiples serivicios para todo tipo de habilidades" />
                <meta property="og:url" content="https://www.CIEEempresarial.com" />
                <meta property="og:image" content="https://bafybeie3dkjdydulam4igwx2hwaepkkyugze2z7bpohekdi2maqrgaaegq.ipfs.w3s.link/idealogo.png" />
                
                <meta name="twiter:title" content="CIEE | CapacitacionEmpresarial" />
                <meta 
                name="twiter:description" 
                content="multiples serivicios para todo tipo de habilidades" 
                />
                <meta name="twitter:image" content="https://bafybeie3dkjdydulam4igwx2hwaepkkyugze2z7bpohekdi2maqrgaaegq.ipfs.w3s.link/idealogo.png"  />
                <meta name="twitter:card" content="summary_large_image" />

            </Helmet>

            <Navbar/>
            <div className="">
                <Nombrs/>
                <QueEs/>
                <TeOfrecemos/>
                <Eventos/>
                <FotosCapacitaciones/>
                <Contactanos/>
                
            </div>
                <Footer/>
        </Layout>
    )
}

export default CapacitacionEmpresarial