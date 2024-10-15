import { useContext } from 'react';
import { QuoteContext } from '../context/Quote';


const Input = () => {

  const { setBook, setBookCover, bookAuthor, bookTitle, setShowCard, quote, setQuote, setBookTitle, setBookAuthor } = useContext(QuoteContext);

  const fetchBookCover = async (title, author) => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=intitle:${title}+inauthor:${author}`
      );
      const data = await response.json();
      if (data.items && data.items.length > 0) {
        const book = data.items[0].volumeInfo;
        setBook(book);
        if (book.imageLinks && book.imageLinks.thumbnail) {
          setBookCover(book.imageLinks.thumbnail);
        } else {
          setBookCover(''); // Handle if no cover image
        }
      }
    } catch (error) {
      console.error('Failed to fetch book cover:', error);
    }
  };

  const handleGenerate = async (event) => {
    event.preventDefault(); // Prevent page refresh on form submission

    // Always show the card (so the quote can update independently)
    setShowCard(true);

    // Fetch book cover and details only if both title and author are provided
    if (bookTitle ) {
      await fetchBookCover(bookTitle, bookAuthor);
    }
  };

  return (
  
      <form className="flex flex-col gap-4" onSubmit={handleGenerate}>
        <textarea
          className="bg-white/20 md:w-[40vw] h-40 rounded px-4 py-2 border border-white/10"
          placeholder="Your book quote here"
          value={quote}
          onChange={(e) => setQuote(e.target.value)}
          minLength={10}
          maxLength={1000}
          required
        />
        <div className='flex gap-1'>
          <input
            className="bg-white/20 md:w-[20vw] w-full rounded px-4 py-2 border border-white/10"
            placeholder="Book title"
            value={bookTitle}
            onChange={(e) => setBookTitle(e.target.value)}
            required
          />
          <input
            className="bg-white/20 md:w-[20vw] w-full rounded px-4 py-2 border border-white/10"
            placeholder="Book author"
            value={bookAuthor}
            onChange={(e) => setBookAuthor(e.target.value)}
          />
        </div>
        <button
          className="bg-white mt-2 text-black md:w-[40vw] px-4 py-2 rounded font-semibold tracking-wider"
          type="submit"
        >
          Generate
        </button>
      </form>
  );
};

export default Input;
