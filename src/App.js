import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
import Sale from './Sale.js';


function App() {

  const [str] = useState('Nicolas')

  const prodctList = [
    { name: "Doce de abóbora", price: 0.5, discountPercentage: null },
    { name: "Salgadinho", price: 2.5, discountPercentage: 10 },
    { name: "Refrigerante", price: 8.5, discountPercentage: 5 },
    { name: "Maçã", price: 0.7, discountPercentage: null },
    { name: "Feijão", price: 2.7, discountPercentage: 15 },
  ];

  const listItems = prodctList.map((product) => <li><Sale name={product.name} price={product.price} discountPercentage={product.discountPercentage} /></li>);

  return (
    <div className="App">
      <h1>Hello World, eu sou o {str}</h1>
      <ul>{listItems}</ul>
      <Sale />
    </div>
  );
}

export default App;
