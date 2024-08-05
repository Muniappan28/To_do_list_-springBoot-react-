import axios from "axios";

// export function retrieveHellowroldBean(){
//     return axios.get('http://localhost:8080/hello-world-bean')
// }

import { apiclient } from "./ApiCLient";
// export const retrieveHellowroldBean=()=>axios.get('/hello-world-bean')
export const retrieveHellowroldBean=()=>apiclient.get('/hello-world-bean',{headers:{Authorization:'Basic bXVuaWFwcGFuOm11bmlhcHBhbg=='}})
//export const retrieveHellowroldpathvariable=(username)=>axios.get(`/hello-world/path-variable/${username}`)
export const retrieveHellowroldpathvariable=(username,token)=>apiclient.get(`/hello-world/path-variable/${username}`
    ,{headers:{Authorization:token}}
)

export const executeBasicAuthenticationService=(token)=>apiclient.get(`/basicauth`,{headers:{Authorization:token}})
