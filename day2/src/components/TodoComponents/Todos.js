import { useEffect, useState } from "react";
import CreateTodo from "./CreateTodo";
import TodoList from "./TodoList";

const Todos = () => {
    const [ todos, setTodos ] = useState(null);
    const [ isPending, setIsPending ] = useState(true);
    const [ error, setError ] = useState(null);
    const [ changed , setChanged ] = useState(true);

    useEffect(() => {
        fetch('http://localhost:8000/todos')
            .then(res => {
                if (!res.ok){
                    throw Error("Couldn't fetch the required resource.");
                }
                return res.json();
            })
            .then(data => {
                setTodos(data);
                setIsPending(false);
                setError(null);
            })
            .catch(err => {
                setError(err.message);
                setIsPending(false);
            })
    }, [changed])

    return (
        <div className="todos">
            { error && <div> { error } </div> }
            { isPending && <div> Loading data ... </div> }
            { todos && <TodoList todos={ todos } setTodos={setTodos} changed={changed} setChanged={ setChanged } /> }
            <CreateTodo todos={ todos } setTodos={setTodos} changed={changed} setChanged={ setChanged } />
        </div>
    );
}
 
export default Todos;