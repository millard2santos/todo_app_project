import { useEffect, useState } from "react"
import Return from "../Return/Return"
import ToDo from "../ToDo/ToDo"
import { orderByTime, tags } from "../../utilities"
import Tag from '../Tag/Tag'


const ToDoList = ({ data, setData }) => {

    const [order, setOrder] = useState('')
    let holdData = [...data]

    // const handleClick = (e) => {
    //     setOrder(e.target.value === 'Asc' ? order.sort((a,b) => a.time - b.time) : order.sort((a,b) => b.time - a.time))
    // }
    const handleOrder = (e) => {

        setOrder(e.target.value)


        setData(orderByTime(e.target.value, holdData))


    }

    return (
        <>
            <select name="order" id="order" onChange={handleOrder} value={order}>
                <option value="Asc">Asc</option>
                <option value="Desc">Desc</option>
            </select>
            <div className="flex gap-5 justify-around">
                {
                    tags.map((e, i) => <Tag key={i} tag={e} />)
                }
            </div>
            <div className="flex flex-wrap items-start gap-3 bg-gradient-to-r from-[#ffefba] to-white p-40 w-screen h-screen">
                <div className="absolute z-10 bottom-0 right-0 w-[50%] h-[50%] opacity-30 rounded-full bg-slate-300"></div>

                <Return />

                {
                    holdData.map((e, i) => <ToDo key={i} dataSingle={e} />)
                }
            </div>
        </>
    )
}

export default ToDoList