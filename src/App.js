import CustomizedTables from './Table';
import FixedBottomNavigation from './Navigation';
import './App.css';
import {useState} from 'react';
import Today from './Today';
import Upcoming from './Upcoming';
import Over from './Over';

function App() {

  const [value, setValue] = useState(0);

  const loadPage = (pageVal) => {
    setValue(pageVal)
  }

  return (
    <div className="App">   
        <div className='main'>
          {value === 0 ? <Today/> : value === 1 ? <Upcoming/> : <Over />}
        </div>        
        <div className='btmcont'>   
          <FixedBottomNavigation value = {value} setValue = {setValue} loadPage = {loadPage}/>   
        </div>      
    </div>
  );
}

export default App;
