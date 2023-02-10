import { useState } from "react"



const Tag = ({ tag, dataF, setFilter }) => {
    const holdData = [...dataF]
    console.log(tag)
    const handleClick = (e) => {
        if (!tag.selected) {
            tag.selected = true
            setFilter(holdData.filter(e => e.tag === tag.tag))
        } else {
            tag.selected = false
            setFilter(null)
        }
    }

    return (
        <button onClick={handleClick} className={`group flex gap-2 items-center border shadow-sm
         py-1 px-3 rounded-lg bg-gradient-to-r from-green-100 to-yellow-100 hover:bg-gradient-to-l  active:scale-95`}>
            {tag.tag === 'Job' ? <i className="text-yellow-400 group-hover:text-green-400 fa-solid fa-briefcase"></i>
                : tag.tag === 'Hobby' ? <i className="text-yellow-400 group-hover:text-green-400 fa-solid fa-bicycle"></i>
                    : tag.tag === 'Homework' ? <i className="text-yellow-400 group-hover:text-green-400 fa-solid fa-pencil"></i>
                        : tag.tag === 'Class' ? <i className="text-yellow-400 group-hover:text-green-400 fa-solid fa-book"></i>
                            : tag.tag === 'Life' ? <i className="text-yellow-400 group-hover:text-green-400 fa-solid fa-users-line"></i>
                                : tag.tag === 'Family' ? <i className="text-yellow-400 group-hover:text-green-400 fa-solid fa-people-roof"></i>
                                    : <i className="text-yellow-400 group-hover:text-green-400 fa-solid fa-feather"></i>}
            <p>{tag.tag}</p>
        </button>
    )
}

export default Tag