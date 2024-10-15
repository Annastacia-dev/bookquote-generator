import PropTypes from 'prop-types';
import { useState, createContext } from 'react';

const QuoteContext = createContext();

// eslint-disable-next-line react/prop-types
const QuoteProvider = ({ children }) => {
  const [quote, setQuote] = useState('');
  const [bookTitle, setBookTitle] = useState('');
  const [bookAuthor, setBookAuthor] = useState('');
  const [bookCover, setBookCover] = useState('');
  const [book, setBook] = useState(null);
  const [showCard, setShowCard] = useState(true);

  const placeholderQuote =
    'Who has never killed an hour? Not casually or without thought but carefully: a premeditated murder of minutes. The violence comes from a combination of giving up, not caring, and a resignation that getting past it is all you can hope to accomplish. So you kill the hour. You do not work, you do not read, you do not daydream. If you sleep it is not because you need to sleep. And when at last it is over, there is no evidence: no weapon, no blood, and no body';
  const placeholderBookTitle = 'House of Leaves';
  const placeholderBookAuthor = 'Mark Z. Danielewski';
  const placeholderBookCover = bookTitle ? 'notfound.png' : 'houseofleaves.jpg';

  return (
    <QuoteContext.Provider
      value={{
        quote,
        setQuote,
        bookTitle,
        setBookTitle,
        bookAuthor,
        setBookAuthor,
        bookCover,
        setBookCover,
        book,
        setBook,
        showCard,
        setShowCard,
        placeholderBookAuthor,
        placeholderBookCover,
        placeholderBookTitle,
        placeholderQuote,
      }}
    >
      {children}
    </QuoteContext.Provider>
  );
};

QuoteProvider.prototypes = {
  children: PropTypes.any,
};

export { QuoteContext, QuoteProvider };
