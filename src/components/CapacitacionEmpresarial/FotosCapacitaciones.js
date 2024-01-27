import React, { useState, useEffect } from 'react';

const SlideshowGallery = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  useEffect(() => {
    showSlides(slideIndex);
  }, [slideIndex]);

  const plusSlides = (n) => {
    setSlideIndex(slideIndex + n);
  };

  const currentSlide = (n) => {
    setSlideIndex(n);
  };

  const showSlides = (n) => {
    let i;
    const slides = document.getElementsByClassName('mySlides');
    const dots = document.getElementsByClassName('description');
    const captionText = document.getElementById('caption');

    if (n > slides.length) {
      setSlideIndex(1);
    }
    if (n < 1) {
      setSlideIndex(slides.length);
    }

    for (i = 0; i < slides.length; i++) {
      if (slides[i]) {
        slides[i].style.display = 'none';
      }
    }

    for (i = 0; i < dots.length; i++) {
      if (dots[i]) {
        dots[i].className = dots[i].className.replace(' opacity-100', '');
      }
    }

    const currentSlideElement = slides[slideIndex - 1];
    const currentDotElement = dots[slideIndex - 1];

    if (currentSlideElement) {
      currentSlideElement.style.display = 'block';
    }

    if (currentDotElement) {
      currentDotElement.className += ' opacity-100';
    }

    if (currentDotElement && captionText) {
      captionText.innerHTML = currentDotElement.alt;
    }
  };

  return (
    <section className="w-full lg:px-72 bg-azuls lg:py-20 px-6">
            <h2 className="text-4xl text-center tracking-wide font-extrabold font-serif leading-loose mb-4 text-white">
                Nuestros Eventos Realizados
            </h2>

        <div className="shadow-2xl relative w-full">
            
        <div className="mySlides hidden">
          <div className="image1 w-full object-cover">
            <img
              src="https://aulavirtual.pj.gob.pe/wp-content/uploads/2018/11/DSC03764.jpg"
              alt="Dog's Nose"
            />
          </div>
        </div>

        <div className="mySlides hidden">
          <div className="image2 w-full object-cover">
            <img
              src="https://portal.munipuno.gob.pe/sites/default/files/2023-06/Captura%20de%20pantalla%202023-06-15%20085156.png"
              alt="Lawnmower"
            />
          </div>
        </div>

        <div className="mySlides hidden">
          <div className="image3 w-full object-cover">
            <img
              src="https://portal.munipuno.gob.pe/sites/default/files/2022-09/WhatsApp%20Image%202022-09-08%20at%203.51.02%20PM.jpeg"
              alt="Globe"
            />
          </div>
        </div>

        <div className="mySlides hidden">
          <div className="image4 w-full object-cover">
            <img
              src="https://radioondaazul.com/wp-content/uploads/2023/08/IX-asamblea-del-Comite-Colegiado.jpg"
              alt="Optical Illusion"
            />
          </div>
        </div>

        <div className="mySlides hidden">
          <div className="image5 w-full object-cover">
            <img
              src="https://www.perucamaras.org.pe/images/eventos/evi84.jpg"
              alt="Lips"
            />
          </div>
        </div>

        {/* buttons */}
        <a
          className="absolute left-0 inset-y-0 flex items-center -mt-32 px-4 text-white hover:text-gray-800 cursor-pointer text-3xl font-extrabold"
          onClick={() => plusSlides(-1)}
        >
          ❮
        </a>
        <a
          className="absolute right-0 inset-y-0 flex items-center -mt-32 px-4 text-white hover:text-gray-800 cursor-pointer text-3xl font-extrabold"
          onClick={() => plusSlides(1)}
        >
          ❯
        </a>

        {/* image description */}
        <div className="text-center text-white font-light tracking-wider bg-gray-800 py-2">
          <p id="caption"></p>
        </div>

        {/* smaller images under description */}
        <div className="flex">
          <div>
            <img
              className="image1 description h-24 opacity-50 hover:opacity-100 cursor-pointer"
              src="https://aulavirtual.pj.gob.pe/wp-content/uploads/2018/11/DSC03764.jpg"
              onClick={() => currentSlide(1)}
              alt="Dog's Nose"
            />
          </div>
          <div>
            <img
              className="image2 description h-24 opacity-50 hover:opacity-100 cursor-pointer"
              src="https://portal.munipuno.gob.pe/sites/default/files/2023-06/Captura%20de%20pantalla%202023-06-15%20085156.png"
              onClick={() => currentSlide(2)}
              alt="Lawnmower"
            />
          </div>
          <div>
            <img
              className="image3 description h-24 opacity-50 hover:opacity-100 cursor-pointer"
              src="https://portal.munipuno.gob.pe/sites/default/files/2022-09/WhatsApp%20Image%202022-09-08%20at%203.51.02%20PM.jpeg"
              onClick={() => currentSlide(3)}
              alt="Globe"
            />
          </div>
          <div>
            <img
              className="image4 description h-24 opacity-50 hover:opacity-100 cursor-pointer"
              src="https://randomwordgenerator.com/img/picture-generator/55e8d24b4257ac14f1dc8460962e33791c3ad6e04e507440752972d3924cc6_640.jpg"
              onClick={() => currentSlide(4)}
              alt="Optical Illusion"
            />
          </div>
          <div>
            <img
              className="image5 description h-24 opacity-50 hover:opacity-100 cursor-pointer"
              src="https://www.perucamaras.org.pe/images/eventos/evi84.jpg"
              onClick={() => currentSlide(5)}
              alt="Lips"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SlideshowGallery;
