import Return from "../components/Return/Return"
import ToDo from "../components/ToDo/ToDo"
import { useParams } from "react-router-dom"

const ToDoList = () => {


    


    return (
        <>
            <div className="relative flex gap-3 bg-gradient-to-r from-[#FFEFBA] to-white p-40">
                <Return />
                <ToDo />
                <ToDo />
                <ToDo />
                <ToDo />
            </div>
        </>
    )
}

export default ToDoList