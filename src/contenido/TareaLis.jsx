import ListaTares from './ListaTares';
import React, { useState } from 'react';

const Tareafinal = () => {
  const [tareas, setTareas] = useState([]);

  const agregarTarea = text => {
    const nuevatarea = { id: Date.now(), text, completed: false };
    setTareas([...tareas, nuevatarea]);
  };

  const eliminarTarea = tareaId => {
    const updatedTareas = tareas.filter(tarea => tarea.id !== tareaId);
    setTareas(updatedTareas);
  };

  const agreCompletion = tareaId => {
    const updatedTareas = tareas.map(tarea =>
      tarea.id === tareaId ? { ...tarea, completed: !tarea.completed } : tarea
    );
    setTareas(updatedTareas);
  };

  return (
    <div className="Tareafinal">
      <h1>Lista de Tareas</h1>
      <input
        type="text"
        placeholder="Agregar tarea..."
        onKeyDown={e => {
          if (e.key === 'Enter') {
            agregarTarea(e.target.value);
            e.target.value = '';
          }
        }}
      />
      <ListaTares tareas={tareas} eliminar={eliminarTarea} agregar={agreCompletion} />
    </div>
  );
};

export default Tareafinal;