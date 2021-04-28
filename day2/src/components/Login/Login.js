import { useState } from "react";

const Login = () => {
    const [ userName, setUsername ] = useState("");
    const [ password, setPassword ] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (userName === "omar" && password === "1234") {
            alert("Logged in");
        } else {
            alert("Wrong credentials");
        }
    }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Username"
                value={ userName }
                onChange={e => setUsername(e.target.value) }/>

            <input 
                type="password" 
                placeholder="Password"
                value={ password }
                onChange={e => setPassword(e.target.value) }/>

            <button className="todo-btn btn btn-outline-dark">Login</button>
        </form>
    );
}
 
export default Login;