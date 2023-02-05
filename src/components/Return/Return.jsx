import { useNavigate } from "react-router-dom"

const Return = () => {
    
    const navigate = useNavigate()
    
    return <i onClick={() => navigate("/")} className="fa-solid fa-arrow-right-arrow-left absolute top-10 right-10 text-xl hover:scale-125 cursor-pointer"></i>
}

export default Return