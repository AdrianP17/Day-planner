import { ChevronLeft, ChevronRight, NotebookPen } from "lucide-react"
import { format } from 'date-fns'
import { useEffect, useState } from "react";
import { useChecklistStore } from "@/store/store";
import { ChecklistItem } from "@/entitites/ChecklistItem";
import TaskList from "./TaskList";

function ChecklistDiario() {
  const [todayTasks, setTodayTasks] = useState<ChecklistItem[]>([]);
  const { checklist, toggleTask } = useChecklistStore();
  const [date, setDate] = useState(new Date());
  const getTodayDate = () => format(new Date(), 'dd/MM/yyyy');

  useEffect(() => {

    setTodayTasks(checklist.filter(task => task.date === format(date, 'dd/MM/yyyy')));
  }, [checklist, date])

  const handleCheck = (id: number) => {
    toggleTask(id);
  };

  const getNextDate = () => {
    const nextDate = new Date(date);    
    nextDate.setDate(nextDate.getDate() + 1);
    setDate(nextDate);
  }

  const getPrevDate = () => {
    const prevDate = new Date(date);    
    prevDate.setDate(prevDate.getDate() - 1);
    setDate(prevDate);
  }

  return (
    <div className="p-4 w-full">
      <div>
        {/* Actividades del dia */}
        <p className="text-sm">Actividades del día</p>
        <div className="flex space-x-2">
        <button className="cursor-pointer text-[#9AD09B] opacity-60 hover:opacity-100" onClick={getPrevDate}><ChevronLeft /></button>
        <p className="font-semibold text-lg">{format(date, 'dd/MM/yyyy')}</p>
        <button className="cursor-pointer text-[#9AD09B] opacity-60 hover:opacity-100" onClick={getNextDate}><ChevronRight /></button>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <TaskList
          title="Pendientes"
          tasks={todayTasks.filter(t => !t.isChecked)}
          onCheck={handleCheck}
          variant="pending"
        />
        <TaskList
          title="Completadas"
          tasks={todayTasks.filter(t => t.isChecked)}
          onCheck={handleCheck}
          variant="completed"
        />

      </div>
    </div>
  )
}
export default ChecklistDiario