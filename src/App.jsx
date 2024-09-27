import './App.css';
import { FormComponent } from './components/FormComponent';
import { SectionComponent } from './components/SectionComponent';
import { ENotesIcon } from './images/ENotesIcon';
import { TaskComponent } from './components/TaskComponent';
import { TaskContainer } from './components/TaskContainer';
import { useState, useEffect } from 'react';
import { ToggleOrderComponent } from './components/ToggleOrderComponent';

function App() {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || []);

  const handleAddTask = (newTask) => {
    const updatedTasks = [...tasks, newTask]; // Añade la nueva tarea al estado
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks)); // Actualiza localStorage
  };

  const handleDeleteTask = (taskTitle) => {
    const updatedTasks = tasks.filter(task => task.title !== taskTitle);
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const click = () => {
    alert("CLICK")
  }

  // Ordenar las tareas por fecha de menor a mayor
  const sortedTasks = [...tasks].sort((a, b) => a.date < b.date ? 1 : -1);


  return (
    <>
      <SectionComponent>
        <div className="relative flex flex-col items-center">
          <ENotesIcon />
          <h1 className="mt-9 text-2xl lg:text-3xl">eNotes</h1>
          <FormComponent onAddTask={handleAddTask} click={click} />

          <TaskContainer>
            {sortedTasks.length === 0 ? (
              <p></p>
            ) : (
              sortedTasks.map((task, index) => (
                <TaskComponent key={index} eliminar={() => handleDeleteTask(task.title)} title={task.title} date={task.date} />
              ))
            )}
          </TaskContainer>
        </div>
      </SectionComponent>
    </>
  );
}

export default App;
