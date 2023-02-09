import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

import { auth } from '../../utilities'

const SignIn = ({logged, setLogged}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, e.target.emailIn.value, e.target.passwordIn.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setLogged(true)
                console.log('Loggeado')
            })
            .catch((error) => {
                console.log('Ya loggeado')
                console.log(error)
                // ..
            });
        setEmail('')
        setPassword('')
    }


    return (
        <>
            <form onSubmit={handleSubmit} action="">
                <input className="bg-red-600" type="email" id="emailIn" name="emailIn" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input className="bg-red-600" type="password" id="passwordIn" name="passwordIn" value={password} onChange={(e) => setPassword(e.target.value)} />
                <input className="bg-red-600" type="submit" value='Enviar' />
                
            </form>
        </>
    )
}

export default SignIn 