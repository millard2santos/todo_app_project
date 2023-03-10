import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { id , getTime} from '../../utilities'
import { doc, setDoc, getDoc } from "firebase/firestore"; 
import {db} from '../../utilities'





const Form = ({ setDataF, dataF, user }) => {
    

    const [input, setInput] = useState('')
    const [priority, setPriority] = useState('High')
    const [tag, setTag ] = useState('Job')

   



    const handleSubmit = async(e) => {
        e.preventDefault()
        const holdData = [...dataF]

        const created = {
            todo: (e.target.todo.value)[0].toUpperCase() + (e.target.todo.value).slice(1),
            priority: e.target.priority.value,
            time: getTime(),
            isChecked: false,
            id: id(),
            tag: e.target.tag.value
        }

        setInput('')
        // setData( prev => {
        //     if(!prev.find(e => e.todo === created.todo)){
        //         prev.push(created)
        //         return prev
        //     }else{
        //         setData(prev)
        //     }
        // })
        if (!holdData.find(e => e.todo === created.todo)) {
            holdData.push(created)
        }
        await setDoc(doc(db, 'toDoUsers', user.uid), {
            'List': holdData})
        setDataF(holdData)



    }


    return (
        <>
            <form action="" onSubmit={handleSubmit} className="bg-gradient-to-r from-[#108dc7] to-[#ef8e38] w-full p-10 flex justify-center gap-5">
                <h1 className="">Tareas</h1>
                <input onChange={(e) => setInput(e.target.value)} type="text" id="todo" name="todo" placeholder="Tarea" className="py-1 px-3" value={input} required min={3} />
                <label className="" htmlFor="priority">Priority</label>
                <select name="priority" value={priority} onChange={(event) => setPriority(event.target.value)}>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                </select>
                <label className="" htmlFor="tag">Add a Tag</label>
                <select name="tag" id="tag" value={tag} onChange={(e) => setTag(e.target.value)}>
                    <option value="Job">Job</option>
                    <option value="Hobby">Hobby</option>
                    <option value="Homework">Homework</option>
                    <option value="Class">Class</option>
                    <option value="Life">Life</option>
                    <option value="Family">Family</option>
                    <option value="Daily">Daily</option>
                    <option value="Others">Others</option>
                </select>
                <input type="submit" name="" id="" value="A??adir" className="bg-white py-1 px-3 active:scale-95" />
            </form>
            {/* <button onClick={() => navigate('/list')} className="bg-slate-500 m-20">List</button> */}

        </>
    )
}

export default Form; 