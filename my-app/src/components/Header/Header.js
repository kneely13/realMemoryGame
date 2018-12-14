import React from 'react';
// import ReactDOM from 'react-dom';



function Header(props) {
    return (
      <header className="header-sticky">
        <nav className = "navbar">
            <li><h2>Memory Game </h2></li>
            
            <li><h3>Click an image to start!</h3></li>

            <li><h3>Score: 0 | 🏆 Your Best Score: 0 </h3></li>
        </nav>       
      </header>
    );
  }

  

export default Header;