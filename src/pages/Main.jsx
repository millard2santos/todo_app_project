import { onAuthStateChanged } from "firebase/auth";
import { getDoc, doc } from "firebase/firestore";
import { db,auth  } from '../utilities'
import { useEffect, useState } from "react"
import HoldMenu from "../components/HoldMenu/HoldMenu";
import HoldSign from "../components/HoldSign/HoldSign";






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
            <div className="flex flex-col gap-10">
            


            

             {
                logged ? <HoldMenu setDataF={setDataF} dataF={dataF} user={user} setLogged={setLogged}/> : <HoldSign setLogged={setLogged}/>
             }
            </div>
            
            
            



        </>
    )
}

export default Main