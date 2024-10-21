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
    loadFont,
    fontBold,
    setFontBold,
    fontItalic,
    setFontItalic,
    showBookCover,
    setShowBookCover,
  } = useContext(QuoteCardContext);

  loadFont(font);

  return (
    <div className="py-3 lg:mt-12">
      <div className="flex items-center gap-2 text-primary">
        <FaWandMagicSparkles />
        <h5 className="font-bold tracking-wider capitalize">customize card</h5>
      </div>
      <hr className="mt-1 mb-4" />

      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mt-6">
        {/* Background */}
        <div className="flex flex-col gap-2 text-sm">
          <h5 className="text-sm capitalize">Background Color</h5>
          <div className="flex items-center gap-2" style={{ fontFamily: font }}>
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

        {/* Font */}
        <div className="flex flex-col gap-2 text-sm">
          <h5 className="text-sm capitalize">Font</h5>
          <CustomDropdown
            options={fonts}
            selectedOption={font}
            onSelect={setFont}
            onHover={setHoveredFont}
            loadFont={loadFont}
          />
        </div>

        {/* Font Styles */}
        <div className="flex flex-col gap-2 text-sm">
          <h5 className="text-sm capitalize">font styles</h5>
          <div className="flex items-center gap-2" style={{ fontFamily: font }}>
            <button
              className={`capitalize py-2 px-4 rounded ${backgroundColor}  ${fontBold && 'font-bold'}`}
              onClick={() => setFontBold(!fontBold)}
            >
              a
            </button>
            <button
              className={`capitalize py-2 px-4  rounded ${backgroundColor} ${fontItalic && 'italic'}`}
              onClick={() => setFontItalic(!fontItalic)}
            >
              a
            </button>
          </div>
        </div>

        {/* Book Cover */}
        <div className="flex items-center mb-4">
          <label className="mr-2 text-sm">Show Book Cover:</label>
          <div
            className={`relative inline-flex items-center cursor-pointer ${showBookCover ? 'bg-primary' : 'bg-gray-400'} rounded-full w-12 h-6`}
            onClick={() => setShowBookCover(!showBookCover)}
          >
            <span
              className={`absolute left-0 w-6 h-6 bg-white rounded-full transition-transform duration-200 ${showBookCover ? 'transform translate-x-6' : ''}`}
            ></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customize;
