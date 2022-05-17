import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const url = 'https://reqres.in/api/users?page=1'
  const [users, setUsers] = useState([]);

  
  
  const fetchData = async () => {
    const response = await fetch(url);
    const userData = await response.json();
    setUsers(userData.data);
    console.log(userData);
  }

 
  return (
    <div className="App">
    <h1>Hello Everyone 👋</h1>
    <button onClick={fetchData} >Fetch Users</button>
      {users.length > 0 && (
        <ul>
          {users.map(user => (
             <article key={user.id}>
               
            <img  src={user.avatar} alt={user.first_name} />
               <h2>{user.first_name} {user.last_name}</h2>
               <h4>email: {user.email}</h4>
             </article>

          )
          )}
        </ul>
      )}
    </div>
  );
}

export default App;
