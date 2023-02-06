import { useEffect, useState } from "react"
import Return from "../components/Return/Return"
import ToDo from "../components/ToDo/ToDo"
import Form from "../components/Form/Form"
import ToDoList from "../components/ToDoList/ToDoList"


const Main = () => {
    // const [order, setOrder] = useState(data)

    const [data, setData ] = useState([]) 
    // const handleClick = (e) => {
    //     setOrder(e.target.value === 'Asc' ? order.sort((a,b) => a.time - b.time) : order.sort((a,b) => b.time - a.time))
    // }
   
    return (
        <>
            <Form setData={setData} data={data}/>
            <ToDoList setData={setData} data={data}/>
        </>
    )
}

export default Main