import { Clock, NotebookPen } from "lucide-react"
import {format} from 'date-fns'
import { useEffect, useState } from "react";
import { useChecklistStore } from "@/store/store";
import { ChecklistItem } from "@/entitites/ChecklistItem";
import TaskList from "./TaskList";

function ChecklistDiario() {
    const [todayTasks, setTodayTasks] = useState<ChecklistItem[]>([]);
    const { checklist, toggleTask } = useChecklistStore();

    const getTodayDate = () => format(new Date(), 'dd/MM/yyyy');

    useEffect(() => {
      const today = getTodayDate();
      setTodayTasks(checklist.filter(task => task.date === today));
    }, [checklist])
        
    const handleCheck = (id: number) => {
        toggleTask(id);
      };

    return (
        <div>
            <div className="flex gap-2 items-center mb-4">
                <div className="p-3 grid content-center bg-blue-500/50 text-white rounded-full">
                    <NotebookPen size={20} strokeWidth={1.7} />
                </div>
                <h1 className="text-xl">Agrega actividades que quieras realizar</h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
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
        </div>
    )
}
export default ChecklistDiario