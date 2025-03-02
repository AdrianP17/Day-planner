import { ChecklistItem } from "@/entitites/ChecklistItem";
import { useChecklistStore } from "@/store/store";
import { Clock, X } from "lucide-react";

interface Props {
    task: ChecklistItem;
    onCheck: (id: number) => void;
    variant: 'pending' | 'completed';
}
function TaskItem({ task, onCheck, variant } : Props) {
  const { removeTask } = useChecklistStore();
  return (
    <li key={task.id} className="flex gap-2 items-center mb-4 relative p-0 group">
        <input
          type="checkbox"
          checked={task.isChecked}
          onChange={() => onCheck(task.id)}
        />
        <p className={variant === 'completed' ? 'line-through' : 'text-nowrap'}>
          {task.title}
        </p>
        <div className={`px-3 text-sm py-1 flex gap-2 items-center rounded-full ${
          variant === 'completed' ? 'bg-stone-300 text-black' : 'bg-[#9AD09B] text-[#171717]'
        }`}>
          <Clock size={12} />
          {task.hours > 0 && task.minutes > 0 ? (
            <p className="">{task.hours}h {task.minutes}m</p>
          ) : task.hours > 0 ? (
            <p className="">{task.hours}h</p>
          ) : (
            <p className="">{task.minutes}m</p>
          )}
        </div>
        <button className="absolute cursor-pointer right-0 top-[3px] p-1 opacity-0 group-hover:opacity-100 transition rounded-full text-slate-400 hover:text-slate-600"
        onClick={() => removeTask(task.id)}>
            <X size={16} />
        </button>
      </li>
  )
}
export default TaskItem