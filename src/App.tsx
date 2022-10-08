import { useState } from 'react'

import { EmptyTasks } from './components/EmptyTasks'
import { FormTask } from './components/FormTask'
import { Header } from './components/Header'
import { InfoTasks } from './components/InfoTasks'

import styles from './App.module.css'
import './global.css'
import { Task } from './components/Task'

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

  function handleNewTaskFormatData(newTask: string) {
    return {
      id: (tasks.length+1).toString(),
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
