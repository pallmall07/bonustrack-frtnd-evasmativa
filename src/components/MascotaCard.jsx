import './MascotaCard.css'

function MascotaCard({ mascota }) {
  return (
    <div className="mascota-card">
      <img src={mascota.imagen} alt={mascota.nombre} className="mascota-imagen" />
      <div className="mascota-info">
        <h2>{mascota.nombre}</h2>
        <p className="especie">{mascota.especie} - {mascota.raza}</p>
        <div className="detalles">
          <span className="detalle">
            <strong>Edad:</strong> {mascota.edad} año{mascota.edad !== 1 ? 's' : ''}
          </span>
          <span className="detalle">
            <strong>Género:</strong> {mascota.genero}
          </span>
          <span className="detalle">
            <strong>Tamaño:</strong> {mascota.tamaño}
          </span>
        </div>
        <p className="descripcion">{mascota.descripcion}</p>
        <button className="btn-adoptar">
          {mascota.adoptada ? 'Adoptada ✓' : 'Adoptar'}
        </button>
      </div>
    </div>
  )
}

export default MascotaCard
