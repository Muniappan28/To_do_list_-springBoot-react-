import axios from "axios";

import { apiclient } from "./ApiCLient";

export const retrieveAllTodosFOrUsername=(username)=>apiclient.get(`/users/${username}/todos`)

export const deleteTodoapi=(username,id)=>apiclient.delete(`/users/${username}/todos/${id}`)

export const retriveTodoapi=(username,id)=>apiclient.get(`/users/${username}/todos/${id}`)

export const updateTodoApi=(username,id,todo)=>apiclient.put(`/users/${username}/todos/${id}`,todo)

export const createTodoApi=(username,todo)=>apiclient.post(`/users/${username}/todos`,todo)