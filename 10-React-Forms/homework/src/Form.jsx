import React from 'react';

export function validate(input){
    let errors = {};

    if (!input.username) {
      errors.username = 'Username is required';
    } else if (!/\S+@\S+\.\S+/.test(input.username)) {
      errors.username = 'Username is invalid';
    }

    if(!input.password){
      errors.password = 'Password is required';
    }else if((!/(?=.*[0-9])/.test(input.password))){
      errors.password = 'Password is invalid';
    }
  
    return errors;
}


export default function  Form() {

  const initialState = {
    username: '', 
    password: ''
  }

  const [input, setInput] = React.useState(initialState);

  const [error, setError] = React.useState({});

  let handleOnChange = (e)=>{
    setInput( prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
    //empiezo a validar
    let error = validate({...input, [e.target.name]: e.target.value})
    setError(error)
    return error
  }

  let handleSubmit = (e)=>{
    e.preventDefault();
    setInput(initialState);//limpio los input
  }

  return (
      <div>
        <form>
          <div>
            <label>Username:</label>
            <input type={'text'} 
            onChange={handleOnChange}
            placeholder={'Username...'} 
            value={input.username} 
            name={'username'}//es como un key
            className={error.username && 'danger'}
            />
            {error.username && <p>{error.username}</p>}
          </div>

          <div>
            <label>Password:</label>
            <input type={'password'} 
            onChange={handleOnChange}
            placeholder={'Password...'} 
            value={input.password} 
            name={'password'}
            className={error.password && 'danger'}
            />
            {error.password && <p>{error.password}</p>}

          </div>

          <button disabled={Object.keys(error).length > 0} onSubmit={handleSubmit}>Submit</button>
        </form>
      </div>
  )
}
