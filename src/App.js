import React, { useState, useEffect } from "react";
import './App.css';

const App = () => {
  const[quotes, setQuotes] = useState("");

  const getQuote = () => {
    fetch("https://type.fit/api/quotes")
    .then((res) => res.json())
    .then((data) => {
      let randomQuote = Math.floor(Math.random() * data.length);
      setQuotes(data[randomQuote]);
  });
  };

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <div className="App">
    
      <div className="quote">
      <p>Quote: {quotes.text}</p>
      <p>-{quotes.author}</p>
      <button className="btn">Get Quote</button>
      <a href=""></a>
      
      </div>
      
    </div>
  );
  };
export default App;
