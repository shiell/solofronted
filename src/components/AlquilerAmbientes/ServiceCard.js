import React, { useMemo } from "react";
import CaseCard from "components/AlquilerAmbientes/ServicesList";
import { useMediaQuery } from "react-responsive";

export default function CardAmbientes() {

  const posts = useMemo(() => [
    {
      id:"001",
      title: 'REGULACIÓN DE COMERCIO EXTERIOR EN EL PERÚ',
      href: '/',
      description:'En esta sección se brindará información sobre las regulaciones específicas que rigen el comercio exterior en Perú, como los requisitos arancelarios, los procedimientos aduaneros y las licencias y permisos. ',
      imageUrl:
        'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

    },

    {
      id:"002",
      title: 'MERCADOS LOCALES E INTERNACIONALES ',
      href: '/AlquilerAmbientes',
      description:
        'En esta sección se proporcionará información sobre los principales mercados internacionales para los productos y servicios peruanos, así como sobre las tendencias comerciales y los factores que afectan a la demanda.',
      imageUrl:
        'https://images.unsplash.com/photo-1562235357-57c00cf7c441?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
     
    },

    {
      id:"003",
      title: 'PERMISOS FUNDAMENTALES PARA IMPORTAR Y EXPORTAR',
      href: '/BolsaTrabajo',
      description:
        'En esta sección se brindará información sobre las regulaciones específicas que rigen el comercio exterior en Perú, como los requisitos arancelarios, los procedimientos aduaneros y las licencias y permisos.',
      imageUrl:
        'https://img.freepik.com/vector-gratis/buscando-iconos-trabajo_98292-1238.jpg?w=740&t=st=1704682966~exp=1704683566~hmac=efdc8f53778d50834dda9b44cb198a4bc82bf9da71402510b94406fdee95185d',
    },
    {
      id:"004",
      title: 'MERCADOS LOCALES E INTERNACIONALES ',
      href: '/AlquilerAmbientes',
      description:
        'En esta sección se proporcionará información sobre los principales mercados internacionales para los productos y servicios peruanos, así como sobre las tendencias comerciales y los factores que afectan a la demanda.',
      imageUrl:
        'https://images.unsplash.com/photo-1562235357-57c00cf7c441?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
     
    },
    {
      id:"005",
      title: 'MERCADOS LOCALES E INTERNACIONALES ',
      href: '/AlquilerAmbientes',
      description:
        'En esta sección se proporcionará información sobre los principales mercados internacionales para los productos y servicios peruanos, así como sobre las tendencias comerciales y los factores que afectan a la demanda.',
      imageUrl:
        'https://images.unsplash.com/photo-1562235357-57c00cf7c441?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
     
    },


    ], []);
 
    const isLargeScreen = useMediaQuery({ minWidth: 1124 });

    const slidesToShow = isLargeScreen ? 2 : 1;
  
    return (
      <div className="bg-gray-100 relative max-w-[1970px] overflow-hidden pb-10 lg:pb-16 border border-orange-500 py-20">
          <h2 className="text-2xl md:text-3xl lg:text-4xl  font-bold tracking-tight text-azuls text-center border border-pink-500 px-6 md:px-10 xl:px-24 mb-10">
            Te Ofrecemos Ambientes Para: 
        </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 xl:mx-24 mx-6 md:mx-10">
            {posts.map((post, index) => (
              <CaseCard key={post.id} index={index} data={post} />
            ))}
          </div>
      </div>
    );
  }