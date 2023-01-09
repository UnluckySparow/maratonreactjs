import React from 'react'
import Contactitem from './Contactitem'
import Addcontact from './Addcontact'


class Contact extends React.Component {
    constructor(props){
        super(props)
        this.state={
            contacts: [
                {name:"Aihtmidine" , prenom : "Mouad" , Age : 24},
                {name:"Aihtmidine" , prenom : "Zakaria" , Age : 28},
                {name:"Aihtmidine" , prenom : "Hamid" , Age : 30},
            ]
        }
    }
    addContact=(contact)=>{
        let updatecontact = this.state.contacts;
        updatecontact.push(contact)
        this.setState({contacts : updatecontact})
    }
    deleteContact = (prenom) =>{
        let oldContact = this.state.contacts;
        oldContact = oldContact.filter ((contact) => contact.prenom !== prenom);
        this.setState ({contacts : oldContact});
    }
    render() {
        return (
            <div className='align-middle'>
                <Addcontact addContact={this.addContact} />
                <div className='col-md-6 mx-auto'>
                    <table class="table table-hover">
                        <thead>
                            <tr>
                            <th scope="col">Nom</th>
                            <th scope="col">Prenom</th>
                            <th scope="col">Age</th>
                            <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                                {this.state.contacts.map((contact, index)=>(
                                    <Contactitem deleteContact={this.deleteContact} key={index} contact={contact}/>
                                )
                                )}
                        </tbody>
                    </table>
                </div>
            </div>
          )
    }
    
}

export default  Contact ;