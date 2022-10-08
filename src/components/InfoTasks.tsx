import styles from './InfoTasks.module.css'

interface InfoTasksProps {
  totalTasks: number
  totalTasksComplete: number
}

export function InfoTasks({ totalTasks, totalTasksComplete }: InfoTasksProps) {
  const totalTasksCompleteIsGreaterThanZero = totalTasksComplete !== 0

  return (
    <div className={styles.info}>
      <h3>Tarefas criadas<span>{totalTasks}</span></h3>
      <h3>Concluídas
        <span>
          {totalTasksCompleteIsGreaterThanZero ?
            `${totalTasksComplete} de ${totalTasks}` 
          : 
            totalTasksComplete
          }
        </span>
      </h3>
    </div>
  )
}