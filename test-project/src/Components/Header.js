import React, { useState } from 'react';
import logo from '../Images/vnv-logo.png';
import '../Styles/Header.css';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            closeMenu();
        }
    };

    const handleBurgerClick = (e) => {
        e.stopPropagation();
        toggleMenu();
    };

    return (
        <header className={`header ${menuOpen ? 'menu-open' : ''}`} onClick={closeMenu}>
            <img src={logo} alt="VNV Solutions Logo" className="logo" />
            <h1 className="title">Simplified, High-Quality IT Solutions - Empowering Your Business to Success</h1>
            <div className="header-items">
                <a onClick={() => scrollToSection('why-us')}>Why us</a>
                <a onClick={() => scrollToSection('services')}>Services</a>
                <a onClick={() => scrollToSection('projects')}>Projects</a>
                <a onClick={() => scrollToSection('contact-us')}>Contact us</a>
                <a onClick={() => scrollToSection('brief-block')}>Заповнення брифу</a>
                <a onClick={() => scrollToSection('FAQ')}>FAQ</a>
                <a onClick={() => scrollToSection('social-media')}>Social media</a>
            </div>
            <button className="order-button header-button" onClick={() => scrollToSection('order-section')}>
                Замовити
            </button>
            <button className="burger" onClick={handleBurgerClick}>
                <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
                <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
                <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
            </button>
            <nav className={`menu ${menuOpen ? 'open' : ''}`}>
                <a onClick={() => scrollToSection('why-us')}>Why us</a>
                <a onClick={() => scrollToSection('services')}>Services</a>
                <a onClick={() => scrollToSection('projects')}>Projects</a>
                <a onClick={() => scrollToSection('contact-us')}>Contact us</a>
                <a onClick={() => scrollToSection('brief-block')}>Заповнення брифу</a>
                <a onClick={() => scrollToSection('FAQ')}>FAQ</a>
                <a onClick={() => scrollToSection('social-media')}>Social media</a>
            </nav>
        </header>
    );
};

export default Header;
