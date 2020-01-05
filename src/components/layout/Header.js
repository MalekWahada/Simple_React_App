import React from 'react';
import { Link } from 'react-router-dom';

function Header() {

    const headerStyle = {
        background: '#333',
        color: '#fff',
        textAlign: 'center',
        padding: '10px'
    }


    // style for links
    const linkStyle = {
        color: '#fff',
        textDecoration: 'none'
    }

    return (
        <header style={headerStyle}>
            <h1>todoList</h1>
            <Link style={linkStyle} to="/">Home</Link> | 
            <Link style={linkStyle} to="/about">About</Link>
        </header>
    )

}

export default Header;
