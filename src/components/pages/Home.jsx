import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import NavBar from "../NavBar";
import Sobre from "./Sobre";
import Formulario from "../Form";
import Lista from "../Lista";
import Edit from "../Edit";

const Home = () => {
  const navigate = useNavigate();
  const [todos, setTodos] = useState([]);
  const [currentTodo, setCurrentTodo] = useState(null)

  const handleAddEdit = (newTodo) => {
    setTodos((prevTodos) => [...prevTodos, { id: Date.now(), ...newTodo }]);
  }


  const handleDeleteEdit = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const handleEdite = (id) => {
    const todoToEdit = todos.find((todo) => todo.id === id);
    setCurrentTodo(todoToEdit);
    navigate('/edit', { replace: true }); // Use the navigate function to go to the edit page
  };

  const handleUpdateTodo = (updatedTodo) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === updatedTodo.id ? { ...todo, ...updatedTodo } : todo
      )
    );
    setCurrentTodo(null);
  };

  const handleCancelEdit = () => {
    setCurrentTodo(null);
  };


  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/about" element={<Sobre />} />
        <Route path="/" element={
          <div className="container">
            <h1>Catalogue Seu Livro</h1>
            <Formulario onAdd={handleAddEdit} />
            <Lista
              todos={todos}
              onDelete={handleDeleteEdit}
              onEdit={handleEdite}
            />
          </div>
        } />
        <Route path="/edit"
          element={<Edit currentTodo={currentTodo} onUpdate={handleUpdateTodo} onCancel={handleCancelEdit} />} />
      </Routes>
    </div>
  )
}
export default Home;