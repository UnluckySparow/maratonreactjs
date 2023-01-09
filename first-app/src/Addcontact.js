import { render } from '@testing-library/react';
import React from 'react'

class Addcontact extends React.Component {
    constructor(props){
        super(props)
        this.state={
            name:'',
            prenom:'',
            Age:''
    }
}
    SubmitForm = (event) =>{
        event.preventDefault();
        const contact ={
            name : this.state.name,
            prenom : this.state.prenom,
            Age: this.state.Age
        }
        console.log(contact);
        this.props.addContact(contact);
        this.setState({name:"",prenom:"",Age:""})
        
    }
  render(){
    return (
        <div className='col-md-6 mx-auto'>
            <form method='post' onSubmit={(event)=>this.SubmitForm(event)} className='form-group'>
            <div class="form-floating mb-3">
                <input type="text" 
                    className="form-control" 
                    id="floatingInput" 
                    placeholder="Nom"
                    name='name'
                    value={this.state.name}
                    autoComplete='off'
                    onChange={(event)=>this.setState({name:event.target.value})}
                />
                <label for="floatingInput">Nom</label>
            </div>
            <div class="form-floating mb-3">
                <input type="text" 
                    className="form-control" 
                    id="floatingInput" 
                    autoComplete='off'
                    placeholder="prenom"
                    name='prenom'
                    value={this.state.prenom}
                    onChange={(event)=>this.setState({prenom : event.target.value})}
                />
                <label for="floatingInput">Prenom</label>
            </div>
            <div class="form-floating mb-3">
                <input type="text" 
                    className="form-control" 
                    id="floatingInput" 
                    placeholder="Age"
                    autoComplete='off'
                    name='Age'
                    value={this.state.Age}
                    onChange={(event)=>this.setState({Age:event.target.value})}
                />
                <label for="floatingInput">ton Age</label>
            </div>
            <button type="submit" class="btn btn-primary">Ajouter un contact</button>
            </form>
        </div>
      )
  }
}
export default  Addcontact ; 