import { onAuthStateChanged } from "firebase/auth";
import { getDoc, doc } from "firebase/firestore";
import { db } from '../utilities'
import { useEffect, useState } from "react"
import Return from "../components/Return/Return"
import ToDo from "../components/ToDo/ToDo"
import Form from "../components/Form/Form"
import ToDoList from "../components/ToDoList/ToDoList"
import { auth } from '../utilities'
import SignUp from "../components/SignUp/SignUp";
import SignIn from "../components/SignIn/SignIn";
import SignOut from "../components/SignOut/SignOut";






const Main = () => {

    const [logged, setLogged] = useState(false)
    const [dataF, setDataF] = useState([])
    const [user, setUser] = useState('')

    useEffect(() => {
        
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                
               
                setUser(user)
                console.log('Conectado')
                await getDoc(doc(db,'toDoUsers', user.uid)).then(res => res.data()).then(res => setDataF(res.List))
                if(!logged){
                    setLogged(true)
                }
               
                
            } else {
                localStorage.setItem('user', '')
                console.log('No conectado')

                
            }
        });
        
        


    }, [])
    
    
    return (
        <>
            <SignUp logged={logged} setLogged={setLogged} />
            <Form setDataF={setDataF} dataF={dataF} user={user}/>
            <SignOut />


            {
                logged ? <SignOut logged={logged} setLogged={setLogged} user={user} /> : <SignIn logged={logged} setLogged={setLogged} />
            }
            {
                logged ? <ToDoList user={user} dataF={dataF} setDataF={setDataF}/> : null
            }

        </>
    )
}

export default Main