import { useContext, useRef } from 'react';
import { QuoteContext } from '../context/Quote';
import html2canvas from 'html2canvas';
import { FiDownload } from 'react-icons/fi';
import {saveAs} from 'file-saver';

const QuoteCard = () => {
  const {
    bookCover,
    placeholderBookCover,
    quote,
    placeholderQuote,
    book,
    placeholderBookTitle,
    placeholderBookAuthor,
    showCard,
  } = useContext(QuoteContext);

  const quoteCardRef = useRef(null);


  const captureQuoteCardImage = async () => {
    const quoteElement = document.getElementById("quote-card");
    const canvas = await html2canvas(quoteElement, { scale: 2 });
    return new Promise((resolve) => {
      canvas.toBlob((blob) => {
        const file = new File([blob], "quote-card.png", { type: "image/png" });
        resolve(file);
      });
    });
  };

  const downloadQuoteCard = () => {
    captureQuoteCardImage().then((file) => saveAs(file, `${book?.title || placeholderBookTitle}.png`));
  };

  return (
    <div className="relative">
      <div
        id='quote-card'
        className="bg-white text-sm text-black p-4 rounded shadow-md max-w-xl flex items-center gap-10 relative"
        ref={quoteCardRef}
      >
        <img
          src={bookCover || placeholderBookCover}
          alt="Book Cover"
          className="w-32 h-60 object-cover rounded mb-4"
        />
        <p className="italic">&quot;{quote || placeholderQuote}&quot;</p>
        <div className="absolute bottom-3 right-5 flex gap-1 font-bold">
          <p>{book?.title || placeholderBookTitle}</p>,
          <p>
            {book?.authors ? book.authors.join(', ') : placeholderBookAuthor}
          </p>
        </div>
      </div>
      {showCard && (
        <button
          className="bg-primary text-black px-4 py-2 mt-4 rounded absolute -top-16"
          onClick={downloadQuoteCard}
        >
          <FiDownload />
        </button>
      )}
    </div>
  );
};

export default QuoteCard;
