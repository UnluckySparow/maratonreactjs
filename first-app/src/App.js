import './App.css';
import React , {Component} from 'react';

class App extends Component {
  Submitform = (event) =>{
    event.preventDefault();
    console.log(this.state);
  } 

  render(){
    console.log(this.state)
    return (
      <div className="App">
        <form onSubmit={(event) => this.Submitform(event)} method='post'>
          <input type={'text'} autoComplete='off' onChange={(event)=>this.setState({...this.state,name:event.target.value})} name='nom' id='inputname' />
          <input type={'email'} autoComplete='off' onChange={(event)=>this.setState({...this.state,email:event.target.value})} name='email' id='inputemail' />
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

export default App;
