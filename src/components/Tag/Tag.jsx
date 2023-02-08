import { useState } from "react"



const Tag = ({ tag, data, setFilter, filter }) => {
    const holdData = [...data]
    
    const handleClick = () => {
        if(!tag.selected){
            tag.selected = true
            setFilter(holdData.filter(e => e.tag === tag.tag))
        }else{
            tag.selected = false
            setFilter(null)
        }
    }

    return (
        <button onClick={handleClick} className={`flex gap-2 items-center border shadow-sm
         py-1 px-3 rounded-lg hover:bg-slate-100 active:scale-95 `}>
            {tag.tag === 'Job' ? <i className="fa-solid fa-briefcase"></i>
                : tag.tag === 'Hobby' ? <i className="fa-solid fa-bicycle"></i>
                    : tag.tag === 'Homework' ? <i className="fa-solid fa-pencil"></i>
                        : tag.tag === 'Class' ? <i className="fa-solid fa-book"></i>
                            : tag.tag === 'Life' ? <i className="fa-solid fa-users-line"></i>
                                : tag.tag === 'Family' ? <i className="fa-solid fa-people-roof"></i>
                                    : <i className="fa-solid fa-feather"></i>}
            <p>{tag.tag}</p>
        </button>
    )
}

export default Tag