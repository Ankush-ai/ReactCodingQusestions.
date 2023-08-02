// The Task is to fetch some data from an api/url using axios and display is at as list of items on the web page
import React ,{useState,useEffect} from 'react';
import axios from  'axios';

const UserList=()=>{
    const[users,setUsers]=useState([]);

    useEffect(()=>{
        //fetching data via axios
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((Response)=>{
            setUsers(Response.data);
        })

        .catch((error)=>{
            console.log("Error", error);
        })
    },[]);

    return(
        <div>
            <h2>List of Users</h2>
            <ul>
                {users.map((user)=>(
                    <li key={user._id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );

};
export default UserList;