import { useEffect, useState } from "react"
import { deleteTodoapi, retrieveAllTodosFOrUsername } from "./api/TodoApiService"
import { useAuth } from "./security/AuthContext"
import { useNavigate } from "react-router-dom"

export default function ListTodosComponent(){
    const today=new Date()
    const authContext=useAuth()
    const username=authContext.username;
    const navigate=useNavigate()
    const targetDate=new Date(today.getFullYear()+12,today.getMonth(),today.getDay())

    const [todos,setTodos]=useState([])
    const [message,setMessage]=useState(null)
    // const todos=[
    //                 // {id:1,description:"react",done:false,targetDate:targetDate},
    //                 // {id:2,description:"learn spring",done:false,targetDate:targetDate},
    //                 // {id:3,description:"learn devops",done:false,targetDate:targetDate}
    //             ]
    
    useEffect(
        ()=>{refreshTodos()},[]
    )

    function refreshTodos(){
    retrieveAllTodosFOrUsername(username).then(response=>{console.log(response)
     setTodos(response.data)}).catch(error=>console.log(error))
    }

    function deletetodo(id){
        console.log('clicked '+id);
        deleteTodoapi(username,id).then(
            ()=>{
                setMessage(`Delete of todo with = ${id} successful`)
                refreshTodos()
            }
        ).catch(error=>console.log(error))
    }
    function addNewTodo(){
        navigate(`/todos/-1`)
    }
    function updatetodo(id){
        navigate(`/todos/${id}`)
    }

    return(
      <div className="container">
        <h1>Things you want to do</h1>
        {message && <div className="alert alert-warning">{message}</div>}
            <div>
                <table className="table">
                    <thead>
                            <tr>
                                <th>Description</th>
                                <th>Done?</th>
                                <th>Target Date</th>
                                <th>Delete</th>
                                <th>Update</th>
                            </tr>
                    </thead>
                    <tbody>
                        {
                            todos.map(
                                todo => (
                                    <tr key={todo.id}>
                                        
                                        <td>{todo.description}</td>
                                        <td>{todo.done.toString()}</td>
                                        <td>{todo.targetDate.toString()}</td>
                                        <td><button className="btn btn-warning" onClick={()=>deletetodo(todo.id)}>Delete</button></td>
                                        <td><button className="btn btn-success" onClick={()=>updatetodo(todo.id)}>Update</button></td>
                                    </tr>
                                )
                            )
                        } 
                    </tbody>
                </table>
            </div>
            <div className="btn btn-success m-5" onClick={addNewTodo}>Add New Todo</div>
      </div>
    )
  }



  
  