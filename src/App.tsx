import { EmptyTasks } from './components/EmptyTasks'
import { FormTask } from './components/FormTask'
import { Header } from './components/Header'
import { InfoTasks } from './components/InfoTasks'

import styles from './App.module.css'
import './global.css'
import { Task } from './components/Task'

const tasks = [
  {
    id: '1',
    content: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    isComplete: false
  },
  {
    id: '2',
    content: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    isComplete: false
  },
  {
    id: '3',
    content: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    isComplete: false
  },
  {
    id: '4',
    content: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    isComplete: true
  },
  {
    id: '5',
    content: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    isComplete: true
  }
]

export function App() {
  const tasksIsEmpty = tasks.length === 0

  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <FormTask />

        <div className={styles.content}>
          <InfoTasks totalTasks={5} totalTasksComplete={2} />

          <main>
            {tasksIsEmpty ? <EmptyTasks /> : (
              <>
                {tasks.map(task => (
                  <Task
                    key={task.id}
                    content={task.content}
                    isComplete={task.isComplete}
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
