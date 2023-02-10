import { useEffect, useState } from "react"
import Return from "../Return/Return"
import ToDo from "../ToDo/ToDo"
import { orderByTime, tags, db } from "../../utilities"
import Tag from '../Tag/Tag'
import {getDoc, doc} from "firebase/firestore";


const ToDoList = ({user, dataF, setDataF}) => {
   console.log(user)
   console.log(dataF)
   

    
    
    const [order, setOrder] = useState('')
    const [filter, setFilter] = useState(null)
   
    // useEffect(async() => {

    //     await getDoc(doc(db, 'toDoUsers', JSON.parse(localStorage.getItem('user').uid))).then(res => res.data()).then(res => console.log(res))
        

   
    // },[])
    // const handleClick = (e) => {
    //     setOrder(e.target.value === 'Asc' ? order.sort((a,b) => a.time - b.time) : order.sort((a,b) => b.time - a.time))
    // }
    const handleOrder = (e) => {

        setOrder(e.target.value)
        // setData(orderByTime(e.target.value, holdData))
    }


  

    return (
        <>
            <select name="order" id="order" onChange={handleOrder} value={order}>
                <option value="Asc">Asc</option>
                <option value="Desc">Desc</option>
            </select>
            <div className="flex gap-5 justify-around">
                {
                    tags.map((e, i) => <Tag key={i} tag={e} dataF={dataF} setFilter={setFilter}/>)
                }
            </div>
            <div className="flex flex-wrap items-start gap-3 p-40 w-full min-h-screen">
                <div className="absolute z-10 bottom-0 right-4 w-[50%] h-[50%] opacity-30 rounded-full bg-slate-300"></div>

               

                {
                    
                    filter ? filter.map((e, i) => <ToDo key={i} dataSingle={e} dataF={dataF} setDataF={setDataF} user={user}/>) : [...dataF].map((e, i) => <ToDo key={i} dataSingle={e} dataF={dataF} setDataF={setDataF} user={user}/>)
                    
                } 
            </div>
        </>
    )
}

export default ToDoList