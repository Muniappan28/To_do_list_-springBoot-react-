import { createContext, useContext, useState } from "react";
import { executeBasicAuthenticationService } from "../api/HelloWorldApiService";
import { apiclient } from "../api/ApiCLient";

export const AuthContext=createContext()
export const useAuth=()=>useContext(AuthContext)
export default function AuthProvider({children}){
    const [number,setNumber]=useState(0)
    const [isAuthenticated,setAuthenticated]=useState(false)
    const [username,setUsername]=useState(null)
    const [token,setToken]=useState(null)

//     function login(username,password){
//     if(username==='muniappan' && password==="muniappan"){
//         setAuthenticated(true)
//         setUsername(username)
//         console.log("hhii")
//        return true
//     }
//     else{
//         setAuthenticated(false)
//         setUsername(null)
//         return false
//     }
//    }
async function login(username,password){

    const baToken='Basic '+window.btoa(username + ":"+password)
    try{
        const response=await executeBasicAuthenticationService(baToken)

    if(response.status==200){
        setAuthenticated(true)
        setUsername(username)
        setToken(baToken)
        apiclient.interceptors.request.use(
            (config)=>{
                console.log(`intercepting and adding a token`)
                config.headers.Authorization=baToken
                return config
            }
        )
       return true
    }
    else{
        logout()
        return false
   }
    }
   catch(error){
    logout()
    return false
   }
   

}
   function logout(){
    setAuthenticated(false)
    setToken(null)
    setUsername(null)
   }
    return (
        <AuthContext.Provider value={{number,isAuthenticated,login,logout,username,token}}>
            {children}
        </AuthContext.Provider>
    )
}