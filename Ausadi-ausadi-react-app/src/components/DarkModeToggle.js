import React from 'react';

const DarkModeToggle = ({ darkMode, setDarkMode }) => {
  return (
    <button
      id="dark-mode-toggle"
      className="dark-mode-toggle"
      onClick={() => setDarkMode(!darkMode)}
    >
      {darkMode ? "☀️" : "🌙"}
    </button>
  );
};

export default DarkModeToggle;
