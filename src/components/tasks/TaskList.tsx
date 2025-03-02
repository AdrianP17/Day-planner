import { ChecklistItem } from "@/entitites/ChecklistItem"
import { Archive } from "lucide-react"
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
      <p className="text-lg mb-2">{title} ({tasks.length})</p>
      <div className="bg-[#333131] p-4 rounded-xl">
        {tasks.map(task => (
          <TaskItem key={task.id} task={task} onCheck={onCheck} variant={variant} />
        ))}
        {tasks.length === 0 && (
          <div className="flex flex-col items-center gap-2 text-stone-500">
            <Archive />
            <p>No hay tareas</p>
          </div>
        )}
      </div>
    </ul>
  )
}
export default TaskList