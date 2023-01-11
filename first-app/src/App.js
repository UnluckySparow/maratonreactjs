import './App.css';
import React from 'react';
// import Contact from './Contact';
import Appcontext from './Appcontext';

function App(){
    const {name,email,password} = React.useContext(Appcontext);
    return (
        <div>
            <div className='mx-auto col-md-6'>
            Welcome <strong>{name}</strong> your Mail is <strong>{email}</strong>  and your password is <strong>{password}</strong> 
            </div>
        </div>
    );
}

export default App;
