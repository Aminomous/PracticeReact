import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';

class App extends Component {
  constructor(){
    super();
    this.state = {
      lists:[{'desc':'temp desc'}]
    }
    this.add = this.add.bind(this);
  }
  
  add(){
    this.setState({
      lists:this.state.lists.concat([{ 'desc': this.refs.list_input.value}])
    }) 
    this.refs.list_input.value = '';
  }
  render() {
    return (
      <div>
      <div>      
      <label htmlFor=""> ENTER SOMETHING<input type="text" ref='list_input'/> </label>
      <button onClick={this.add}>SUBMIT</button>
      </div>
      <ToDoListTable lists={this.state.lists} />
      </div>
    );
  }
}

class ToDoListTable extends Component {
  constructor(props){
    super(props);
    
  }
  render(){
    const allList = this.props.lists.map((list)=>{
      return (<tr>
      <td>{list.desc}</td>
      </tr>
      )
    })
    return (
      <div>
      <table>
      <tr>
      <th>Description</th>
      </tr>
      {allList}
      </table>
      </div>
    )
  }
}

export default App;
