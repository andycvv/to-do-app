import '../styles/TareasCompletadasContenedor.css'
import { TareaCompletada } from './TareaCompletada'

export function TareasCompletadasContenedor ({ tareasCompletadas, limpiarHistorial }) {
  const handleClick = (e) => {
    e.preventDefault()

    limpiarHistorial([])
  }

  return (
    <div className='grid-item'>
      <h2>Historial</h2>
      <section className='tareas-completadas-flex'>
        {
          tareasCompletadas.map((tareaCompletada, index) => (
            <TareaCompletada
              key={index}
              title={tareaCompletada.title}
            />
          ))
        }
      </section>
      <button onClick={handleClick} className='button-historial'>Limpiar historial</button>
    </div>
  )
}
