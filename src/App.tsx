import { EmptyTasks } from './components/EmptyTasks'
import { FormTask } from './components/FormTask'
import { Header } from './components/Header'

import styles from './App.module.css'
import './global.css'

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <FormTask />

        <div className={styles.content}>
          <header>
            <h3>Tarefas criadas<span>0</span></h3>
            <h3>Concluídas<span>0</span></h3>
          </header>

          <EmptyTasks />
        </div>
      </div>
    </>
  )
}
