import { Trash } from 'phosphor-react'
import style from './Task.module.css'

interface TaskProps {
  content: string
  isComplete: boolean
}

export function Task({ content, isComplete }: TaskProps) {
  return (
    <div className={style.task}>
      <input type="checkbox" checked={isComplete} />
      <span>{content}</span>

      <button title="Deletar Tarefa">
        <Trash />
      </button>
    </div>
  )
}