import { FaWandMagicSparkles } from 'react-icons/fa6';
import { useState, useContext } from 'react';
import { QuoteCardContext } from '../context/QuoteCard';
import CustomDropdown from './CustomDropdown';
import { TbBackground } from 'react-icons/tb';
import { FaCaretDown, FaCaretUp } from 'react-icons/fa';
import Background from './Background';
import TextAlignments from './TextAlignments';

const Customize = () => {
  const {
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
    textAlignment,
  } = useContext(QuoteCardContext);

  loadFont(font);

  const [showBackgroundPopup, setShowBackgroundPopUp] = useState(false);
  const [showAlignmentPopup, setShowAlignmentPopUp] = useState(false);

  const toggleShowBackgroundPopup = () =>
    setShowBackgroundPopUp(!showBackgroundPopup);

  const toggleShowAlignmentPopup = () =>
    setShowAlignmentPopUp(!showAlignmentPopup);

  return (
    <div className="py-3 lg:mt-12">
      <div className="flex items-center gap-2 text-primary">
        <FaWandMagicSparkles />
        <h5 className="font-bold tracking-wider capitalize">customize card</h5>
      </div>
      <hr className="mt-1 mb-4" />

      <div className="bg-white/10 flex items-center gap-4 px-2 flex-wrap">
        {/* Background */}
        <div className="relative" title="Background">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={toggleShowBackgroundPopup}
          >
            <TbBackground className="text-xl" />
            {showBackgroundPopup ? <FaCaretUp /> : <FaCaretDown />}
          </div>
          {showBackgroundPopup && (
            <Background setShowBackgroundPopUp={setShowBackgroundPopUp} />
          )}
        </div>
        <div className="bg-black/20 w-1 h-10"></div>
        {/* Font */}
        <CustomDropdown
          options={fonts}
          selectedOption={font}
          onSelect={setFont}
          onHover={setHoveredFont}
          loadFont={loadFont}
        />
        <div className="bg-black/20 w-1 h-10"></div>
        {/* Font Styles */}
        <div className="flex items-center gap-2" title="Font Styles">
          <button
            className={`capitalize px-4 py-2 font-bold ${fontBold && 'bg-black/40'}`}
            onClick={() => setFontBold(!fontBold)}
            title="Bold"
          >
            b
          </button>
          <button
            className={`capitalize py-2 px-4 italic ${fontItalic && 'bg-black/40'}`}
            onClick={() => setFontItalic(!fontItalic)}
            title="Italic"
          >
            i
          </button>
        </div>
        <div className="bg-black/20 w-1 h-10"></div>
        {/* Text Alignments */}
        <div className="relative" title="Text Alignments">
          <div
            className="flex items-center gap-2 cursor-pointer text-xl"
            onClick={toggleShowAlignmentPopup}
          >
            {textAlignment.icon}
            {showAlignmentPopup ? (
              <FaCaretUp className="text-sm" />
            ) : (
              <FaCaretDown className="text-sm" />
            )}
          </div>
          {showAlignmentPopup && (
            <TextAlignments setShowAlignmentPopUp={setShowAlignmentPopUp} />
          )}
        </div>
        <div className="bg-black/20 w-1 h-10"></div>
        {/* Book Cover */}
        <div
          className={`relative inline-flex items-center cursor-pointer ${showBookCover ? 'bg-primary' : 'bg-gray-400'} rounded-full w-12 h-6`}
          onClick={() => setShowBookCover(!showBookCover)}
          title="Book Cover"
        >
          <span
            className={`absolute left-0 w-6 h-6 bg-white rounded-full transition-transform duration-200 ${showBookCover ? 'transform translate-x-6' : ''}`}
          ></span>
        </div>
      </div>
    </div>
  );
};

export default Customize;
