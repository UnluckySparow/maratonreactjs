import React from 'react'

function Addcontact({history}) {
    const [contact,setContact]=React.useState([
        {id:'',name:'',Age:''}
    ])
    const [contacts ,setContacts]=React.useState([]);
    function Submitform(event){
            event.preventDefault();
            contacts.push(contact)
            localStorage.setItem("contacts",JSON.stringify(contacts));
            alert("contact added success")
            setContact({id:'',name:'',Age:''})
        }
        React.useEffect (()=>{
            const contfromstorage = JSON.parse(localStorage.getItem("contacts")) || [];
            setContacts(...contacts,contfromstorage);
              return()=>{
              }
          },[]);
  return (
    <div className='mb-4 mx-auto col-md-6'>
        <form onSubmit={(event)=>Submitform(event)}>
        <div className="form-group">
        <label className="form-label mt-4 text-center">Addcontact</label>
        <div className="form-floating mb-3">
            <input type="text" className="form-control" name={contact.id} id="floatingInput" autoComplete='off' placeholder='id' onChange={(event)=>setContact({...contact, id:event.target.value})}/>
            <label for="floatingInput">Num serie</label>
        </div>
        <div className="form-floating mb-3">
            <input type="text" className="form-control" name={contact.name} id="floatingInput" autoComplete='off' placeholder='name' onChange={(event)=>setContact({...contact, name:event.target.value})}/>
            <label for="floatingInput">Name</label>
        </div>
        <div className="form-floating">
            <input type="number" className="form-control" id="floatingPassword"  name="Age" autoComplete='off' placeholder='Age' onChange={(event)=>setContact({...contact,Age:event.target.value})}/>
            <label for="floatingPassword">Age</label>
        </div>
        <button type="submit" className="mt-3 btn btn-success">Success</button>

        </div>
        </form>
    </div>
  )
}
export default  Addcontact ; 