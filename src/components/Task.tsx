import { Trash } from 'phosphor-react'
import style from './Task.module.css'

interface TaskProps {
  id: string,
  content: string
  isComplete: boolean
  onChangeTaskIsComplete: (id: string) => void
  onDeleteTask: (id: string) => void
}

export function Task({id, content, isComplete, onChangeTaskIsComplete, onDeleteTask }: TaskProps) {
  function handleChangeTaskIsComplete() {
    onChangeTaskIsComplete(id)
  }

  function handleDeleteTask() {
    onDeleteTask(id)
  }

  return (
    <div className={style.task}>
      <input type="checkbox" checked={isComplete} onChange={handleChangeTaskIsComplete} />
      <span>{content}</span>

      <button title="Deletar Tarefa" onClick={handleDeleteTask}>
        <Trash />
      </button>
    </div>
  )
}