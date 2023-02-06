import { useState } from "react"
import { useNavigate } from "react-router-dom"




const Form = ({ setData, data }) => {

    const [input, setInput] = useState('')
    const [priority, setPriority] = useState('High')
    const time = new Date()


    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const created = {
            todo : (e.target.todo.value)[0].toUpperCase() + (e.target.todo.value).slice(1).toLowerCase(),
            priority: e.target.priority.value,
            time: `${time.getHours()} ${time.getMinutes()} ${time.getSeconds()}`
        }
        setInput('')
        data.find(e=> e.todo === created.todo) ? console.log('Already') : data.push(created)
        setData(data)
    }


    return (
        <>

            <form action="" onSubmit={handleSubmit} className="bg-black w-full p-10 flex justify-center gap-5">
                <h1 className="text-white">Tareas</h1>
                <input onChange={(e) => setInput(e.target.value)} type="text" id="todo" name="todo" placeholder="Tarea" className="py-1 px-3" value={input} />
                <label className="text-white" htmlFor="priority">Priority</label>
                <select name="priority" value={priority} onChange={(event) => setPriority(event.target.value)}>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                </select>
                <input type="submit" name="" id="" value="Añadir" className="bg-white py-1 px-3" />
            </form>
            <button onClick={() => navigate('/list')} className="bg-slate-500">List</button>
        </>
    )
}

export default Form; 