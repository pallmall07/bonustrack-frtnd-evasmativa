function FiltroEspecie({ especieSeleccionada, onEspecieChange }) {
  const especies = ['Todas', 'Perro', 'Gato', 'Otro']

  const styles = {
    contenedor: {
      backgroundColor: 'white',
      padding: '20px',
      borderRadius: '12px',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
      marginBottom: '30px',
    },
    titulo: {
      margin: '0 0 16px 0',
      color: '#333',
      fontSize: '18px',
      fontWeight: '600',
    },
    botonesContenedor: {
      display: 'flex',
      gap: '12px',
      flexWrap: 'wrap',
    },
    boton: {
      padding: '10px 16px',
      border: '2px solid #ddd',
      backgroundColor: '#f8f9fa',
      color: '#333',
      borderRadius: '8px',
      cursor: 'pointer',
      fontSize: '14px',
      fontWeight: '600',
      transition: 'all 0.3s ease',
      whiteSpace: 'nowrap',
    },
    botonActivo: {
      backgroundColor: '#007bff',
      color: 'white',
      borderColor: '#0056b3',
      boxShadow: '0 4px 12px rgba(0, 123, 255, 0.4)',
    },
  }

  return (
    <div style={styles.contenedor}>
      <h3 style={styles.titulo}>Filtrar por especie:</h3>
      <div style={styles.botonesContenedor}>
        {especies.map((especie) => (
          <button
            key={especie}
            style={{
              ...styles.boton,
              ...(especieSeleccionada === especie ? styles.botonActivo : {}),
            }}
            onMouseEnter={(e) => {
              if (especieSeleccionada !== especie) {
                e.target.style.borderColor = '#007bff'
                e.target.style.backgroundColor = '#e7f1ff'
                e.target.style.transform = 'translateY(-2px)'
              }
            }}
            onMouseLeave={(e) => {
              if (especieSeleccionada !== especie) {
                e.target.style.borderColor = '#ddd'
                e.target.style.backgroundColor = '#f8f9fa'
                e.target.style.transform = 'translateY(0)'
              }
            }}
            onClick={() => onEspecieChange(especie)}
          >
            {especie === 'Todas' && '🐾'}
            {especie === 'Perro' && '🐕'}
            {especie === 'Gato' && '🐱'}
            {especie === 'Otro' && '🐾'}
            {' '}
            {especie}
          </button>
        ))}
      </div>
    </div>
  )
}

export default FiltroEspecie
