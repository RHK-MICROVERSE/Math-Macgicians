import '../App.css';
import React, { useState } from 'react';

function Quote() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const category = 'success';

  const getQuotes = async () => {
    const url = `https://api.api-ninjas.com/v1/quotes?category=${category}`;
    try {
      setLoading(true);
      fetch(url, {
        method: 'GET',
        withCredentials: true,
        headers: {
          'X-Api-Key': 'ZCgl8KYeSiqWDLrmf04t1w==xr9OFQ2sOu8X8MW1',
          'Content-Type': 'application/json',
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setQuote(data[0].quote);
          setAuthor(data[0].author);
        });
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setErrorMessage(error);
    }
  };

  useState(() => {
    getQuotes();
  }, []);

  const handleClick = () => {
    getQuotes();
  };

  return (
    <div className="quote-container">
      <h2>
        {quote}
        <span className="author">
          &nbsp;(
          { author}
          )
        </span>
      </h2>
      <button
        type="button"
        onClick={handleClick}
        className="quote-button"
      >
        {loading ? 'Loading..' : 'New Quote'}
      </button>
    </div>
  );
}

export default Quote;