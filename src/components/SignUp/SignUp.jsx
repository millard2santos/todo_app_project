import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { doc, setDoc } from "firebase/firestore";

import { auth, db } from '../../utilities'

const SignUp = ({ setLogged, setLogin}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        createUserWithEmailAndPassword(auth, e.target.email.value, e.target.password.value)
            .then(async (userCredential) => {
                // Signed in 
                const user = userCredential.user;
                await setDoc(doc(db, 'toDoUsers', user.uid), {
                    'List': []
                })
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

    const handleClick = () => {
        setLogin(true)
    }

    return (
        <>
            <div className="p-5 w-[650px] rounded-lg bg-gradient-to-br from-[#C6FFDD] via-[#FBD786] to-[#f7797d] mx-auto">
                <form onSubmit={handleSubmit} action="" className="rounded-lg  flex flex-col items-center p-10 bg-[#ffffff31] mx-auto gap-3 text-[#585757]">
                    <h2>Create Account</h2>
                    <input className="rounded-lg px-5 py-1.5" type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input className="rounded-lg px-5 py-1.5" type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <input className="bg-[#ffffffab] cursor-pointer rounded-lg px-5 py-1.5 hover:scale-105 active:scale-95" type="submit" value='Enviar' />
                    <button onClick={handleClick} className="cursor-pointer hover:text-black">Already have an account? Sign in here!</button >
                </form>
            </div>
        </>
    )
}

export default SignUp 