import { FaWandMagicSparkles } from 'react-icons/fa6';
import { useContext } from 'react';
import { QuoteCardContext } from '../context/QuoteCard';
import { FaImage } from 'react-icons/fa6';

const Customize = () => {
  const { backgroundColor, backgroundColors, setBackgroundColor } =
    useContext(QuoteCardContext);

  return (
    <div className="py-3">
      <div className="flex items-center gap-2 text-primary">
        <FaWandMagicSparkles />
        <h5 className="font-bold tracking-wider capitalize">
          {' '}
          customize card{' '}
        </h5>
      </div>
      <hr className="mt-1 mb-4" />

      <div className="flex flex-col gap-2 text-sm">
        <h5 className="text-sm">Background Color</h5>
        <div className="flex items-center gap-2">
          {backgroundColors.map((color, index) => (
            <button
              key={index}
              className={`${color} capitalize py-2 px-4 rounded ${backgroundColor === color ? 'border-2 border-primary' : ''}`}
              onClick={() => setBackgroundColor(color)}
            >
              a
            </button>
          ))}
          <button
            className={`capitalize py-2 px-4 text-lg rounded ${backgroundColor === 'image' ? 'border-2 border-primary' : ''}`}
            onClick={() => setBackgroundColor('image')}
          >
            <FaImage />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Customize;
