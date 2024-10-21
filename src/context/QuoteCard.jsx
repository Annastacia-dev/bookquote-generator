import PropTypes from 'prop-types';
import { useState, useEffect, createContext } from 'react';
import axios from 'axios';

const QuoteCardContext = createContext();

const QuoteCardProvider = ({ children }) => {
  const backgroundColors = [
    'bg-slate-50 text-black',
    'bg-[#FFF4D9] text-black',
    'bg-[#3F312C] text-white',
    'bg-[#28292E] text-white',
  ];

  const [backgroundColor, setBackgroundColor] = useState(backgroundColors[0]);
  const [fonts, setFonts] = useState([]);
  const [fontBold, setFontBold] = useState(false);
  const [fontItalic, setFontItalic] = useState(true);
  const [font, setFont] = useState('Raleway');
  const [hoveredFont, setHoveredFont] = useState('');
  const [showBookCover, setShowBookCover] = useState(true);

  const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;

  useEffect(() => {
    const fetchFonts = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/webfonts/v1/webfonts?key=${apiKey}&sort=popularity`
        );
        setFonts(response.data.items.map((font) => font.family));
      } catch (error) {
        console.error('Error fetching fonts:', error);
      }
    };

    fetchFonts();
  }, [apiKey]);

  const loadFont = (fontFamily) => {
    if (
      !document.querySelector(`link[href*="${fontFamily.replace(/ /g, '+')}"]`)
    ) {
      const link = document.createElement('link');
      link.href = `https://fonts.googleapis.com/css2?family=${fontFamily.replace(/ /g, '+')}&display=swap`;
      link.rel = 'stylesheet';
      document.head.appendChild(link);
    }
  };

  return (
    <QuoteCardContext.Provider
      value={{
        backgroundColors,
        backgroundColor,
        setBackgroundColor,
        hoveredFont,
        setHoveredFont,
        fonts,
        font,
        setFont,
        fontBold,
        setFontBold,
        fontItalic,
        setFontItalic,
        loadFont,
        showBookCover,
        setShowBookCover,
      }}
    >
      {children}
    </QuoteCardContext.Provider>
  );
};

QuoteCardProvider.propTypes = {
  children: PropTypes.any,
};

export { QuoteCardContext, QuoteCardProvider };
