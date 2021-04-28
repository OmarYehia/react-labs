import { useEffect, useState } from "react";

const UsersList = () => {
    const [users, setUsers] = useState(null)
    const [ isPending, setIsPending ] = useState(true)

    useEffect(() => {
        fetch("https://reqres.in/api/users")
            .then(res => res.json())
            .then(data => {
                setUsers(data.data);
                console.log(users);
                setIsPending(false)
            })
    }, [])
    
    return (  
        <div className="user-list">
            { isPending && <div>Loading ...</div>}
            { users && users.map((user) => (
                <div className="user text-center">
                    <h1>{user.first_name} {user.last_name}</h1>
                    <h3>{user.email}</h3>
                    <img src={user.avatar} alt=""/>
                    <hr/>
                </div>
            ))}
        </div>
    );
}
 
export default UsersList;