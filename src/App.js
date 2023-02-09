import Form from './pages/Main.jsx'
import ToDo from './components/ToDo/ToDo.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ToDoList from "./components/ToDoList/ToDoList"
import { useState } from 'react';
import Main from './pages/Main.jsx';



function App() {

  
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        {/* <Route path="/list" element={<ToDoList data={data}/>} /> */}
      </Routes>
    </BrowserRouter>


    // <div className="px-[200px] py-10">
    //   <Form />
    // </div>

    // <ToDoList />



  );
}

export default App;
