import { signOut } from "firebase/auth";
import {auth} from '../../utilities'



const SignOut = ({logged,setLogged}) => {
    const user = JSON.parse(localStorage.getItem('user'))
    console.log(user)
    const handleClick = () => {
        signOut(auth).then(() => {
            setLogged(false)
        }).catch((error) => {
            // An error happened.
        });
    }

    return (
        <div>
            <p className="">Hola {user.email.slice(0, user.email.indexOf('@'))}</p>
            <button onClick={handleClick} className="border-2 py-1 px-2 rounded-lg ">SignOut</button>
        </div>
    )

}

export default SignOut