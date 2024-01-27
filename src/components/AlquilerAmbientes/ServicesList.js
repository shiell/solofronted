import { Link } from "react-router-dom";
import { useState } from "react";

function CaseList({ data, index }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      to={data.href}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className=""
    >
      <div className=" mt-6 flex flex-col self-start bg-white  sm:shrink-0 sm:grow sm:basis-0 shadow-2xl">
        <div className="m-5 rounded-xl">
          <img
            id={data.id}
            className="rounded-sm object-cover object-center w-full h-56"
            src={data.imageUrl}
            alt={data.alt}
          />
        </div>
        <div className="p-6">
          <h5
            className={`mb-2 text-xl font-medium leading-tight ${
              isHovered ? 'text-rojoficial' : 'text-neutral-800'
            }`}
          >
            <b>{data.title}</b>
          </h5>
          <div className="text-sm text-gray-400">
            <p>
              <b>Capacidad:</b> {data.capacity}
            </p>
            <p>
              <b>Asociado:</b> {data.associate}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between bg-white rounded-lg m-6 mt-1">
          <p className="text-green-500 text-xs sm:text-base md:text-xl">
            <b>- Vigente  -</b>
          </p>
          <button className="bg-red-600 text-xs text-white md:text-white md:text-base rounded-md px-6 py-2 md:px-12 md:py-2">
            <b>Detalle</b>
          </button>
        </div>
      </div>
    </Link>
  );
}

export default CaseList;
