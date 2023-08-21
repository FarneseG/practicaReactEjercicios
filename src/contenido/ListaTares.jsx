import Tareas from "./Tareas";
const ListaTares = ({ tareas, eliminar, agregar }) => {
    return (
      <div className="task-list">
        {tareas.map(tarea => (
          <Tareas key={tarea.id} tarea={tarea} eliminar={eliminar} agregar={agregar} />
        ))}
      </div>
    );
  };
  
  export default ListaTares;