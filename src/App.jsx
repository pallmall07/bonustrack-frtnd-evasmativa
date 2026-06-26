import { useState } from 'react'
import { mascotas } from './data/mascotas'
import ListaMascotas from './components/ListaMascotas'
import FiltroEspecie from './components/FiltroEspecie'

function App() {
  const [filtroEspecie, setFiltroEspecie] = useState('Todas')
  const [busqueda, setBusqueda] = useState('')

  // Filtrar mascotas por especie y nombre
  const mascotasFiltradas = mascotas.filter((mascota) => {
    const cumpleFiltroEspecie = 
      filtroEspecie === 'Todas' || mascota.especie === filtroEspecie
    
    const cumpleBusqueda = 
      mascota.nombre.toLowerCase().includes(busqueda.toLowerCase())
    
    return cumpleFiltroEspecie && cumpleBusqueda
  })

  // Contar mascotas con adopción urgente
  const contadorUrgente = mascotas.filter((mascota) => mascota.adopcionUrgente).length

  const styles = {
    appContainer: {
      minHeight: '100vh',
      padding: '20px',
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
    },
    header: {
      textAlign: 'center',
      marginBottom: '30px',
      padding: '30px 20px',
      background: 'white',
      borderRadius: '12px',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    },
    titulo: {
      fontSize: '48px',
      color: '#333',
      marginBottom: '10px',
      fontWeight: '800',
      margin: '0 0 10px 0',
    },
    subtitulo: {
      fontSize: '18px',
      color: '#666',
      fontWeight: '500',
    },
    controles: {
      maxWidth: '1400px',
      margin: '0 auto 30px',
    },
    busquedaContenedor: {
      marginBottom: '20px',
    },
    inputBusqueda: {
      width: '100%',
      padding: '12px 16px',
      fontSize: '15px',
      border: '2px solid #ddd',
      borderRadius: '8px',
      backgroundColor: 'white',
      transition: 'all 0.3s ease',
      fontFamily: 'inherit',
    },
    contadorUrgente: {
      maxWidth: '1400px',
      margin: '0 auto 20px',
      padding: '12px 16px',
      backgroundColor: '#fff5f5',
      border: '2px solid #ff6b6b',
      borderRadius: '8px',
      textAlign: 'center',
      fontWeight: '600',
      color: '#d63031',
      fontSize: '16px',
    },
  }

  return (
    <div style={styles.appContainer}>
      <header style={styles.header}>
        <h1 style={styles.titulo}>🐾 AdoptaPet</h1>
        <p style={styles.subtitulo}>Encuentra tu mascota ideal para adoptar</p>
      </header>

      <div style={styles.controles}>
        <div style={styles.busquedaContenedor}>
          <input
            type="text"
            style={styles.inputBusqueda}
            placeholder="Busca por nombre..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            onFocus={(e) => {
              e.target.style.borderColor = '#007bff'
              e.target.style.boxShadow = '0 0 0 3px rgba(0, 123, 255, 0.1)'
            }}
            onBlur={(e) => {
              e.target.style.borderColor = '#ddd'
              e.target.style.boxShadow = 'none'
            }}
          />
        </div>

        <FiltroEspecie 
          especieSeleccionada={filtroEspecie}
          onEspecieChange={setFiltroEspecie}
        />
      </div>

      {contadorUrgente > 0 && (
        <div style={styles.contadorUrgente}>
          ⚠️ {contadorUrgente} {contadorUrgente === 1 ? 'mascota tiene' : 'mascotas tienen'} adopción urgente
        </div>
      )}

      <ListaMascotas mascotas={mascotasFiltradas} />
    </div>
  )
}

export default App