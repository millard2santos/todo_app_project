import { useState } from "react"
import Return from "../components/Return/Return"
import ToDo from "../components/ToDo/ToDo"


const ToDoList = ({ data }) => {
    const [order, setOrder] = useState(data)

    const handleClick = (e) => {
        setOrder(e.target.value === 'Asc' ? order.sort((a,b) => a.time - b.time) : order.sort((a,b) => b.time - a.time))
    }


    return (
        <>
            <div className="relative flex flex-wrap gap-3 bg-gradient-to-r from-[#FFEFBA] to-white p-40">
                {/* <label htmlFor="order">Order</label>
                <select name="order" id="order" onClick={handleClick}>
                    <option value="Asc">Asc</option>
                    <option value="Desc">Desc</option>
                </select> */}
                <Return />
                {
                    order.map((e, i) => <ToDo key={i} num={i} data={e} />)
                }
            </div>
        </>
    )
}

export default ToDoList