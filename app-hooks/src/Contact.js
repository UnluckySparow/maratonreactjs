import React from 'react'
import GetContact  from './redux/actions/Get-contact';
import deletcont  from './redux/actions/Get-contact';
import { useDispatch,connect} from 'react-redux';
function Contact({ contacts }) {
    const [data,setData] = React.useState();
    const dispatch = useDispatch();
    

    React.useEffect (() => {
      // dispatch({GetContact});  
    },[]);
    
    function Remcont(id){
        dispatch(deletcont(id));  
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
    {data && data.map((contact)=>(
    <tr className="">
      <td>{contact.id}</td>
        <td>{contact.name}</td>
        <td>{contact.Age}</td>
        <td><button type="button" onClick={()=>(Remcont(contact.id))} className="mt-3 btn btn-danger">Delete</button></td>
      </tr>
    ))
    }
  </tbody>
</table>
    </div>
  )
}
const mapStateProps = ({contact : {contacts}})=>({
  contacts,
});
export default connect(mapStateProps,null)(Contact);
