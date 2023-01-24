import './App.css';
import { GET_CONTACT } from './queries/queries';
import { useQuery } from '@apollo/react-hooks';
function App() {
  const data = useQuery(GET_CONTACT);
  console.log(data);
  return (
    <div className="App">
      App      
    </div>
  );
}

export default App;
