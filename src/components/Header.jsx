import React from 'react';
import '../styles/Header.css';
import { useParams } from 'react-router';

const Header = () => {
  const { category } = useParams();

  return (
    <header className="header">
      <h2>{category}</h2>
      <p>Category description</p>
    </header>
  );
};

export default Header;
