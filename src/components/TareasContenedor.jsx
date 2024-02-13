import '../styles/TareasContenedor.css'
import { Tarea } from './Tarea'

export function TareasContenedor ({ tareas, agregarTareasCompletadas, completarTarea }) {
  return (
    <div className='grid-item grid-item-big'>
      <h2>Tareas</h2>
      <section className='div-tareas'>
        {
          tareas.map((tarea) => (
            <Tarea
              key={tarea.title + tarea.description}
              title={tarea.title}
              description={tarea.description}
              agregarTareasCompletadas={agregarTareasCompletadas}
              completarTarea={completarTarea}
            />
          ))
        }
      </section>
    </div>
  )
}
