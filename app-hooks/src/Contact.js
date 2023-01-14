import React from 'react'
import Addcontact from './Addcontact';

function Contact() {
    const [contacts,setContacts] = React.useState([
      {name:"mouad",Age:20},
      {name:"Hamid",Age:30},
      {name:"Zakaria",Age:40}
  ]);
    React.useEffect (()=>{
        return()=>{
        }
    },[]);
    
    function deleteCont(naame){
        const oldcont=contacts.filter((contact)=>contact.name !== naame);
        setContacts(oldcont);
    }
    function Addcont(contact){
        setContacts([...contacts,contact]);
    }
  return (
    <div className='mx-auto col-md-6 mb-20'>
        <Addcontact Addcont={Addcont}/>

        <h2 className='text-center'>Test find data contact</h2>
        <table class="table table-hover">
  <thead>
    <tr className='table-danger'>
      <th scope="col">Name</th>
      <th scope="col">Age</th>
    </tr>
  </thead>
  <tbody>
    {contacts && contacts.map((contact)=>(
    <tr class="">
        <td>{contact.name}</td>
        <td>{contact.Age}</td>
        <td><button type="button" onClick={()=>(deleteCont(contact.name))} className="mt-3 btn btn-danger">Delete</button></td>
      </tr>
    ))
    }
  </tbody>
</table>
    </div>
  )
}

export default Contact;
