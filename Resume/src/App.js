import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Sign in</h1>
     <form>
      <label for="">Name</label>
      <input type="text"></input>
      
      <label for="">Email</label>
      <input type="text"></input>
      <label for="">Password</label>
      <input type="password"></input>
      <button type="Submit">Submit</button>
     </form>
      
    </div>
  );
}

export default App;
