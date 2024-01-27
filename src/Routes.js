// !En esta sección manejamos todas nuestras rutas
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
import Error404 from "containers/errors/Error404";

import Home from "containers/pages/Home";
import Contact from "containers/pages/Contact";
import Inicio from "containers/pages/Incio";
import AlquilerAmbiente from "containers/pages/AlquilerAmbientes"
import AcercaNosotros from "containers/pages/AcercaNosotros";
import ComercioExterior from "containers/pages/ComercioExteterior"
import CapacitacionEmpresarial from "containers/pages/CapacitacionEmpresarial"
import CentralRiesgos from "containers/pages/CentralRiesgos"
import BolsaTrabajo from "containers/pages/BolsaTrabajo"
import PublicacionTrabajos from "containers/pages/PublicacionTrabajos";
import Category from "containers/pages/Category";  
import Search from 'containers/pages/Search';
import PostDetail from 'containers/pages/PostDetail';

import OptIn from 'containers/pages/OptIn';
import OptInCTA from 'containers/pages/OptInCTA';
import Ecommerce from 'containers/pages/cases/Ecommerce';
import JavascriptDev from 'containers/pages/Alquileres/Alquiler';


import { AnimatePresence } from 'framer-motion'

 
function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence>
          <Routes location={location} key={location.pathname}>
              {/*Error display*/ }
              <Route path="*" element={<Error404 />} />

              {/* Home Display */}
              <Route path="/Nosotros" element={<AcercaNosotros />} />
              <Route path="/" element={<Home />} />
              <Route path="/Inicio" element={<Inicio />} />
              <Route path="/Comunicacion" element={<Contact />} />
              <Route path="/CapacitacionEmpresarial" element={<CapacitacionEmpresarial/>} />
              <Route path="/AlquilerAmbientes" element={<AlquilerAmbiente/>} />
             

              <Route path="/BolsaTrabajo" element={<BolsaTrabajo/>} />
              <Route path="/PublicacionTrabajos" element={<PublicacionTrabajos/>} />
              <Route path="/category/:slug" element={<Category/>} />
              <Route path="/s=:term" element={<Search />} />
              <Route path="/blog/:slug" element={<PostDetail />} />

              <Route path="/ComercioExterior" element={<ComercioExterior/>} />

              <Route path="/ebook" element={<OptIn />} />
              <Route path="/ebook/training" element={<OptInCTA />} />


              <Route path="/ecommerce" element={<Ecommerce />} />
              <Route path="/AlquilerAmbientes/informacion" element={<JavascriptDev />} />

            </Routes>
        </AnimatePresence>
    
  );
}

export default AnimatedRoutes;


