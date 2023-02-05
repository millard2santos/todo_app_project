import Form from './pages/Form.jsx'
import ToDo from './components/ToDo/ToDo.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ToDoList from "./pages/ToDoList"


function App() {




  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/list" element={<ToDoList />} />
      </Routes>
    </BrowserRouter>


    // <div className="px-[200px] py-10">
    //   <Form />
    // </div>

    // <ToDoList />



  );
}

export default App;
