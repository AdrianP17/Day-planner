import { ChecklistItem } from "@/entitites/ChecklistItem"
import { Archive, Clock } from "lucide-react"
import TaskItem from "./TaskItem"

type Props = {
  title: string
  tasks: ChecklistItem[]
  onCheck: (id: number) => void
  variant: 'pending' | 'completed'
}
function TaskList({ title, tasks, onCheck, variant }: Props) {
  return (
    <ul>
      <p className="text-lg font-semibold mb-1">{title}</p>
      <div className="bg-gray-50 p-4 rounded-xl">
        {tasks.map(task => (
          <TaskItem key={task.id} task={task} onCheck={onCheck} variant={variant} />
        ))}
        {tasks.length === 0 && (
          <div className="flex flex-col items-center gap-2 text-gray-500">
            <Archive />
            <p>No hay tareas</p>
          </div>
        )}
      </div>
    </ul>
  )
}
export default TaskList