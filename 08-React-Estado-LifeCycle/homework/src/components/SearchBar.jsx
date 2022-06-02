import React, { useState } from "react";


export default function SearchBar({onSearch}) {
  
  const [nameCity, setNameCity] = useState('')

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(nameCity);
    }}>
      <input type="text" placeholder="Ciudad..." onChange={(txt)=>{setNameCity(txt.target.value)}}/>
      <input type="submit" value="Agregar" />
    </form>
  );
}

/*  handleChange = (e) => {
  const [city, setCity] = useState({});
  const handleChange = (e)=>{
    setCity(e.target.value)
  }
  
  const newCard = ()=>{
    console.log(onSearch);
    <Cards city={city}/>
  }
      this.setState({
        input: e.target.value
      })
    }

    render(){
      return (
        <div>
            <input type='text' onChange={this.handleChange} />
            <button onClick={this.onButtonClick}>get Post!</button>
          <Post
            body={this.state.body}
            title={this.state.title}
          />
        </div>  
      )
    } */