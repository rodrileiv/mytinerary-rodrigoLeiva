import NavBar from "../components/NavBar"
import { Outlet } from "react-router-dom"

export default function NavLayout() {
  return (
    <div className="min-h-screen bg-[#979797] flex flex-col px-20">
        <NavBar/>
        <Outlet/>
    </div>
  )
}