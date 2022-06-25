import React from 'react';

export function validate (input) {
let error = {}

if(!input.username){
  error.username = "Username is required"
}
else if (!/\S+@\S+\.\S+/.test(input.username)){
  error.username = "Username is invalid"
}
else if(!input.password){
  error.password = "Password is required"
}
else if (!/(?=.*[0-9])/.test(input.password)){
  error.password = "Password is invalid"
}
return error
}


export default function  Form() {

  const initialState = {
    username: "",
    password: ""
  }

// let [username, setUsername] = React.useState("")

  let [input, setInput] = React.useState(initialState)

  let [error, setError] = React.useState({})

  let handleOnChange = (e) => {
    setInput( prevState => ({
          ...prevState,
          [e.target.name]: e.target.value  
          // setInput(...input, [e.target.name]: e.target.value)
      })) 
      //validacion de errores
      let error = validate({...input, [e.target.name]: e.target.value})
      setError(error)
      return error
    }

    let handleSubmit = (e) => {
      e.preventDefault();
      setInput(initialState)
      // setInput({username: '', password: ''})
      //enviar info a DB
    }


  return (
      <div>
   <form>
     <div> 
     <label>Username:</label>
     <input
     type= "text"
     placeholder='Username...'
     value={input.username}
     name="username"
     onChange={handleOnChange}
     className={error.username && 'danger'}
     />
     </div>
     {error.username && <p>{error.username}</p>}
     <div> 
     <label>Password:</label>
     <input
     type= "password"
     value={input.password}
     name="password"
     onChange={handleOnChange}
     className= {error.password && 'danger'}
     />
     </div>
     {error.password && <p>{error.password}</p>}
     {!input.username || error.username || error.password ? null : 
         <button
         disabled={!input.username || Object.keys(error).length>0}
         onSubmit={handleSubmit}> BOTON CONDICIONAL </button>
     }

<button
 disabled={!input.username || Object.keys(error).length>0}
 onSubmit={handleSubmit}> ENVIAR </button>
           </form>
      </div>
  )
}
/*    disabled={Object.keys(error).length>0}*/