import React from 'react'

function Contactitem({contact , deleteContact}) {
  return (
    <tr>
     <td>{contact.name}</td>
      <td>{contact.prenom}</td>
      <td>{contact.Age}</td>
      <td><button type="button" onClick={()=>deleteContact(contact.prenom)} class="btn btn-outline-danger">Delete</button></td>
    </tr>
  )
}

export default Contactitem;