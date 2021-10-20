import { useState } from 'react';
import { FaCommentAlt, FaBars } from 'react-icons/fa';

const Expandable = ({ children, count, comments, nav }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleIsOpen = () => {
    setIsOpen((isOpen) => !isOpen);
  };
  return (
    <div>
      <button onClick={toggleIsOpen}>
        {nav ? <FaBars /> : null}
        {comments ? <FaCommentAlt /> : null} 
        {comments && <span className="commentCount">{count}</span>}
       
      </button>
      {isOpen && comments  && <span className="labelHideComments">hide comments</span>}
      {isOpen && children}
    </div>
  );
};

export default Expandable;
