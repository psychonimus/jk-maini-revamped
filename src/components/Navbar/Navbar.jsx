import React, { useState } from 'react'
import './Navbar.css'
import ButtonOne from '../ButtonOne/ButtonOne'
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { Link } from 'react-router-dom';


const navItems = [
    {
        label: 'Home',
        href: '/',
    },
    { label: 'About Us', href: '/about' },

    {
        label: 'Businesses',
        href: '#',
        children: [
            { label: 'Automotive, Industrial & Beyond', href: '/automotive' },
            { label: 'Tools & Hardware', href: '/tools-and-hardware' },
            { label: 'Aerospace & Defence', href: '/aerospace' },
        ]
    },

    {
        label: 'Beyond Business',
        href: '#',
        children: [
            { label: 'Service Details', href: 'service-single.html' },
            { label: 'Blog Details', href: 'blog-single.html' },
            { label: 'Projects', href: 'projects.html' },
            { label: 'Project Details', href: 'project-single.html' },
            { label: 'Our Team', href: 'team.html' },
            { label: 'Team Details', href: 'team-single.html' },
            { label: 'Pricing Plan', href: 'pricing.html' },
            { label: 'Testimonials', href: 'testimonials.html' },
            { label: 'Image Gallery', href: 'image-gallery.html' },
            { label: 'Video Gallery', href: 'video-gallery.html' },
            { label: 'FAQs', href: 'faqs.html' },
        ],
        children2: [
            { label: 'csr', href: '#' },
            { label: 'JK Maini Group', href: '#' },
            
        ]
    },
    { label: 'Contact Us', href: 'contact.html' },
];

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [openSubmenu, setOpenSubmenu] = useState(null);

    const toggleMenu = () => setMenuOpen(prev => !prev);
    const closeMenu = () => { setMenuOpen(false); setOpenSubmenu(null); };

    const toggleSubmenu = (index) => {
        setOpenSubmenu(prev => prev === index ? null : index);
    };

    return (
        <>
            <header className="main-header">
                <div className="header-sticky">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container">
                            {/* Logo Start */}
                            <Link to="/" className="navbar-brand">
                                <img src="./images/jk-maini-logo.svg" alt="Logo" />
                            </Link>
                            {/* Logo End */}

                            {/* Desktop Menu Start */}
                            <div className="collapse navbar-collapse main-menu">
                                <div className="nav-menu-wrapper">
                                    <ul className="navbar-nav mr-auto" id="menu">
                                        {navItems.map((item, i) => (
                                            <li key={i} className={`nav-item${item.children ? ' submenu' : ''}`}>
                                                <a className="nav-link" href={item.href}>
                                                    {item.label}
                                                </a>
                                                {item.children && (
                                                    <ul>
                                                        {item.children.map((child, j) => (
                                                            <li key={j} className="nav-item">
                                                                <a className="nav-link" href={child.href}>
                                                                    {child.label}
                                                                </a>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                                
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                {/* Header Btn Start */}
                                <div className="header-btn">
                                    <ButtonOne text="Get Started" icon={<FaRegArrowAltCircleRight />} link="#" />
                                    
                                </div>
                                {/* Header Btn End */}
                            </div>
                            {/* Desktop Menu End */}

                            {/* Hamburger Toggle */}
                            <button
                                className={`navbar-toggle-btn${menuOpen ? ' open' : ''}`}
                                onClick={toggleMenu}
                                aria-label="Toggle navigation menu"
                                id="navbar-hamburger"
                            >
                                <span className="bar"></span>
                                <span className="bar"></span>
                                <span className="bar"></span>
                            </button>
                        </div>
                    </nav>

                    {/* Mobile Menu Drawer */}
                    <div className={`mobile-menu-drawer${menuOpen ? ' drawer-open' : ''}`}>
                        <ul className="mobile-nav-list">
                            {navItems.map((item, i) => (
                                <li key={i} className={`mobile-nav-item${item.children ? ' has-submenu' : ''}`}>
                                    <div className="mobile-nav-row">
                                        <Link className="mobile-nav-link" to={item.href} onClick={item.children ? (e) => { e.preventDefault(); toggleSubmenu(i); } : closeMenu}>
                                            {item.label}
                                        </Link>
                                        {item.children && (
                                            <button
                                                className={`submenu-arrow${openSubmenu === i ? ' rotated' : ''}`}
                                                onClick={() => toggleSubmenu(i)}
                                                aria-label="Toggle submenu"
                                            >
                                                &#8249;
                                            </button>
                                        )}
                                    </div>
                                    {item.children && openSubmenu === i && (
                                        <ul className="mobile-submenu">
                                            {item.children.map((child, j) => (
                                                <li key={j} className="mobile-submenu-item">
                                                    <a className="mobile-submenu-link" href={child.href} onClick={closeMenu}>
                                                        {child.label}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ))}
                        </ul>
                        <div className="mobile-menu-btn">
                            <ButtonOne text="Get Started" icon={<FaRegArrowAltCircleRight />} link="#" />
                        </div>
                    </div>

                    {/* Overlay */}
                    {menuOpen && <div className="menu-overlay" onClick={closeMenu} />}
                </div>
            </header>
        </>
    )
}

export default Navbar