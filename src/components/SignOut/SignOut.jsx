import { signOut } from "firebase/auth";
import { useEffect } from "react";
import {auth} from '../../utilities'



const SignOut = ({setLogged,user}) => {
    

    const handleClick = () => {
        signOut(auth).then(() => {
            setLogged(false)
        }).catch((error) => {
            
        });
    }

    return (
        <div className="absolute right-5 top-5">
           <p>Hola, {user.email.slice(0,user.email.indexOf('@'))}</p>
            <button onClick={handleClick} className="border-2 py-1 px-2 rounded-lg ">SignOut</button>
        </div>
    )

}

export default SignOut