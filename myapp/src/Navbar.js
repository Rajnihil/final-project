import React from "react";
import PropTypes from "prop-types";

const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "18px 48px",
    borderBottom: "1px solid #e8e8e8",
    backgroundColor: "#ffffff",
    position: "sticky",
    top: 0,
    zIndex: 100,
};

const logoStyle = {
    fontFamily: "'DM Serif Display', serif",
    fontSize: "22px",
    color: "#111",
    letterSpacing: "-0.5px",
    cursor: "pointer",
};

const linksStyle = {
    display: "flex",
    gap: "32px",
    listStyle: "none",
    margin: 0,
    padding: 0,
};

// ── Functional Component with Props ──────────────────────────
function Navbar({ currentPage, onNavigate }) {
    const links = ["Home", "Events", "Team", "Contact"];

    return (
        <nav style={navStyle}>
            <div style={logoStyle} onClick={() => onNavigate("Home")}>
                CodeClub
            </div>
            <ul style={linksStyle}>
                {links.map((link) => (
                    <li key={link}>
                        <button
                            onClick={() => onNavigate(link)}
                            style={{
                                background: "none",
                                border: "none",
                                cursor: "pointer",
                                fontSize: "14px",
                                fontFamily: "'DM Sans', sans-serif",
                                color: currentPage === link ? "#111" : "#888",
                                fontWeight: currentPage === link ? "600" : "400",
                                borderBottom: currentPage === link ? "2px solid #111" : "2px solid transparent",
                                paddingBottom: "4px",
                                transition: "all 0.2s",
                            }}
                        >
                            {link}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

// ── Props Validation ──────────────────────────────────────────
Navbar.propTypes = {
    currentPage: PropTypes.string.isRequired,
    onNavigate: PropTypes.func.isRequired,
};

export default Navbar;