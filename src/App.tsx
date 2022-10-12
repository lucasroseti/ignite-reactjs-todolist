import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { EmptyTasks, FormTask, Header, InfoTasks, Task } from './components'

import styles from './App.module.css'
import './global.css'

type Task = {
  id: string
  content: string
  isComplete: boolean
}

export function App() {
  const [tasks, setTasks] = useState<Task[]>([])

  const totalTasksCreated = tasks.length
  const totalTasksCompleted = tasks.reduce(function(completed, task) {
    return task.isComplete ? completed+1 : completed
  }, 0)
  const tasksIsEmpty = totalTasksCreated === 0

  function changeTaskIsComplete(id: string) {
    tasks.map(task => {
      if (task.id === id) task.isComplete = !task.isComplete
    })
    setTasks([...tasks])
  }

  function createNewTask(newTask: string) {
    setTasks([...tasks, handleNewTaskFormatData(newTask)])
  }

  function deleteTask(taskToDelete: string) {
    const taskWithoutDeletedOne = tasks.filter(task => task.id !== taskToDelete)
    setTasks([...taskWithoutDeletedOne])
  }

  function editTask(idTaskToEdit: string, newContentTask: string) {
    setTasks(tasks.map(task => {
      if (task.id === idTaskToEdit) task.content = newContentTask
      return task
    }))
  }

  function handleNewTaskFormatData(newTask: string) {
    return {
      id: uuidv4(),
      content: newTask,
      isComplete: false
    }
  }

  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <FormTask createNewTask={createNewTask} />

        <div className={styles.content}>
          <InfoTasks totalTasks={totalTasksCreated} totalTasksComplete={totalTasksCompleted} />

          <main>
            {tasksIsEmpty ? <EmptyTasks /> : (
              <>
                {tasks.map(task => (
                  <Task
                    key={task.id}
                    id={task.id}
                    content={task.content}
                    isComplete={task.isComplete}
                    onChangeTaskIsComplete={changeTaskIsComplete}
                    onDeleteTask={deleteTask}
                    onEditTask={editTask}
                  />
                ))}
              </>
            )}
          </main>
        </div>
      </div>
    </>
  )
}
