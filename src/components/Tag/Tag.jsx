


const Tag = ({ tag }) => {

 

    return (
        <button className="flex gap-2 items-center border shadow-sm
         py-1 px-3 rounded-lg hover:bg-slate-100 active:scale-95
         focus:bg-slate-200">
            {tag === 'Job' ? <i className="fa-solid fa-briefcase"></i>
            : tag === 'Hobby' ? <i className="fa-solid fa-bicycle"></i>
            : tag === 'Homework' ? <i className="fa-solid fa-pencil"></i>
            : tag === 'Class' ? <i className="fa-solid fa-book"></i>
            : tag === 'Life' ? <i className="fa-solid fa-users-line"></i>
            : tag === 'Family' ? <i className="fa-solid fa-people-roof"></i>
            : <i className="fa-solid fa-feather"></i>}
            <p>{tag}</p>
        </button>
    )
}

export default Tag