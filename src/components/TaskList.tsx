import { ChecklistItem } from "@/entitites/ChecklistItem"
import { Clock } from "lucide-react"

type Props = {
    title: string
    tasks: ChecklistItem[]
    onCheck: (id: number) => void
    variant: 'pending' | 'completed'
}
function TaskList({title, tasks, onCheck, variant}: Props) {
  return (
    <ul>
    <p>{title}</p>
    {tasks.map(task => (
      <li key={task.id} className="flex gap-2 items-center mb-4">
        <input
          type="checkbox"
          checked={task.isChecked}
          onChange={() => onCheck(task.id)}
        />
        <p className={variant === 'completed' ? 'line-through' : ''}>
          {task.title}
        </p>
        <div className={`px-3 text-sm py-1 flex gap-2 items-center rounded-full ${
          variant === 'completed' ? 'bg-green-50' : 'bg-slate-50'
        }`}>
          <Clock size={12} />
          {task.hours > 0 ? (
            <p className="text-slate-400">{task.hours}h {task.minutes}m</p>
          ) : (
            <p className="text-slate-400">{task.minutes}m</p>
          )}
        </div>
      </li>
    ))}
  </ul>
  )
}
export default TaskList