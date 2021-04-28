import { CheckSquareOutlined, DeleteOutlined } from '@ant-design/icons';

const TodoList = ({ todos, setTodos, changed, setChanged }) => {

    const handleDelete = (e, id) => {
        fetch(`http://localhost:8000/todos/${id}`, {
            method: "DELETE"
        })

        const newTodos = todos.filter((todo) => todo.id !== id);
        setTodos(newTodos);
    }

    const handleCompleted = (id) => {
        fetch(`http://localhost:8000/todos/${id}`, {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({ "completed": true })
        })
        .then(()=>{
            if (!changed) {
                setChanged(true);
            } else {
                setChanged(false)
            }
        })

        
    }

    return (  
        <div>
            { todos.map(todo => (
                <div className="row"  key={ todo.id }>
                    <p className={`${todo.completed ? "completed" : ""}`}> { todo.description } </p>
                    <button onClick={ (e) => handleCompleted(todo.id) } className="todo-btn ml-auto btn btn-outline-success" ><CheckSquareOutlined /></button>
                    <button onClick={ (e) => handleDelete(e, todo.id) } className="todo-btn btn btn-outline-danger ml-2"> <DeleteOutlined /></button>
                </div>
            ))}
        </div>
    );
}
 
export default TodoList;