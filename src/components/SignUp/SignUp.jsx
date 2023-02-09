import {createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { doc, setDoc } from "firebase/firestore"; 

import { auth,db } from '../../utilities'

const SignUp = ({logged,setLogged}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        createUserWithEmailAndPassword(auth, e.target.email.value, e.target.password.value)
            .then(async(userCredential) => {
                // Signed in 
                const user = userCredential.user;
                await setDoc(doc(db, 'toDoUsers', user.uid), {
                    'List': []})
                setLogged(true)
                console.log('Registrado')
            })
            .catch((error) => {
                console.log(error)
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