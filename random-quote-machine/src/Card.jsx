import { useState, useEffect } from "react"
import X_icon from "./assets/X_icon.png";
import PropTypes from "prop-types";

const Card = ({ addQuoteToHistory, history, toggleHistory}) => {

  const [data, setData] = useState('');

  const API_URL = "https://api.quotable.io/quotes/random";
  
  const updateQuote = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      console.log(data);
      setData(data);
    } catch (error) {
      console.log(`Oops...there is an error fetching data: ${error}`)
    }
  }
  
  const saveQuote = () => {
    if (history.some((quote) => quote.content === data.content)) {
      alert("You have already saved this quote.")
    } else {
      addQuoteToHistory({ content: data.content, author: data.author});
    }
  }

  useEffect(() => {
    updateQuote();
  }, [])

  if (!data) return null;

  const handleTweetClick = (e) => {
    e.preventDefault();
    const shareText = `"${data.content}" - ${data.author}`;
    const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`;
      
    window.open(shareUrl, '_blank');
  }

  return (
    <div id="quote-box">
      <div className="quote-wrapper">
        <p id="text">{data.content}</p>
        <span id="author">--- {data.author}</span>
      </div>
      <div className="button-wrapper">
        <button id="new-quote" onClick={updateQuote}>New Quote</button>
        <button id="save-quote" onClick={saveQuote}>Save</button>
        <button id="see-history-btn" onClick={toggleHistory}>History</button>
        <a 
          id="tweet-quote"
          href="twitter.com/intent/tweet" 
          target="_blank"
          title="Click to tweet the quote!"
          rel="noopener noreferrer"
          >
          <img src={X_icon} alt="icon" onClick={handleTweetClick} style={{ cursor: "pointer" }}/>
        </a>  
    </div>
    </div>
  );
}

Card.propTypes = {
    addQuoteToHistory: PropTypes.func.isRequired,
    history: PropTypes.array.isRequired,
    toggleHistory: PropTypes.func.isRequired
}

export default Card