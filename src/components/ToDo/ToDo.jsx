



const ToDo = ({ data, num }) => {

    const handleDelete = (e) => e.target.parentNode.parentNode.remove()
    const handleDone = (e) => e.target.parentNode.parentNode.classList.toggle('line-through')


    return (
        <>
            <div className={`relative w-[20%]
         bg-white
            shadow-lg
            p-5
            border-t-4
            ${data.priority === 'High' ? 'border-red-600' : data.priority === 'Medium' ? 'border-yellow-300' : 'border-green-400'}
            hover:scale-105
            transition-transform 
            duration-100`}>
                <h2 className="text-xl text-gray-800">{`Lista ${num + 1}`}</h2>
                <p className="text-gray-800">{data.todo}</p>
                <p className="text-gray-800">{data.priority}</p>
                <p className="text-gray-800">{data.time}</p>
                <div className="flex gap-3">
                    <i onClick={handleDone} className="fa-solid fa-check text-green-300 hover:scale-125 cursor-pointer transition-transform duration-200"></i>
                    <i onClick={handleDelete} className="fa-solid fa-x text-red-600 hover:scale-125 cursor-pointer transition-transform duration-200"></i>
                </div>
                {/* <i onClick={handleDelete} className="fa-solid fa-x absolute top-3 right-2 transition-transform duration-200 text-[] hover:scale-125 cursor-pointer "></i> */}
            </div>
        </>
    )
}


export default ToDo