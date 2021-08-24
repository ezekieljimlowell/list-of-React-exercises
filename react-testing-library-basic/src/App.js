import './App.css';
import TestElements from './TestElements';
import TestAsync from './TestAsync';
import { Provider } from "react-redux";
import { createStore } from 'redux';
import Reducer from './store/Reducer';
import Redux from './Redux';

const store = createStore(Reducer);

function App() {
  return (
    <div className="App">
      <TestElements />
      <TestAsync />
      <Provider store={store}><Redux /></Provider>
    </div>
  );
}

export default App;
