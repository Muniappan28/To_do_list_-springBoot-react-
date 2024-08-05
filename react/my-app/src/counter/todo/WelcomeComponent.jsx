import { BrowserRouter,Routes, Route, useNavigate, useParams, Link } from "react-router-dom"
import axios from "axios"
import { useState } from "react"
import { retrieveHellowroldBean, retrieveHellowroldpathvariable } from "./api/HelloWorldApiService"
import { useAuth } from "./security/AuthContext"
export default function WelcomeComponent(){
    const {username}=useParams()

    const [message,setMessage]=useState(null)
    const authContext=useAuth()
    function callhelloworldrestapi(){
      
   //   axios.get('http://localhost:8080/hello-world').then((response)=>successfulResponse(response)).catch((error)=>errorResponse(error)).finally(()=>console.log("cleanUp"))
   //   retrieveHellowroldBean().then((response)=>successfulResponse(response)).catch((error)=>errorResponse(error)).finally(()=>console.log("cleanUp"))
   retrieveHellowroldpathvariable('muniappan',authContext.token).then((response)=>successfulResponse(response)).catch((error)=>errorResponse(error)).finally(()=>console.log("cleanUp"))
    }

    function successfulResponse(reponse){
      console.log(reponse)
      setMessage(reponse.data.message)
    }

    function errorResponse(error){
      console.log(error)
    }

    return(
      <div className="WelcomeComponent">
            <h1>welcome {username}</h1>
            <div>
                Manage your todos -<Link to="/todos"> Go Here</Link>
            </div>
            <div>
              <button className="btn btn-success m-5" onClick={callhelloworldrestapi}>call Hello World </button>
            </div>
            <div className="text-info">{message}</div>
      </div>
    )
  }

  