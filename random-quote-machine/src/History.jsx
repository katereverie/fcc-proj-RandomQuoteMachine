import PropTypes from "prop-types";

const History = ({ history, clearHistory, isHistoryVisible }) => {

  return (
    <div id="saved-quotes" className={isHistoryVisible ? "" : "hidden"}>
      <div id="button-wrapper">
        <button id="clear-history-btn" onClick={clearHistory}>Clear History</button>
      </div>
      <div className="saved-quotes-wrapper">
        {history.map((quote, index) => (
          <div key={index} className="quote-item">
            <p id="text">{quote.content}</p>
            <span id="author">― {quote.author}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

History.propTypes = {
    history: PropTypes.array.isRequired,
    clearHistory: PropTypes.func.isRequired,
    isHistoryVisible: PropTypes.bool.isRequired
}

export default History