import { useRef, useEffect, useState } from 'react';
import { FaCaretDown, FaCaretUp } from 'react-icons/fa';
import PropTypes from 'prop-types';

const CustomDropdown = ({
  options,
  selectedOption,
  onSelect,
  onHover,
  loadFont,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleOptionSelect = (option) => {
    onSelect(option);
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef} title="Font">
      <button
        className="md:min-w-20 text-sm text-left flex items-center justify-between"
        onClick={toggleDropdown}
        style={{ fontFamily: selectedOption }}
      >
        {selectedOption}
        {isOpen ? <FaCaretUp /> : <FaCaretDown />}
      </button>
      {isOpen && (
        <div className="absolute left-0 right-0 mt-1 bg-gray-300 text-black rounded shadow-lg z-10 overflow-y-scroll h-96 bottom-12 p-2 min-w-60">
          {options.map((option, index) => {
            return (
              <div
                key={index}
                className="p-2 cursor-pointer hover:bg-gray-200 hover:text-black"
                onMouseEnter={() => {
                  loadFont(option);
                  onHover(option);
                }}
                onMouseLeave={() => onHover('')} // Reset hover on leave
                onClick={() => handleOptionSelect(option)} // Handle option click
              >
                {option}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

CustomDropdown.propTypes = {
  options: PropTypes.array.isRequired,
  selectedOption: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
  onHover: PropTypes.func.isRequired,
  loadFont: PropTypes.func,
};

export default CustomDropdown;
