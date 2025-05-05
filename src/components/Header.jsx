import React from 'react';

const Header = () => {
    return (
        <header className="header">
            <h1>tudo bem?</h1>
            <nav>
                <a href="#">blog</a>
                <a href="#">carreira</a>
            </nav>
            <div className="icons">
                <span>🌙</span>
                <span>🔗</span>
            </div>
        </header>
    );
};

export default Header;