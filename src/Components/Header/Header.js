import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
    const [open, setOpen] = useState(false);
    const headerRef = useRef();
    const menuRef = useRef();
    const handleMenu = () => {
        setOpen(!open);
    };
    useEffect(() => {
        const headerHeight = headerRef.current.getBoundingClientRect().height;
        const menuHeight = menuRef.current.getBoundingClientRect().height;
        console.log("menu height " + menuHeight);
        if (open) {
            menuRef.current.style.top = `${headerHeight}px`;
        } else {
            const moveToTop = headerHeight + menuHeight;
            menuRef.current.style.top = `-${moveToTop}px`;
        }
    }, [open]);
    return (
        <header className=" header-container" ref={headerRef}>
            <nav className="navbar">
                <div className="brand">
                    <Link to="/">logo</Link>
                    <div className="toggle" onClick={handleMenu}>
                        {open ? (
                            <i className="fa-solid fa-x"></i>
                        ) : (
                            <i className="fa-solid fa-bars"></i>
                        )}
                    </div>
                </div>
                <div className="menu-container" ref={menuRef}>
                    <li>
                        <NavLink to="/">home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/blog">blog</NavLink>
                    </li>
                    <div className="user-info">
                        <img src="" alt="photo" />
                        <span className="name">samsuzzaman</span>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
