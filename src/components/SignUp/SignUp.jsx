import {createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

import { auth } from '../../utilities'

const SignUp = ({logged,setLogged}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        createUserWithEmailAndPassword(auth, e.target.email.value, e.target.password.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setLogged(true)
                console.log('Registrado')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
        setEmail('')
        setPassword('')
    }


    return (
        <>
            <form onSubmit={handleSubmit} action="">
                <input className="bg-red-300" type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input className="bg-red-300" type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <input className="bg-red-300" type="submit" value='Enviar' />
            </form>
        </>
    )
}

export default SignUp 