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
      <div className="flex gap-2 items-center mb-4">
        <div className="p-3 grid content-center bg-blue-500/50 text-white rounded-full">
          <NotebookPen size={20} strokeWidth={1.7} />
        </div>
        <h1 className="text-xl">Agrega actividades que quieras realizar</h1>
      </div>
      <div>
        {/* Actividades del dia */}
        <h2 className="text-lg font-semibold mb-2">Actividades del día {format(date, 'dd/MM/yyyy')}</h2>
        <button onClick={getPrevDate}><ChevronLeft /></button>
        <button onClick={getNextDate}><ChevronRight /></button>
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