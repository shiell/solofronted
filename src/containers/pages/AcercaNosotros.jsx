import Footer from "components/navigation/Footer";
import Navbar from "components/navigation/Navbar";
import Layout from "hocs/layouts/Layout";

import Team from "components/AcercaNosotros/Team";

import QueEs from "components/AcercaNosotros/QueEs";
import QuienesSomos from "components/AcercaNosotros/QuienesSomos";
import VisionyMision from "components/AcercaNosotros/VisionyMision";
import Conectate from "components/AlquilerAmbientes/Contactanos";
import Valores from "components/AcercaNosotros/Valores";
import Nosotros from "components/AcercaNosotros/Nosotros";
import Asociate from "components/AcercaNosotros/Asociate";



function AcercaNosotros(){
    return(
        <Layout> 
          

            <Navbar/>
            <div >
                <Nosotros/>
                <QueEs/>
                <QuienesSomos/>        
                <VisionyMision/>
                <Valores/>
                <Team/>
                <Asociate/>
                <Conectate/>
                

                
            </div>
            <Footer/>
        </Layout>
    )
}

export default AcercaNosotros