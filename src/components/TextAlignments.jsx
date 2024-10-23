import { useContext, useRef, useEffect } from 'react';
import { QuoteCardContext } from '../context/QuoteCard';
import PropTypes from 'prop-types';

const TextAlignments = ({ setShowAlignmentPopUp }) => {
  const { font, textAlignment, setTextAlignment, textAlignments } =
    useContext(QuoteCardContext);

  const alignmentRef = useRef(null);

  const handleClickOutside = (event) => {
    if (alignmentRef.current && !alignmentRef.current.contains(event.target)) {
      setShowAlignmentPopUp(false);
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
      ref={alignmentRef}
    >
      <div className="flex items-center gap-2" style={{ fontFamily: font }}>
        {textAlignments.map((alignment, index) => (
          <button
            key={index}
            className={`$capitalize text-lg py-2 px-4 rounded ${textAlignment.title === alignment.title ? 'border-2 border-primary' : ''}`}
            onClick={() => setTextAlignment(alignment)}
            title={alignment.title}
          >
            {alignment.icon}
          </button>
        ))}
      </div>
    </div>
  );
};

TextAlignments.propTypes = {
  setShowAlignmentPopUp: PropTypes.func.isRequired,
};

export default TextAlignments;
