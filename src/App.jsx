import './App.css'
import { TareasContenedor } from './components/TareasContenedor'
import { AddTareas } from './components/AddTareas'
import { useState } from 'react'
import { TareasCompletadasContenedor } from './components/TareasCompletadasContenedor'

export function App () {
  const [tareas, setTareas] = useState([])
  const [tareasCompletadas, setTareasCompletadas] = useState([])

  const agregarTareas = (newTarea) => {
    setTareas([newTarea, ...tareas])
  }

  const agregarTareasCompletadas = (newTareaCompletada) => {
    setTareasCompletadas([newTareaCompletada, ...tareasCompletadas])
  }

  const completarTarea = (tareaCompletada) => {
    const tareasActualizadas = tareas.filter(tarea => {
      return tarea.title + tarea.description !== tareaCompletada.title + tareaCompletada.description
    })
    setTareas(tareasActualizadas)
  }

  const limpiarHistorial = () => {
    setTareasCompletadas([])
  }

  return (
    <div className='container'>
      <h1>TO DO APP</h1>
      <div className='grid'>
        <AddTareas agregarTareas={agregarTareas} tareas={tareas} />
        <TareasContenedor tareas={tareas} agregarTareasCompletadas={agregarTareasCompletadas} completarTarea={completarTarea} />
        <TareasCompletadasContenedor tareasCompletadas={tareasCompletadas} limpiarHistorial={limpiarHistorial} />
      </div>
    </div>
  )
}
