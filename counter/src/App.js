import { useState } from 'react';
import './App.css';
import Counter from './Counter';
import UserInfo from './UserInfo';


function App() {
  const [ appCounter, setAppCounter ] = useState(0);

  const user = {
    "id": 1,
    "jobTitleName": "Developer",
    "firstName": "Ahmed",
    "lastName": "Ali",
    "prefferedFullName": "Ahmed Ali",
    "employeeCode": "E1",
    "region": "CA",
    "phoneNumber": "408-1234567",
    "emailAddress": "ahmed.ali@gmail.com"
  }

  return (
    <div className="App">
      <Counter setAppCounter={ setAppCounter } appCounter={ appCounter } />
      <Counter setAppCounter={ setAppCounter } appCounter={ appCounter } />
      <UserInfo user={ user } />
    </div>
  );
}

export default App;
