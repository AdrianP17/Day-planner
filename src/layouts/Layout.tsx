import { Outlet } from "react-router"



function Layout() {
  return (
    <div className="min-h-screen bg-[#171717] text-white">
        <main>
          <Outlet />
        </main>
    </div>
  )
}
export default Layout