//These are my imports
import React, { useState, useEffect } from "react";
import './App.css';

//This is my App
const App = () => {
  //This is my useState hook that sets the state
  const[quotes, setQuotes] = useState("");

  //This is my getQuote function
  const getQuote = () => {
    fetch("https://type.fit/api/quotes")
    .then((res) => res.json())
    .then((data) => {
      let randomQuote = Math.floor(Math.random() * data.length);
      setQuotes(data[randomQuote]);
  });
  };
  //This is my useEffect hook that refreshes the quote
  useEffect(() => {
    getQuote();
  }, []);

  //Below is everything displayed in my app
  return (
    <div className="App">
      
      <div className="quote">
      <p>Quote: {quotes.text}</p>
      <p>-{quotes.author}</p>
      <button className="btn">Get Quote</button>
      <a href="" className="btn">Tweet</a>
      </div>
      
    </div>
  );
  };
export default App;
