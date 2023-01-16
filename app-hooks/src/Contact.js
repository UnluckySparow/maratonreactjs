import React from 'react'
// import Addcontact from './Addcontact';

function Contact() {
    const [contacts,setContacts] = React.useState([]);
    React.useEffect (()=>{
      const contfromstorage = JSON.parse(localStorage.getItem("contacts")) || [];
      setContacts(...contacts,contfromstorage);
        return()=>{
        }
    },[]);
    
    function deleteCont(id){
        const oldcont=contacts.filter((contact)=>contact.id !== id);
        localStorage.setItem("contacts",JSON.stringify(oldcont));
        setContacts(oldcont);
    }
   
  return (
    <div className='mx-auto col-md-6 mb-20'>
        <h2 className='text-center'>Test find data contact</h2>
        <table className="table table-hover">
  <thead>
    <tr className='table-danger'>
      <th scope="col">index</th>
      <th scope="col">Name</th>
      <th scope="col">Age</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
    {contacts && contacts.map((contact)=>(
    <tr className="">
      <td>{contact.id}</td>
        <td>{contact.name}</td>
        <td>{contact.Age}</td>
        <td><button type="button" onClick={()=>(deleteCont(contact.id))} className="mt-3 btn btn-danger">Delete</button></td>
      </tr>
    ))
    }
  </tbody>
</table>
    </div>
  )
}

export default Contact;
