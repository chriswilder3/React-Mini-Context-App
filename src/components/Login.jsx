import React, {useContext, useState} from 'react'
import UserContext from './../context/UserContext';

function Login() {

    const {setUser} = useContext(UserContext);

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) =>{
        e.preventDefault();
        setUser({username, password})
    }

  return (
    <div>
        <h2> login </h2>

        <input type="text" 
            value={username}
            onChange = {  (e) => 
                setUsername( e.target.value)
            }
            placeholder='Enter username'
            name="username" id="username" 
        />
        
        <input type="text"  // For Demo purpose Lets make it text
            value={password}
            onChange={ (e) => 
                setPassword( e.target.value)
            }
            placeholder='Enter password'
            name="password" id="password" 
        />

        <button type="submit" onClick={handleSubmit}> 
            Submit 
        </button>

    </div>
  )
}

export default Login;