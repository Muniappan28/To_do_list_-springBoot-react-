import { useState } from "react"
import { BrowserRouter,Routes, Route, useNavigate, useParams, Link } from "react-router-dom"
import { useAuth } from "./security/AuthContext"
export default function LoginComponent(){
    const [username,setusername]=useState("muniappan")
    const [password,setpassword]=useState("")
    const [showErrorMessage,setshowErrorMessage]=useState(false)
    const navigate=useNavigate()
    const authContext=useAuth()
    function handleusernamechange(event){
        setusername(event.target.value)
    }

    function handlepasswordchange(event){
        console.log(event.target.value)
        setpassword(event.target.value)
    }

   async function handlesubmit(){
        console.log("hii")
        if(await authContext.login(username,password)){
            navigate(`/welcome/${username}`)
        }
        else{
            setshowErrorMessage(true)
        }
    }

    return(
      <div className="Login">
        {showErrorMessage &&<div className="errormessage">Authenticated failed .</div>}
        <div className="LoginForm">
            <div>
              <label>User Name</label>
              <input type="text" name="username" onChange={handleusernamechange} value={username}/>
            </div>
            <div>
              <label>Password</label>
              <input type="password" name="password" onChange={handlepasswordchange}/>
            </div>
            <div>
              <button type="button" name="login" onClick={handlesubmit}>login</button>
            </div>
        </div>
  
      </div>
    )
  }
  

  