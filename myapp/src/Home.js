import React from "react";

const sectionStyle = {
    minHeight: "70vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "40px 16px",
};

const headingStyle = {
    fontSize: "36px",
    color: "#111",
    margin: "0 0 12px 0",
};

const subStyle = {
    fontSize: "16px",
    color: "#666",
    maxWidth: "600px",
    marginBottom: "28px",
};

// badge removed per request

const statsRow = {
    display: "flex",
    gap: "24px",
    marginTop: "28px",
    justifyContent: "center",
};

const statBox = {
    textAlign: "center",
};

// Static stat (no animation)
function Stat({ value, label }) {
    return (
        <div style={statBox}>
            <div style={{ fontSize: "28px", fontWeight: 600, color: "#111" }}>{value}+</div>
            <div style={{ fontSize: "12px", color: "#777", marginTop: "4px" }}>{label}</div>
        </div>
    );
}

// ── Home Page ─────────────────────────────────────────────────
function Home({ onNavigate }) {
    return (
        <section style={sectionStyle}>
            <h1 style={headingStyle}>
                Learn. Build.<br />Connect.
            </h1>
            <p style={subStyle}>
                CodeClub is a student-run community where we build real projects,
                host workshops, and grow together as developers.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center" }}>
                <button
                    onClick={() => onNavigate("Events")}
                    style={{
                        padding: "10px 20px",
                        backgroundColor: "#111",
                        color: "#fff",
                        border: "none",
                        borderRadius: "6px",
                        fontSize: "14px",
                        cursor: "pointer",
                        fontWeight: "500",
                    }}
                >
                    See Events
                </button>
                <button
                    onClick={() => onNavigate("Team")}
                    style={{
                        padding: "10px 20px",
                        backgroundColor: "#fff",
                        color: "#111",
                        border: "1px solid #ddd",
                        borderRadius: "6px",
                        fontSize: "14px",
                        cursor: "pointer",
                        fontWeight: "500",
                    }}
                >
                    Meet the Team
                </button>
            </div>

            {/* Animated Stats using useState + useEffect */}
            <div style={statsRow}>
                <Stat value={120} label="Members" />
                <Stat value={34} label="Events held" />
                <Stat value={18} label="Projects built" />
            </div>
        </section>
    );
}

export default Home;