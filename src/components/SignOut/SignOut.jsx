import { signOut } from "firebase/auth";
import { useEffect } from "react";
import {auth} from '../../utilities'



const SignOut = ({logged,setLogged,dataF}) => {
    

    const handleClick = () => {
        signOut(auth).then(() => {
            setLogged(false)
        }).catch((error) => {
            // An error happened.
        });
    }

    return (
        <div>
           
            <button onClick={handleClick} className="border-2 py-1 px-2 rounded-lg ">SignOut</button>
        </div>
    )

}

export default SignOut