import React from "react";
import PropTypes from "prop-types";

const members = [
    { id: 1, name: "Arjun Mehta", role: "President", year: "3rd Year, CSE" },
    { id: 2, name: "Priya Sharma", role: "Vice President", year: "3rd Year, IT" },
    { id: 3, name: "Rahul Das", role: "Events Lead", year: "2nd Year, CSE" },
    { id: 4, name: "Sneha Pillai", role: "Design Lead", year: "2nd Year, ECE" },
    { id: 5, name: "Karthik R", role: "Tech Lead", year: "3rd Year, CSE" },
    { id: 6, name: "Meera Nair", role: "Content Lead", year: "2nd Year, IT" },
];

// ── MemberCard: Functional Component with Props ───────────────
function MemberCard({ name, role, year, emoji }) {
    return (
        <div
            style={{
                border: "1px solid #e8e8e8",
                borderRadius: "12px",
                padding: "28px 24px",
                textAlign: "center",
                fontFamily: "'DM Sans', sans-serif",
                backgroundColor: "#fff",
            }}
        >
            {/* avatar removed per request */}
            <h3
                style={{
                    fontFamily: "'DM Serif Display', serif",
                    fontSize: "18px",
                    color: "#111",
                    margin: "0 0 4px 0",
                }}
            >
                {name}
            </h3>
            <p style={{ fontSize: "13px", fontWeight: "600", color: "#555", margin: "0 0 6px 0" }}>
                {role}
            </p>
            <p style={{ fontSize: "12px", color: "#aaa", margin: 0 }}>{year}</p>
        </div>
    );
}

// ── Props Validation ──────────────────────────────────────────
MemberCard.propTypes = {
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
};

// ── Team Page ─────────────────────────────────────────────────
function Team() {
    return (
        <section
            style={{
                padding: "64px 48px",
                maxWidth: "1000px",
                margin: "0 auto",
                fontFamily: "'DM Sans', sans-serif",
            }}
        >
            <p
                style={{
                    fontSize: "12px",
                    fontWeight: "600",
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    color: "#999",
                    marginBottom: "8px",
                }}
            >
                The people
            </p>
            <h2
                style={{
                    fontFamily: "'DM Serif Display', serif",
                    fontSize: "42px",
                    color: "#111",
                    margin: "0 0 12px 0",
                    letterSpacing: "-0.5px",
                }}
            >
                Meet the Team
            </h2>
            <p style={{ color: "#888", fontSize: "16px", marginBottom: "40px", maxWidth: "480px" }}>
                We're a group of students passionate about technology, learning, and helping each other grow.
            </p>
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
                    gap: "20px",
                }}
            >
                {members.map((m) => (
                    <MemberCard
                        key={m.id}
                        name={m.name}
                        role={m.role}
                        year={m.year}
                    />
                ))}
            </div>
        </section>
    );
}

export default Team;
