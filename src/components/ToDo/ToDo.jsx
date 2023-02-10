import { useState } from 'react'
import './ToDo.css'
import { getTime } from '../../utilities'
import { async } from '@firebase/util'
import {setDoc,doc} from "firebase/firestore";
import {db} from '../../utilities'


const ToDo = ({ dataSingle, dataF, setDataF,user }) => {
   const holdData = [...dataF]
    
   

    const handleDelete = async(e) => {
        holdData.splice(holdData.findIndex(e => e.id === dataSingle.id), 1)
        await setDoc(doc(db, 'toDoUsers', user.uid), {
            'List': holdData})
        setDataF(holdData)
        
    }

    const handleClick = async(e) => {
        
        dataSingle.isChecked ? dataSingle.isChecked = false : dataSingle.isChecked = true
        await setDoc(doc(db, 'toDoUsers', user.uid), {
            'List': holdData})
        setDataF(holdData)
        
        
    }




    return (
        <>
            <div className={`
            overflow-hidden
            rounded-lg
            relative w-[25%] z-20
          bg-white
            shadow-lg
            p-5
            border-t-4
            ${dataSingle.priority === 'High' ? 'border-red-600' : dataSingle.priority === 'Medium' ? 'border-yellow-300' : 'border-green-400'}
            hover:scale-105
            transition-transform 
            duration-100`}>
                <h2 className={`${dataSingle.isChecked ? 'line-through' : ''} text-xl text-gray-800`}>{`Lista ${dataSingle.todo}`}</h2>
                <p className={`${dataSingle.isChecked ? 'line-through' : ''} text-gray-800`}>{dataSingle.todo}</p>
                <p className={`${dataSingle.isChecked ? 'line-through' : ''} text-gray-800`}>{dataSingle.priority}</p>
                <p className={`${dataSingle.isChecked ? 'line-through' : ''} text-gray-800`}>{dataSingle.time}</p>
                {
                    dataSingle.isChecked ? <p className={`line-through text-gray-800`}>{getTime()}</p> : '' 
                }
                <p className={`${dataSingle.isChecked ? 'line-through' : ''} text-gray-800`}>{dataSingle.tag}</p>
                <div className="flex gap-3">
                    <i onClick={handleClick} className="fa-solid fa-check text-green-300 hover:scale-125 cursor-pointer transition-transform duration-200"></i>
                    <i onClick={handleDelete} className="fa-solid fa-x text-red-600 hover:scale-125 cursor-pointer transition-transform duration-200"></i>
                </div>
                {/* <i onClick={handleDelete} className="fa-solid fa-x absolute top-3 right-2 transition-transform duration-200 text-[] hover:scale-125 cursor-pointer "></i> */}
            </div>
        </>
    )
}


export default ToDo