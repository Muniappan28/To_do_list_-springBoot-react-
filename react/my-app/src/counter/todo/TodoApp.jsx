import { useState } from "react"
import "./TodoApp.css"
import LogoutComponent from "./LogoutComponent"
import ListTodosComponent from "./ListTodosComponent"
import ErrorComponent from "./ErrorComponent"
import LoginComponent from "./LoginComponent"
import WelcomeComponent from "./WelcomeComponent"
import { BrowserRouter,Routes, Route, useNavigate, useParams, Link, Navigate } from "react-router-dom"
import FooterComponent from "./FooterComponent"
import HeaderComponent from "./HeaderComponent"
import AuthConextProvider, { useAuth } from "./security/AuthContext"
import TodoComponent from "./TodoComponent"

function AuthenticatedRoute({children}){
    const authContext=useAuth()
    if(authContext.isAuthenticated)
        return children
    return <Navigate to="/"/>
}
export default function TodoApp(){
    return(
        <div className="TodoApp">
            <AuthConextProvider>
                <BrowserRouter>
                <HeaderComponent/>
                        <Routes>
                            <Route path='/' element={<LoginComponent/>}></Route>
                            <Route path="/login" element={<LoginComponent/>}></Route>
                   
                            <Route path="/welcome/:username" element={
                                <AuthenticatedRoute>
                                <WelcomeComponent/>
                                </AuthenticatedRoute>
                            }/>

                            <Route path="/todos" element={
                            <AuthenticatedRoute>
                                <ListTodosComponent/>
                                </AuthenticatedRoute>
                            }></Route>

                            <Route path="/todos/:id" element={
                            <AuthenticatedRoute>
                                <TodoComponent/>
                                </AuthenticatedRoute>
                            }></Route>

                            <Route path="/logout" element={
                            <AuthenticatedRoute> 
                                <LogoutComponent/>
                                </AuthenticatedRoute>}></Route>
                            <Route path="*" element={<ErrorComponent/>}></Route>
                        </Routes>
                 <FooterComponent/>
                </BrowserRouter>
           </AuthConextProvider>
        </div>
    )
}
