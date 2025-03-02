
import Timer from "../components/Timer"
import ChecklistDiario from "@/components/ChecklistDiario"
import TaskForm from "@/components/tasks/TaskForm"


function HomePage() {

  return (
    <div className="px-2 container mx-auto">
      <h1 className="text-3xl mb-6">Day Planner</h1>
      <div className="flex flex-col md:flex-row gap-4 mb-4 w-full justify-between">
        <Timer />
        <ChecklistDiario />
        <TaskForm />
      </div>
    </div>
  )
}
export default HomePage