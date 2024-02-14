import './App.css'
import { TareasContenedor } from './components/TareasContenedor'
import { AddTareas } from './components/AddTareas'
import { useEffect, useState } from 'react'
import { TareasCompletadasContenedor } from './components/TareasCompletadasContenedor'

export function App () {
  const [tareas, setTareas] = useState(() => {
    return JSON.parse(localStorage.getItem('tareas')) || []
  })
  const [tareasCompletadas, setTareasCompletadas] = useState(() => {
    return JSON.parse(localStorage.getItem('tareasCompletadas')) || []
  })
  const [theme, setTheme] = useState(() => {
    if (JSON.parse(localStorage.getItem('theme'))) {
      document.querySelector('body').classList.add('dark-theme')
      return true
    } else {
      return false
    }
  })

  const agregarTareas = (newTarea) => {
    setTareas([newTarea, ...tareas])
  }

  const agregarTareasCompletadas = (newTareaCompletada) => {
    setTareasCompletadas([newTareaCompletada, ...tareasCompletadas])
  }

  const selectTheme = (themeSelected) => {
    setTheme(themeSelected)
  }

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme))
  }, [theme])

  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(tareas))
  }, [tareas])

  useEffect(() => {
    localStorage.setItem('tareasCompletadas', JSON.stringify(tareasCompletadas))
  }, [tareasCompletadas])

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
        <AddTareas agregarTareas={agregarTareas} tareas={tareas} selectTheme={selectTheme} theme={theme} />
        <TareasContenedor tareas={tareas} agregarTareasCompletadas={agregarTareasCompletadas} completarTarea={completarTarea} />
        <TareasCompletadasContenedor tareasCompletadas={tareasCompletadas} limpiarHistorial={limpiarHistorial} />
      </div>
    </div>
  )
}
