import { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {

  const [personsData, setPersonsData] = useState([]);

  useEffect(() => {

    axios.get('/getpersons')
      .then(res => setPersonsData(res.data))

  }, []);

  return (
    <div>
      <ul>
        {
          (personsData.length > 0)
            ? personsData.map(person => {
              return <li>{`Name: ${person.name} | Interest: ${person.interest}`}</li>
            })
            : <h4>Nothing in personsData</h4>
        }
      </ul>
    </div>
  )
}

export default App
