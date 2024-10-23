import { useContext, useRef, useEffect } from 'react';
import { QuoteCardContext } from '../context/QuoteCard';
import { FaImage } from 'react-icons/fa6';
import PropTypes from 'prop-types';

const Background = ({ setShowBackgroundPopUp }) => {
  const { backgroundColor, backgroundColors, setBackgroundColor, font } =
    useContext(QuoteCardContext);

  const backgroundRef = useRef(null);

  const handleClickOutside = (event) => {
    if (
      backgroundRef.current &&
      !backgroundRef.current.contains(event.target)
    ) {
      setShowBackgroundPopUp(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div
      className="flex flex-col gap-2 absolute bg-white/20 p-2 rounded top-9"
      ref={backgroundRef}
    >
      <div className="flex items-center gap-2" style={{ fontFamily: font }}>
        {backgroundColors.map((color, index) => (
          <button
            key={index}
            className={`${color} capitalize h-8 w-8 text-xs rounded ${backgroundColor === color ? 'border-2 border-primary' : ''}`}
            onClick={() => setBackgroundColor(color)}
          >
            a
          </button>
        ))}
        <button
          className={`capitalize h-8 w-8 text-lg flex items-center justify-center rounded ${backgroundColor === 'image' ? 'border-2 border-primary' : ''}`}
          onClick={() => setBackgroundColor('image')}
        >
          <FaImage />
        </button>
      </div>
    </div>
  );
};

Background.propTypes = {
  setShowBackgroundPopUp: PropTypes.func.isRequired,
};

export default Background;
