import React from 'react'
// import Contactitem from './Contactitem'
// import Addcontact from './Addcontact'


function Contact () {
    const [contacts,setContacts]=React.useState([]);
    const listcontact=[
        {name:"Aihtmidine" , prenom : "Mouad" , Age : 24},
        {name:"Aihtmidine" , prenom : "Zakaria" , Age : 28},
        {name:"Aihtmidine" , prenom : "Hamid" , Age : 30},
    ]
    console.log(contacts)
    React.useEffect(()=>{
        setContacts(listcontact);
        return()=>{
            console.log(contacts)
        };
    },[contacts])
    // addContact=(contact)=>{
    //     let updatecontact = this.state.contacts;
    //     updatecontact.push(contact)
    //     this.setState({contacts : updatecontact})
    // }
    // deleteContact = (prenom) =>{
    //     let oldContact = this.state.contacts;
    //     oldContact = oldContact.filter ((contact) => contact.prenom !== prenom);
    //     this.setState ({contacts : oldContact});
    // }
        return (
            <div className='align-middle'>
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
                                {contacts.map((contact)=>(
                                    <tr>
                                    <td>{contact.name}</td>
                                     <td>{contact.prenom}</td> 
                                      <td>{contact.Age}</td>
                                     <td><button type="button"  class="btn btn-outline-danger">Delete</button></td>
                                   </tr>
                                )
                                )}
                        </tbody>
                    </table>
                </div>
            </div>
          )
    
}

export default  Contact ;