import Swal from 'sweetalert2';
const Item = ({ todo, onDelete, onEdit }) => {
const DeleteClickPopUp = () => {
    Swal.fire({
        position: "center",
        icon: "success",
        title: "Deletado Com Sucesso",
        showConfirmButton: false,
        timer: 1500
      });
}

    return (

        <div className="todo-item">
            <div className="todo-content">
                <h3>{todo.title}</h3>
                <p>{todo.description}</p>
            </div>
            <div className="todo-buttons">
                <button  onClick={() => { onDelete(todo.id); DeleteClickPopUp(); }}className="todo-button delete">
                    Deletar
                </button>
                <button onClick={() => onEdit(todo.id)} className="todo-button edit">
                    Editar
                </button>
            </div>
        </div>
    );
};

export default Item;