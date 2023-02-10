import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
import {useState} from 'react'

const HoldSign = ({setLogged}) => {

    const [login, setLogin] = useState(true)



    return (
        <>
        <h1 className="text-3xl text-center">ToDO APP</h1>
        {
                login ? <SignIn setLogged={setLogged} setLogin={setLogin}/> : <SignUp setLogged={setLogged} setLogin={setLogin}/>
            }
        
        </>
    )
}

export default HoldSign