import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement, isLoggedIn} from './actions';

function App() {

  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
 
  return (
    <div className="App">
      <h1>App: {counter}</h1>
      {isLogged ? <h1>Protected</h1> : ""}

    <button onClick={() => dispatch(increment())}>+</button>
    <button onClick={() => dispatch(decrement())}>-</button>
    <button onClick={() => dispatch(isLoggedIn())}>login</button>

    </div>
  );
}

export default App;
