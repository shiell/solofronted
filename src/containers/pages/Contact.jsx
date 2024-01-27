import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"
import { useEffect, useState  } from "react"
import { Helmet } from 'react-helmet-async';

import PreguntasFrecuentes from "components/Comunic-Contact/PreguntasFrecuentes";
import Guia from "components/Comunic-Contact/Guia";
import Libros from "components/Comunic-Contact/Libros";

function Contact(){ //v03 m 05:15
    

    return(
        <Layout>

     
            <Helmet>
            <title>Ciee | Contact us</title>
            <meta name="description" content="Agencia de software y marketing digital. Servicios de creacion de pagina web y desarrollo de aplicaciones." />
            <meta name="keywords" content='agencia de software, agencia de marketing, creacion de pagina web' />
            <meta name="robots" content='all' />
            <link rel="canonical" href="https://www.murkiva.com/" />
            <meta name="author" content='Murkiva' />
            <meta name="publisher" content='Murkiva' />

            {/* Social Media Tags */}
            <meta property="og:title" content='Murkiva | Software Agency' />
            <meta property="og:description" content='Agencia de software y marketing digital. Servicios de creacion de pagina web y desarrollo de aplicaciones.' />
            <meta property="og:url" content="https://www.murkiva.com/" />
            <meta property="og:image" content='https://bafybeicwrhxloesdlojn3bxyjqnxgsagtd4sl53a7t4cn4vfe2abmybzua.ipfs.w3s.link/lightbnuilbg.jpg' />

            <meta name="twitter:title" content='Murkiva | Software Agency' />
            <meta
                name="twitter:description"
                content='Agencia de software y marketing digital. Servicios de creacion de pagina web y desarrollo de aplicaciones.'
            />
            <meta name="twitter:image" content='https://bafybeicwrhxloesdlojn3bxyjqnxgsagtd4sl53a7t4cn4vfe2abmybzua.ipfs.w3s.link/lightbnuilbg.jpg' />
            <meta name="twitter:card" content="summary_large_image" />
            </Helmet>

        
            <Navbar/>
            <PreguntasFrecuentes/>
            <Guia/>
            <Libros/>

            

                <Footer/>
        </Layout>
    )
}
export default Contact