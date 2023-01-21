import React from 'react'

function Contactitem({contact}) {
  return (
    <tr>
     <td>{contact.name}</td>
      <td>{contact.prenom}</td> 
       <td>{contact.Age}</td>
      <td><button type="button"  class="btn btn-outline-danger">Delete</button></td>
    </tr>
  )
}

export default Contactitem;