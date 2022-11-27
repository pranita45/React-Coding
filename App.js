
import './App.css';
import Navbar from './component/Navbar';
import Button from './component/Button';
import Class from './component/Class';
import Counter from './component/Counter';
import UserData from './component/UserData';
import LifeCycle from './component/LifeCycle';
import ApiTest from './component/APIcomponent';

 

function App() {
  return (
    <div className="App">
      <Navbar/>
     <Button/>
     <Class/>
     <Counter/>
     <UserData/>
     <LifeCycle/>
     <API/>
    </div>

  );
}

export default App;
