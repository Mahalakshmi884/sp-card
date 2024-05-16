import React, { useState } from 'react';
import './App.css'; // This will be used for CSS

function App() {
  const [cart, setCart] = useState([]);
  const item = {
    name: "Western design",
    price:'9999',
    description: "latest design",
    image: "https://img.freepik.com/free-photo/young-woman-beautiful-red-dress_1303-17506.jpg"
  };

  const addToCart = () => {
    setCart([...cart, item]);
  };

  const removeFromCart = () => {
    setCart([]);
  };

  return (
    <div className="container">
      <div className="card">
        <img src={item.image} alt={item.name} className="card-img"/>
        <div className="card-body">
          <h2 className="card-title">{item.name}</h2>
          <p className="card-text">{item.description}</p>
          <p className="card-price">${item.price}</p>
          <button className="btn" onClick={addToCart}>Add to Cart</button>
        </div>
      </div>
      <div className="cart">
        <h2>Cart</h2>
        {cart.length > 0 ? (
          <div>
            {cart.map((item, index) => (
              <div key={index} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-img"/>
                <div>
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                </div>
              </div>
            ))}
            <button className="btn btn-remove" onClick={removeFromCart}>Remove </button>
          </div>
        ) : (
          <p>Your cart is empty</p>
        )}
      </div>
    </div>
  );
}

export default App;
