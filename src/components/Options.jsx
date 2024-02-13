import '../styles/Options.css'

export function Check ({ refreshTareaCompletada, finalizarTarea }) {
  const handleStatus = () => {
    refreshTareaCompletada()
    finalizarTarea()
  }

  return (
    <div onClick={handleStatus} className='option check-div'>
      <svg width='35' height='35' viewBox='0 0 35 35' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M14.5831 22.7296L9.78083 17.9273L7.71875 19.9894L14.5831 26.8537L28.7392 12.6977L26.6771 10.6356L14.5831 22.7296Z' fill='white' />
      </svg>
    </div>
  )
}

export function Equis ({ finalizarTarea }) {
  const handleTarea = () => {
    finalizarTarea()
  }

  return (
    <div onClick={handleTarea} className='option equis-div'>
      <svg width='35' height='35' viewBox='0 0 35 35' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M23.6133 9.25167L17.4256 15.4379L11.2393 9.25167L9.17725 11.3138L15.3635 17.5L9.17725 23.6863L11.2393 25.7483L17.4256 19.5621L23.6133 25.7483L25.6754 23.6863L19.4891 17.5L25.6754 11.3138L23.6133 9.25167Z' fill='white' />
      </svg>
    </div>
  )
}
