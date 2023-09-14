import { RouterProvider } from "react-router-dom"
import router from './router/router'
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { user_token } from "./store/actions/userActions"
import axios from "axios"

import './App.css'
import 'tailwindcss/tailwind.css';


function App() {
  let dispatch = useDispatch();

  useEffect(() => {
    let url = `http://localhost:7000/api/auth/token`
    let token = localStorage.getItem('token')

    if (token) {
      let configs = { headers: { 'Authorization': `Bearer ${token}` } }

      axios.post(url, null, configs)
        .then(response => dispatch(user_token(response.data.user)))
        .catch(err => console.log(err))
    }

  }, [])



  return (
    <RouterProvider router={router}/>
  )
}

export default App