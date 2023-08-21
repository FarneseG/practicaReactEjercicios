const Tareas = ({ tarea, eliminar, agregar }) => {
    return (
      <div className={`task ${tarea.completed ? 'completed' : ''}`}>
        <h3>{tarea.text}</h3>
        <div className="buttons">
          <button onClick={() => agregar(tarea.id)}>
            {tarea.completed ? 'Marcar como no completada' : 'Marcar como completada'}
          </button>
          <button onClick={() => eliminar(tarea.id)}>Eliminar</button>
        </div>
      </div>
    );
  };
  
  export default Tareas;