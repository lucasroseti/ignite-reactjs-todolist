import { ChangeEvent, useState } from 'react'
import { PlusCircle } from 'phosphor-react'

import styles from './FormTask.module.css'

export function FormTask() {
  const [newTaskText, setNewTaskText] = useState('')

  const isNewTaskEmpty = newTaskText.length === 0

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTaskText(event.target.value)
  }

  return (
    <form className={styles.formTask}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={newTaskText}
        required
        onChange={handleNewTaskChange}
      />
      <button type="submit" disabled={isNewTaskEmpty}>
        Criar <PlusCircle />
      </button>
    </form>
  )
}