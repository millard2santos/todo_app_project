import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

import { auth } from '../../utilities'

const SignIn = ({ setLogged, setLogin }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, e.target.emailIn.value, e.target.passwordIn.value)
            .then((userCredential) => {

                setLogged(true)

            })
            .catch((error) => {

                console.log(error)
                // ..
            });
        setEmail('')
        setPassword('')
    }

    const handleClick = () => {
        setLogin(false)
    }


    return (
        <>
            <div className="p-5 w-[650px] rounded-lg bg-gradient-to-br from-[#C6FFDD] via-[#FBD786] to-[#f7797d] mx-auto">
                <form onSubmit={handleSubmit} action="" className="rounded-lg  flex flex-col items-center p-10 bg-[#ffffff31] mx-auto gap-3 text-[#585757]">
                    <h2>Login</h2>
                    <input className="rounded-lg px-5 py-1.5" type="email" id="emailIn" name="emailIn" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input className="rounded-lg px-5 py-1.5" type="password" id="passwordIn" name="passwordIn" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <input className="bg-[#ffffffab] cursor-pointer rounded-lg px-5 py-1.5 hover:scale-105 active:scale-95" type="submit" value='Enviar' />
                    <button onClick={handleClick} className="cursor-pointer hover:text-black">Don't have an account? Create one here!</button>

                </form>
            </div>
        </>
    )
}

export default SignIn 