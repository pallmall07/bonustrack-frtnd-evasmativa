function MascotaCard({ mascota }) {
  const styles = {
    tarjeta: {
      border: mascota.adopcionUrgente ? '3px solid #ff6b6b' : '2px solid #e0e0e0',
      borderRadius: '12px',
      overflow: 'hidden',
      boxShadow: mascota.adopcionUrgente 
        ? '0 4px 16px rgba(255, 107, 107, 0.3)' 
        : '0 2px 8px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      backgroundColor: 'white',
      position: 'relative',
      cursor: 'pointer',
    },
    tarjetaHover: {
      transform: 'translateY(-4px)',
      boxShadow: mascota.adopcionUrgente 
        ? '0 6px 20px rgba(255, 107, 107, 0.4)' 
        : '0 6px 16px rgba(0, 0, 0, 0.15)',
    },
    imagen: {
      width: '100%',
      height: '250px',
      objectFit: 'cover',
    },
    etiquetaUrgente: {
      position: 'absolute',
      top: '12px',
      right: '12px',
      backgroundColor: '#ff6b6b',
      color: 'white',
      padding: '6px 12px',
      borderRadius: '6px',
      fontSize: '12px',
      fontWeight: '700',
      letterSpacing: '0.5px',
      boxShadow: '0 2px 8px rgba(255, 107, 107, 0.3)',
    },
    info: {
      padding: '20px',
    },
    nombre: {
      margin: '0 0 8px 0',
      fontSize: '24px',
      color: '#333',
      fontWeight: '700',
    },
    especie: {
      margin: '0 0 14px 0',
      color: '#666',
      fontSize: '15px',
      fontWeight: '500',
    },
    detalles: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      marginBottom: '14px',
      padding: '10px',
      backgroundColor: '#f8f9fa',
      borderRadius: '6px',
    },
    detalle: {
      fontSize: '14px',
      color: '#555',
    },
    descripcion: {
      margin: '14px 0',
      color: '#666',
      fontSize: '15px',
      lineHeight: '1.6',
      backgroundColor: '#fff9f0',
      padding: '12px',
      borderLeft: '4px solid #ff9a3d',
      borderRadius: '4px',
    },
    boton: {
      width: '100%',
      padding: '12px',
      backgroundColor: '#007bff',
      color: 'white',
      border: 'none',
      borderRadius: '6px',
      fontSize: '15px',
      fontWeight: '700',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
    },
  }

  return (
    <div 
      style={styles.tarjeta}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = styles.tarjetaHover.transform
        e.currentTarget.style.boxShadow = styles.tarjetaHover.boxShadow
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = styles.tarjeta.boxShadow
      }}
    >
      {mascota.adopcionUrgente && (
        <div style={styles.etiquetaUrgente}>⚠️ URGENTE</div>
      )}
      <img src={mascota.imagen} alt={mascota.nombre} style={styles.imagen} />
      <div style={styles.info}>
        <h2 style={styles.nombre}>{mascota.nombre}</h2>
        <p style={styles.especie}>{mascota.especie} - {mascota.raza}</p>
        <div style={styles.detalles}>
          <span style={styles.detalle}>
            <strong>Edad:</strong> {mascota.edad} año{mascota.edad !== 1 ? 's' : ''}
          </span>
          <span style={styles.detalle}>
            <strong>Género:</strong> {mascota.genero}
          </span>
          <span style={styles.detalle}>
            <strong>Tamaño:</strong> {mascota.tamaño}
          </span>
        </div>
        <p style={styles.descripcion}>{mascota.descripcion}</p>
        <button 
          style={styles.boton}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = '#0056b3'
            e.target.style.boxShadow = '0 4px 12px rgba(0, 123, 255, 0.4)'
            e.target.style.transform = 'scale(1.02)'
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = '#007bff'
            e.target.style.boxShadow = 'none'
            e.target.style.transform = 'scale(1)'
          }}
        >
          {mascota.adoptada ? 'Adoptada ✓' : 'Adoptar'}
        </button>
      </div>
    </div>
  )
}

export default MascotaCard
