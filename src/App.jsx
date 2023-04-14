import './App.css';
import React, {useState, useEffect} from 'react'; 
import {MapContainer, TitleLayer, Marker, Popup } from 'react-leaflet';

function App() {
    const [count, setCount] = useState(
        Number(window.localStorage.getItem('count') || 0)
    );
    useEffect(() => {
        if(window.localStorage.getItem("count") !== undefined){
            window.localStorage.setItem('count', count);
        }else{
            window.localStorage.setItem('count', 0);
        }
    }, [count]);



  return (
    <div className="App-header">
      <header>
        Click-Counter
      </header>
      <div className='button_container'>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}> Increment Count</button>
      </div>
    </div>
  );
}

export default App;
