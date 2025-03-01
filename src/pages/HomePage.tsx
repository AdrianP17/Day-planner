
import Timer from "../components/Timer"
import ChecklistDiario from "@/components/ChecklistDiario"
import TaskForm from "@/components/TaskForm"


function HomePage() {
 
  return (
    <div className="px-2 bg-[#e6e6e6] min-h-screen">
      <h1 className="text-3xl mb-6">Day Planner</h1>
      <Timer />
      <ChecklistDiario />
      <TaskForm />
    </div>
  )
}
export default HomePage