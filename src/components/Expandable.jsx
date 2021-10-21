import { useState } from 'react';
import { FaBars } from 'react-icons/fa';

const Expandable = ({ children}) => {
  const [isOpen, setIsOpen] = useState(false);
  // const toggleIsOpen = () => {
  //   setIsOpen((isOpen) => !isOpen);
  // };

  const iconStyles = { color: 'white' };
  return (
    <div>
      <button  onMouseOver={()=>{setIsOpen(true)}}  >
        {/* onMouseOut={()=>{setIsOpen(false)}} */}
         <FaBars style={iconStyles} /> 
      </button>
     
      {isOpen && children}
    </div>
  );
};

export default Expandable;
