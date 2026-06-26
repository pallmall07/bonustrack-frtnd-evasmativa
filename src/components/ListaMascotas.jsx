import MascotaCard from './MascotaCard'

function ListaMascotas({ mascotas }) {
  const styles = {
    contenedor: {
      width: '100%',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
      gap: '24px',
      padding: '20px',
      maxWidth: '1400px',
      margin: '0 auto',
    },
    mensajeVacio: {
      maxWidth: '1400px',
      margin: '0 auto',
      textAlign: 'center',
      padding: '60px 20px',
      backgroundColor: 'white',
      borderRadius: '12px',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    },
    sinMascotas: {
      margin: '0 0 12px 0',
      color: '#666',
      fontSize: '24px',
      fontWeight: '600',
    },
    subtitulo: {
      margin: '0',
      color: '#999',
      fontSize: '16px',
      fontStyle: 'italic',
    },
  }

  return (
    <div style={styles.contenedor}>
      {mascotas && mascotas.length > 0 ? (
        <div style={styles.grid}>
          {mascotas.map((mascota) => (
            <MascotaCard
              key={mascota.id}
              mascota={mascota}
            />
          ))}
        </div>
      ) : (
        <div style={styles.mensajeVacio}>
          <p style={styles.sinMascotas}>🔍 No hay mascotas que coincidan con tu búsqueda</p>
          <p style={styles.subtitulo}>Intenta cambiar los filtros o la búsqueda</p>
        </div>
      )}
    </div>
  )
}

export default ListaMascotas
