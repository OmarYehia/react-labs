import { useEffect, useState } from "react";
import { useHistory } from "react-router";

const CreateTodo = ({ changed, setChanged }) => {
    const [ description, setDescription ] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();

        const todo = {
            description,
            completed: false
        }

        fetch("http://localhost:8000/todos", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(todo)
        })
        .then(() => {
            console.log("Todo added successfully");
            if (!changed) {
                setChanged(true);
            } else {
                setChanged(false)
            }
        })
    }

    return (  
        <form className="create" onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="What do you want to do?"
                value={ description }
                onChange={e => setDescription(e.target.value) }/>
            <button className="todo-btn btn btn-outline-dark">Add Todo</button>
        </form>
    );
}
 
export default CreateTodo;