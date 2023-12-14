import React, { useState } from "react";
import Swal from 'sweetalert2';

const AddClickPopUp = () => {
    Swal.fire({
        title: "Adicionado",
        width: 600,
        padding: "3em",
        color: "#111",
        icon: "success",
        background: "#fff",
        ButtonColor:"111",
        confirmButtonText: 'Perfeito!',
        backdrop: `
          rgba(0,0,123,0.4)
          left top
          no-repeat
        `
      });
}

const Form = ({ onAdd }) => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();
        onAdd({title, description});
        setTitle('');
        setDescription('');
    }

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input
                required
                type="text"
                placeholder="Titulo"
                className="todo-input"
                value={title}
                onChange={(e)=> setTitle(e.target.value)}
            />
            <input
                required
                type="text"
                placeholder="Pequena Descrição"
                className="todo-input"
                value={description}
                onChange={(e)=> setDescription(e.target.value)}
            />
            <button type="submit" className="todo-button" onClick={AddClickPopUp}>
                Adicionar
            </button>
        </form>);
}
export default Form;