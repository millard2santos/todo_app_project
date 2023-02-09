import {onAuthStateChanged } from "firebase/auth";

import { useEffect, useState } from "react"
import Return from "../components/Return/Return"
import ToDo from "../components/ToDo/ToDo"
import Form from "../components/Form/Form"
import ToDoList from "../components/ToDoList/ToDoList"
import {auth} from '../utilities'
import SignUp from "../components/SignUp/SignUp";
import SignIn from "../components/SignIn/SignIn";
import SignOut from "../components/SignOut/SignOut";






const Main = () => {
    console.clear()
    const [logged, setLogged] = useState(false)
    const [data, setData ] = useState([])
    
    onAuthStateChanged(auth, async(user) => {
        if (user) {
          
          localStorage.setItem('user',JSON.stringify(user))
          console.log('conectado')
          setLogged(true)
        } else {
          
          console.log('No Logged')
        }
      });

    return (
        <>
            <SignUp logged={logged} setLogged={setLogged}/>
            <Form setData={setData} data={data}/>


            {
                logged ? <SignOut logged={logged} setLogged={setLogged}/> : <SignIn logged={logged} setLogged={setLogged}/>
            }
            {
                logged ? <ToDoList setData={setData} data={data}/> : null
            }
            
        </>
    )
}

export default Main