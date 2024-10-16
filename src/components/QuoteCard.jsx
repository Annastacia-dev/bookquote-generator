import { useContext, useRef } from 'react';
import { QuoteContext } from '../context/Quote';
import { QuoteCardContext } from '../context/QuoteCard';
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

  const { backgroundColor } = useContext(QuoteCardContext)

  const quoteCardRef = useRef(null);


  const captureQuoteCardImage = async () => {
    const quoteElement = document.getElementById("quote-card");
    const canvas = await html2canvas(quoteElement, { scale: 1 });
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
        className={`${backgroundColor} text-sm p-4 shadow-md max-w-xl max-h-xl flex flex-col items-center gap-5 relative`}
        ref={quoteCardRef}
      >
        <div className='flex md:flex-row flex-col items-center md:gap-10 gap-5'>
        <img
          src={bookCover || placeholderBookCover}
          alt="Book Cover"
          className="md:w-36 w-28 object-cover rounded mb-4"
        />
        <p className="italic">&quot;{quote || placeholderQuote}&quot;</p>
        </div>
        <div className="flex gap-1 font-bold justify-end w-full text-right">
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
