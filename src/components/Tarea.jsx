import '../styles/Tarea.css'
import { Check, Equis } from './Options'

export function Tarea ({ title, description, agregarTareasCompletadas, completarTarea }) {
  const refreshTareaCompletada = () => {
    const newTareaCompletada = { title, description }
    agregarTareasCompletadas(newTareaCompletada)
  }

  const finalizarTarea = () => {
    const tareaFinalizada = { title, description }
    completarTarea(tareaFinalizada)
  }

  return (
    <article className='tarea'>
      <div className='tarea-text'>
        <h3 className='text-title'>{title}</h3>
        <p className='text-description'>{description}</p>
      </div>
      <div className='icons-options'>
        <Check refreshTareaCompletada={refreshTareaCompletada} finalizarTarea={finalizarTarea} />
        <Equis finalizarTarea={finalizarTarea} />
      </div>
    </article>
  )
}
