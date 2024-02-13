import '../styles/TareaCompletada.css'

export function TareaCompletada ({ title }) {
  return (
    <article className='tarea-completada'>
      <h3>{title}</h3>
    </article>
  )
}
