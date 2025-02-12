import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

function Fun(){
  return (
  <div>
    <h1>React is really fun!</h1>
    <img src="logo192.png" alt="logo"/>
  </div>
  )
}
  

root.render(
  <div>
    <Fun />
  </div>
);

