import './App.css';
import { Adduser } from './components/Adduser';
import { UserList } from './components/UserList';

function App() {
  return (
    <div className="App">
      <Adduser />
      <br/>
      <UserList />
    </div>
  );
}

export default App;
