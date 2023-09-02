import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import { Outlet } from "react-router-dom"

export default function MainLayout() {
  return (
    <div className="flex flex-col px-10 min-h-screen bg-[#ebebeb] ">
        <NavBar/>
          <Outlet/>
        <Footer/>
    </div>
  )
}