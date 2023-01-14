import React from 'react'

export default function Addcontact({Addcont}) {
    const [contact,setContact]=React.useState([
        {name:'',Age:''}
    ])
    function Submitform(event){
            event.preventDefault();
            Addcont(contact)
        }
  return (
    <div className='mb-4'>
        <form onSubmit={(event)=>Submitform(event)}>
        <div class="form-group">
        <label class="form-label mt-4 text-center">Addcontact</label>
        <div class="form-floating mb-3">
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
