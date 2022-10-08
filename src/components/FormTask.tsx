import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'
import { PlusCircle } from 'phosphor-react'

import styles from './FormTask.module.css'

interface FormTaskProps {
  createNewTask: (task: string) => void
}

export function FormTask({ createNewTask }: FormTaskProps) {
  const [newTaskText, setNewTaskText] = useState('')

  const isNewTaskEmpty = newTaskText.length === 0

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTaskText(event.target.value)
  }

  function handleNewTaskCreate(event: FormEvent) {
    event.preventDefault()
    createNewTask(newTaskText)
    setNewTaskText('')
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Campo é obrigatório!')
  }

  return (
    <form className={styles.formTask} onSubmit={handleNewTaskCreate}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={newTaskText}
        required
        onChange={handleNewTaskChange}
        onInvalid={handleNewTaskInvalid}
      />
      <button type="submit" disabled={isNewTaskEmpty}>
        <span>Criar</span> <PlusCircle />
      </button>
    </form>
  )
}