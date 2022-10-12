import { ChangeEvent, InvalidEvent, useRef, useState } from 'react'
import { FloppyDisk, PencilSimple, Trash } from 'phosphor-react'

import style from './Task.module.css'
interface TaskProps {
  id: string,
  content: string
  isComplete: boolean
  onChangeTaskIsComplete: (id: string) => void
  onDeleteTask: (id: string) => void
  onEditTask: (id: string, newContent: string) => void
}

export function Task({id, content, isComplete, onChangeTaskIsComplete, onDeleteTask, onEditTask }: TaskProps) {
  const [editTask, setEditTask] = useState(false)
  const [newTaskContent, setNewTaskContent] = useState(content)

  const editTaskForm = useRef<HTMLFormElement>(null)
  
  function handleChangeTaskIsComplete() {
    onChangeTaskIsComplete(id)
    setEditTask(false)
  }

  function handleDeleteTask() {
    onDeleteTask(id)
  }

  function handleEditTask() {
    if (!handleVerifyFormValidity()) {
      onEditTask(id, newTaskContent)
      handleEditTaskArea()
    }
  }

  function handleEditTaskArea() {
    setEditTask(!editTask)
  }

  function handleNewTaskContent(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('')
    setNewTaskContent(event.target.value)
  }

  function handleNewTaskInvalidContent(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('Campo é obrigatório!')
  }

  function handleVerifyFormValidity() {
    if (editTaskForm.current) {
      const status = !editTaskForm.current.checkValidity()

      if (status) editTaskForm.current.reportValidity()

      return status
    }
  }

  return (
    <div className={style.task}>
      <input type="checkbox" checked={isComplete} onChange={handleChangeTaskIsComplete} />
      {!editTask ? <span>{content}</span> : (
        <form ref={editTaskForm}>
          <textarea
            placeholder="Editar a tarefa"
            value={newTaskContent}
            rows={3}
            required
            onChange={handleNewTaskContent}
            onBlur={handleEditTask}
            onInvalid={handleNewTaskInvalidContent}
          />
        </form>
      )}

      <div className={style.taskActions}>
        {editTask && (
          <button title="Salvar Tarefa" className={style.btnSave} onClick={handleEditTask}>
            <FloppyDisk />
          </button>
        )}
        {!isComplete && !editTask && (
          <button title="Editar Tarefa" className={style.btnEdit} onClick={handleEditTaskArea}>
            <PencilSimple />
          </button>
        )}
        <button title="Deletar Tarefa"  className={style.btnDelete} onClick={handleDeleteTask}>
          <Trash />
        </button>
      </div>
    </div>
  )
}