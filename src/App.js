import Form from './pages/Form.jsx'
import ToDo from './components/ToDo/ToDo.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ToDoList from "./pages/ToDoList"
import { useState } from 'react';


function App() {

  const [data, setData ] = useState([]) 
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form setData={setData} data={data}/>} />
        <Route path="/list" element={<ToDoList data={data}/>} />
      </Routes>
    </BrowserRouter>


    // <div className="px-[200px] py-10">
    //   <Form />
    // </div>

    // <ToDoList />



  );
}

export default App;
