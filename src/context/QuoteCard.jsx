import PropTypes from 'prop-types';
import { useState, createContext } from 'react';

const QuoteCardContext = createContext();

// eslint-disable-next-line react/prop-types
const QuoteCardProvider = ({ children }) => {

  const backgroundColors = [
    'bg-slate-50 text-black',
    'bg-[#FFF4D9] text-black',
    'bg-[#3F312C] text-white',
    'bg-[#28292E] text-white'
  ]

  const [backgroundColor, setBackgroundColor] = useState(backgroundColors[0]);

  return (
    <QuoteCardContext.Provider
      value={{
        backgroundColors, backgroundColor, setBackgroundColor
      }}
    >
      {children}
    </QuoteCardContext.Provider>
  );
};

QuoteCardProvider.prototypes = {
  children: PropTypes.any,
};

export { QuoteCardContext, QuoteCardProvider };
