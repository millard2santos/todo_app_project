import Form from '../Form/Form'
import SignOut from '../SignOut/SignOut'
import ToDoList from '../ToDoList/ToDoList'

const HoldMenu = ({ setDataF, dataF, user, setLogged }) => {
    return (
        <>
            <div className='relative bg-gradient-to-r from-[#ffefba] to-white'>
                <Form setDataF={setDataF} dataF={dataF} user={user} />
                <SignOut setLogged={setLogged} user={user} />
                <ToDoList user={user} dataF={dataF} setDataF={setDataF} />
            </div>
        </>
    )
}

export default HoldMenu; 