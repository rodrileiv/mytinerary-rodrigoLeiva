import Label from "./Label" 
import Display from "./Display"
import { useState } from "react"

export default function NavBar() {
    let [show,setShow] = useState(false)
    let options = [
        {to: "/", title: "Home"},
        {to: "cities", title: "Cities"},
        {to: "signIn", title: "Sign In", backgroundColor: "#4F46E5", color: "white"}
    ]

    return (
        <>
            <header className="h-[64px] bg-gray-500 flex justify-between px-[80px]">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-[50px] h-[50px] bg-white mt-2 p-[4px] rounded-xl cursor-pointer md:hidden"
                    onClick={() => setShow(!show)}>
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                </svg>
                {show && <Display options={options} />}
                <div className="w-full flex justify-between items-center bg-gray-500">
                    <img src="../img/logo.jpg" alt="logo"/>
                    <Label options={options} />
                </div>
            </header>
        </>
    )
}