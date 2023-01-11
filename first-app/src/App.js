import './App.css';
import React from 'react';
// import Contact from './Contact';
import Appcontext from './Appcontext';
function App(){
    const {name,email,password} = React.useContext(Appcontext)
    return (
        <div>
            <div className='mx-auto col-md-6'>
                <h3>User : {name}</h3>
                <h3>email : {email}</h3>
                <h3>Password : {password}</h3>
            </div>
        </div>
    );
}

export default App;
