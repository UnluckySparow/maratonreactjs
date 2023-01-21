import './App.css';
import React from 'react';
// import Contact from './Contact';
// import Appcontext from './Appcontext';
import Countreducer from './Countreducer';
function App(){
    const initialState = {count : 0};
    const [state , dispatch] = React.useReducer(Countreducer,initialState)
    return (
        <div className='mx-auto col-md-6'>
           <div>
           <button onClick={() => dispatch({type : "plus"})} className='btn btn-primary success'>+</button>
           <button onClick={() => dispatch({type : "moins"})} className='btn btn-outline-danger'>-</button>

           </div>
           <div>{state.count}</div>

        </div>
    );
}

export default App;
