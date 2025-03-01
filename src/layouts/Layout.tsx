import { PropsWithChildren } from "react"
import { Outlet } from "react-router-dom"



function Layout({ children }: PropsWithChildren) {
  return (
    <div className="border-2 border-gray-900 p-4">
        <p>1</p>
        <Outlet />
        {children}
    </div>
  )
}
export default Layout