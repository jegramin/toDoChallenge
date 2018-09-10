import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      toDos : [],
      done : [],
      todoText:""
    }
    
  }
  onEnter = () =>{
    this.setState ({
      toDos : this.state.toDos =[...this.state.toDos, this.state.todoText]
    })
  }
  
  render() {
    return (
      <div className="App">
        <input id="toDo" type="text" 
        onKeyDown={e =>{(e.keyCode == 13)?  this.onEnter() :false} }
        onChange = {(e => {
          this.setState({
            todoText: e.target.value
          })
        })}
        >
        </input>
        <div>
          <h2>To Do</h2>
          <div id="toDos">
            {this.state.toDos.map(x=>(
              <div id="toD">{x} <input type="checkBox" 
              onClick={() =>{
                this.setState({
                  done : this.state.done =[...this.state.done, x],
                  toDos: this.state.toDos.filter(a=> x!==a)
                })
              }
              }></input></div>
            ))}
          </div>
        </div>
        <div>
          <h2>Done</h2>
          <div id="Done">
          {this.state.done.map(x=>(
            <div>{x}</div>
          ))}
          </div>
        </div>
      </div>
    );
  }
  
}


export default App;
