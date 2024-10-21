import { FaWandMagicSparkles } from 'react-icons/fa6';
import { useContext } from 'react';
import { QuoteCardContext } from '../context/QuoteCard';
import { FaImage } from 'react-icons/fa6';
import CustomDropdown from './CustomDropdown';

const Customize = () => {
  const {
    backgroundColor,
    backgroundColors,
    setBackgroundColor,
    font,
    fonts,
    setFont,
    setHoveredFont,
    loadFont
  } = useContext(QuoteCardContext);

  return (
    <div className="py-3 lg:mt-12">
      <div className="flex items-center gap-2 text-primary">
        <FaWandMagicSparkles />
        <h5 className="font-bold tracking-wider capitalize">
          {' '}
          customize card{' '}
        </h5>
      </div>
      <hr className="mt-1 mb-4" />

      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4 mt-6">
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

        <div className="flex flex-col gap-2 text-sm">
          <h5 className="text-sm">Font</h5>
          <CustomDropdown
            options={fonts}
            selectedOption={font}
            onSelect={setFont}
            onHover={setHoveredFont}
            loadFont={loadFont}
          />
        </div>
      </div>
    </div>
  );
};

export default Customize;
