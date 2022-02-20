import React, { useCallback, useState } from "react";
import "./App.css";
import CatResults from "./CatResults";

const App = ({ catApiUrl }) => {
  let [facts, setFacts] = useState([]);

  let onSubmit = useCallback((evt) => {
    evt.preventDefault();
    fetch(catApiUrl).then((response) =>
      response.json().then((json) => {
        setFacts([...facts, json.fact]);
      })
    );
  });

  return (
    <div className="App">
      <header className="App-header">Cat facts</header>
      <div>
        <form onSubmit={onSubmit}>
          <button type="submit">Get a cat fact</button>
        </form>
        <CatResults facts={facts} />
      </div>
    </div>
  );
};

export default App;
