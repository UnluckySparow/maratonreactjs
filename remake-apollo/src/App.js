import './App.css';
import {GET_CONTACT} from './queries/queries';
import { useQuery } from '@apollo/react-hooks';
// import { useState,useEffect } from 'react';

function App() {
  const {data,error,loading} = useQuery(GET_CONTACT);
  console.log(data);
// useEffect(()=>{
//   axios.get("http://cute-toad-90.hasura.app/v1/graphql").then((res)=>{
//   console.log("wesalt hna 1");
//   setUsers(res.user);
//   console.log(res.user)
// }).catch(error => {
//     console.log(error)
//     });
// },[]);
  if(error){
    return 
      <div className='container col-md-6 alert alert-danger'>
        You have error 
      </div>
  }
  if(loading){
    return 
      <div className='container'>
        <div className='container row my-4'>
          <div className='spring-grow'></div>
        </div>
      </div>
  }
  return (
    <div className="App col-md-6 mx-auto">
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">CIN</th>
            <th scope="col">FULL NAME </th>
            <th scope="col">MAIL</th>
            <th scope="col">AGE</th>
          </tr>
        </thead>
        <tbody>
          {/* {data.user.map((us)=>{
            <tr>
              <th>{us.Carte_national}</th>
              <th>{us.fullname}</th>
              <th>{us.mail}</th>
              <th>{us.age}</th>
            </tr>
          })} */}
        </tbody>
      </table>      
    </div>
  );
}

export default App;
