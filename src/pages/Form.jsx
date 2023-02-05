import { useState } from "react"
import { useNavigate } from "react-router-dom"




const Form = () => {
    const [form, setForm] = useState(JSON.parse(localStorage.getItem('list')) || [])
    const [input, setInput] = useState('')
    const [priority, setPriority] = useState('High')


    const handleSubmit = (e) => {
        e.preventDefault()



        setForm(form.push())
        localStorage.setItem('list', JSON.stringify)
        setInput('')

    }

    const navigate = useNavigate()


    return (
        <>

            <form onSubmit={handleSubmit} action="" className="bg-black w-full p-10 flex justify-center gap-5">
                <h1 className="text-white">Tareas</h1>
                <input onChange={(e) => setInput(e.target.value)} type="text" id="todo" name="todo" placeholder="Tarea" className="py-1 px-3" value={input} />
                <input type="submit" name="" id="" value="Añadir" className="bg-white py-1 px-3" />
                <label className="text-white" htmlFor="priority">Priority</label>
                <select  name="priority" value={priority} onChange={(event) => setPriority(event.target.value)}>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                </select>
            </form>
            <button onClick={() => navigate('/list')} className="bg-slate-500">List</button>
        </>
    )
}

export default Form; 