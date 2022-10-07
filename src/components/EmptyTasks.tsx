import ClipboardSVG from '../assets/clipboard.svg'

import styles from './EmptyTasks.module.css'

export function EmptyTasks() {
  return (
    <div className={styles.tasksContent}>
      <img src={ClipboardSVG} alt="Clipboard" />
      <p>Você ainda não tem tarefas cadastradas</p>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  )
}