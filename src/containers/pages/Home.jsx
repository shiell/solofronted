import Footer from "components/navigation/Footer";
import Navbar from "components/navigation/Navbar";
import Layout from "hocs/layouts/Layout";
import ServiciosHome from "components/Home/ServiciosHome";


import LogoCloud from "components/Home/LogoCloud";

import Carousel from "components/Home/Carrusel";
import VideoCIEE from "components/Home/videoCIEE.js"
import { useEffect } from "react";
import CardBeneficios from "components/Home/CardsBeneficios";
import PrimeraInformacion from "components/Home/PrimeraInformación"

import TServiciosmesss from "components/Home/ContactHome";
import Fotos from "components/Home/fotos"
import Metricas from "components/Home/LoQueValoramos";
import LinkBolsaTrabajo from "components/Home/LinkBolsaTrabajo";
import { Helmet } from "react-helmet-async";



function Home(){
    useEffect(() =>{ // funcion para que en el home inicio desde arriba
    window.scrollTo(0,0)
    },[])
    return(
        <Layout>  
            <Helmet>
                <title>CIEE | Home</title>
                <meta name="description" content="multiples espacios para todo tipo de eventos"/>
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
            <Carousel />
            <PrimeraInformacion/>
            <VideoCIEE/>
            <ServiciosHome/>
            <Fotos/>

            
            <LinkBolsaTrabajo/>

            <Metricas/>
            <LogoCloud/>
            <TServiciosmesss/>

            {/*<UseCases/> {/*--- */}
            
            {/*<CTA/>*/}

            </div>
            <Footer/>
        </Layout>
    )
}

export default Home