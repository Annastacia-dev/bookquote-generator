import { useState } from 'react';

const Input = () => {
  const [quote, setQuote] = useState('');
  const [bookTitle, setBookTitle] = useState('');
  const [bookAuthor, setBookAuthor] = useState('');
  const [bookCover, setBookCover] = useState('');
  const [book, setBook] = useState(null)
  const [showCard, setShowCard] = useState(false);

  // Function to fetch book cover from Google Books API
  const fetchBookCover = async (title, author) => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=intitle:${title}+inauthor:${author}`
      );
      const data = await response.json();
      if (data.items && data.items.length > 0) {
        const book = data.items[0].volumeInfo;
        setBook(book)
        if (book.imageLinks && book.imageLinks.thumbnail) {
          setBookCover(book.imageLinks.thumbnail);
        }
      }
    } catch (error) {
      console.error('Failed to fetch book cover:', error);
    }
  };

  const handleGenerate = async (event) => {
    event.preventDefault(); // Prevent page refresh on form submission
    if (quote && bookTitle && bookAuthor) {
      await fetchBookCover(bookTitle, bookAuthor);
      setShowCard(true);
    }
  };

  return (
    <div className="flex md:flex-row flex-col md:gap-20 gap-5">
      <form className="flex flex-col gap-4" onSubmit={handleGenerate}>
        <textarea
          className="bg-white/20 md:w-96 h-40 rounded px-4 py-2 border border-white/10"
          placeholder="Your book quote here"
          value={quote}
          onChange={(e) => setQuote(e.target.value)}
          required
        />
        <input
          className="bg-white/20 md:w-96 rounded px-4 py-2 border border-white/10"
          placeholder="Book title"
          value={bookTitle}
          onChange={(e) => setBookTitle(e.target.value)}
          required
        />
        <input
          className="bg-white/20 md:w-96 rounded px-4 py-2 border border-white/10"
          placeholder="Book author"
          value={bookAuthor}
          onChange={(e) => setBookAuthor(e.target.value)}
          required
        />
        <button
          className="bg-white text-black md:w-96 px-4 py-2 rounded font-semibold tracking-wider"
          type="submit"
        >
          Generate
        </button>
      </form>

      {showCard && bookCover && (
        <div className="quote-card bg-white text-sm text-black p-4 rounded shadow-md max-w-xl flex items-center gap-10 relative">
          <img
            src={bookCover}
            alt="Book Cover"
            className="w-32 h-60 object-cover rounded mb-4"
          />
          <p className=" italic">&quot;{quote}&quot;</p>
          <div className='absolute bottom-3 right-5 flex  gap-1 font-bold'>
            <p>{book.title}</p>,
            <p>{book.authors}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Input;
