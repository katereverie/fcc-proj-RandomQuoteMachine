import { useState } from "react";
import Card from "./Card";
import History from "./History";

const App = () => {
  const [history, setHistory] = useState([]);
  const [isHistoryVisible, setIsHistoryVisible] = useState(false);

  const addQuoteToHistory = (quote) => {
    setHistory((prevHistory) => [...prevHistory, quote]);
  }

  const clearHistory = () => {
    setHistory([]);
  }

  const toggleHistory = () => {
    setIsHistoryVisible(!isHistoryVisible);
  }

  return (

    <div className="App">
      <header>
        <h1>Random Quote Machine</h1>
      </header>
      <Card 
        addQuoteToHistory={addQuoteToHistory}
        history={history}
        toggleHistory={toggleHistory}
      />
      <History 
        history={history}
        clearHistory={clearHistory}
        isHistoryVisible={isHistoryVisible}
      />
      <footer>
        <p>&copy; {new Date().getFullYear()} <span id="app-author">Katereverie</span></p>
      </footer>
    </div>

  );
}

export default App