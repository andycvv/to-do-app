import { useState } from 'react'
import '../styles/AddTareas.css'
import { Toggle } from './Toggle'

export function AddTareas ({ agregarTareas, tareas, selectTheme, theme }) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const handleTitle = (e) => {
    const newTitle = e.target.value
    setTitle(newTitle)
  }

  const handleDescription = (e) => {
    const newDescription = e.target.value
    setDescription(newDescription)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (title.trim() === '' || description.trim() === '') return

    const newTarea = { title, description }

    const tareaDuplicada = tareas.find(tarea => tarea.title === newTarea.title && tarea.description === newTarea.description)
    if (tareaDuplicada) return

    agregarTareas(newTarea)
  }

  return (
    <div className='grid-item'>
      <form onSubmit={handleSubmit} className='grid-form'>
        <h2>Agrega una tarea</h2>
        <div className='form-inputs'>
          <input
            value={title}
            onChange={handleTitle}
            className='input-title'
            placeholder='Título'
            maxLength={30}
          />
          <textarea
            value={description}
            onChange={handleDescription}
            className='input-description'
            placeholder='Descripción'
            maxLength={130}
          />
        </div>
        <div className='button-toggle'>
          <button className='add-button'>Añadir</button>
          <Toggle selectTheme={selectTheme} theme={theme} />
        </div>
      </form>
    </div>
  )
}
