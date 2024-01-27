

const Valores = () => {
  // Estilos de las tarjetas
  const cardStyles = {
    width: '500px',
    height: '300px',

    
    perspective: '1000px',
    display: 'flex',
    justifyContent: 'space-between',
  };

  // Estilos de las caras de las tarjetas
  const cardInnerStyles = {
    width: '100%',
    height: '100%',
    position: 'relative',
    transformStyle: 'preserve-3d',
    transition: 'transform 0.999s',
  };

  const cardFrontBackStyles = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backfaceVisibility: 'hidden',
    display: 'flex',
    alignItems: 'center',
    borderRadius: '10px',
    fontSize: '32px',
    justifyContent: 'center',
    color: '#fff',
  };

  const cardFrontStyle = {
    ...cardFrontBackStyles,
    backgroundColor: '#c1c1d4',
    border: '1px solid #8585aa',
    transform: 'rotateY(0deg)',
   
    // Agregar padding
    
  };

  const cardBackStyle = {
    ...cardFrontBackStyles,
    backgroundColor: '#004665',
    border: '10px solid #005176',
    transform: 'rotateY(180deg)',
    fontSize: '20px',
    padding: '20px', // Agregando padding
    textAlign: 'justify', // Justificar el texto

    
  };

  // Datos de las tarjetas
  const cardContents = [
    { front: 'Responsabilidad', back: 'Abrazamos la responsabilidad en todas nuestras acciones. Nos comprometemos a ser agentes de cambio positivo, asumiendo la responsabilidad de nuestras decisiones y su impacto en la comunidad empresarial global.' },
    { front: 'Empatía', back: 'La empatía es la piedra angular de nuestras relaciones. Valoramos la comprensión y conexión genuina con nuestros miembros, reconociendo que el éxito compartido se construye sobre la base de la empatía mutua.' },
    { front: ' Innovación', back: 'Celebramos la innovación como un motor esencial para el progreso. Buscamos constantemente nuevas formas de abordar desafíos, inspirando a nuestros miembros a pensar de manera creativa y a impulsar el cambio en sus respectivos campos.' },
    { front: ' Integridad', back: 'La integridad es nuestro compromiso inquebrantable. Actuamos con honestidad, transparencia y ética en todas nuestras interacciones, construyendo relaciones sólidas y duraderas basadas en la confianza.' },
  ];

  const handleCardHover = (e) => {
    const cardInner = e.currentTarget.querySelector('.card-inner');
    cardInner.style.transform = 'rotateY(180deg)';
  };

  const handleCardLeave = (e) => {
    const cardInner = e.currentTarget.querySelector('.card-inner');
    cardInner.style.transform = 'rotateY(0deg)';
  };

  return (
    
    <div>
      <h1 className="py-6 lg:py-20 text-3xl lg:text-4xl font-extrabold font-pop text-azuls text-center">Valores</h1>
    <div
      className="cards"
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '20px',
        justifyContent: 'center', // Para centrar en dispositivos más grandes
      }}
    >
      {cardContents.map((content, index) => (
        <div
          className={`card-${index + 1}`}
          key={index}
          style={{ ...cardStyles, marginBottom: '20px' }}
          onMouseEnter={handleCardHover}
          onMouseLeave={handleCardLeave}
        >
          <div className="card-inner" style={cardInnerStyles}>
            <div className="card-front text-4xl text-rose-500 border border-yellow-500" style={cardFrontStyle}>
              <p>{content.front}</p>
            </div>
            <div className=" text-sm" style={cardBackStyle}>
              <p>{content.back}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
     </div>
  );
};

export default Valores;
