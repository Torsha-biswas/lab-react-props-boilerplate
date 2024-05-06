import React from 'react';
import './App.css';
import DataComponent from './Components/DataComponent'; 

function App() {
  const data = DataComponent(); 

  return (
    <div className="App">
      <h1>Kalvium Gallery</h1>
      <div className="image-container">
        {data.map(item => (
          <img key={item.id} src={item.img} alt={`Elephant ${item.id}`} />
        ))}
      </div>
    </div>
  );
}

export default App;
