import React from 'react';

export function Header() {
    return (
        <div className='header'>
            <div className='logo-link'>
                <img className='logo' src='/logo.svg' alt='Soarce Logo'/>
                <h1 className='header-text'>Soarce Web Utility</h1>
            </div>
        </div>
    );
}