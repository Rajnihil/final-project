// Contact.js
// Concepts: useState Hook, Controlled Form (State + Props), JSX, Styling in React

import React, { useState } from "react";

const inputStyle = {
    width: "100%",
    padding: "12px 16px",
    fontSize: "15px",
    border: "1px solid #e0e0e0",
    borderRadius: "8px",
    fontFamily: "'DM Sans', sans-serif",
    color: "#111",
    outline: "none",
    boxSizing: "border-box",
    marginTop: "6px",
    backgroundColor: "#fafafa",
};

const labelStyle = {
    fontSize: "13px",
    fontWeight: "600",
    color: "#555",
    display: "block",
};

// ── Contact Page ──────────────────────────────────────────────
function Contact() {
    // useState Hook — controlled form state
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setError("");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.name || !form.email || !form.message) {
            setError("Please fill in all fields before submitting.");
            return;
        }
        setSubmitted(true);
    };

    return (
        <section
            style={{
                padding: "64px 48px",
                maxWidth: "600px",
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
                Get in touch
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
                Contact Us
            </h2>
            <p style={{ color: "#888", fontSize: "16px", marginBottom: "40px" }}>
                Interested in joining or collaborating? Drop us a message and we'll get back to you.
            </p>

            {submitted ? (
                <div
                    style={{
                        border: "1px solid #c8e6c9",
                        borderRadius: "12px",
                        padding: "32px",
                        backgroundColor: "#f1f8f1",
                        textAlign: "center",
                    }}
                >
                    <div style={{ fontSize: "36px", marginBottom: "12px" }}>✅</div>
                    <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "22px", color: "#2e7d32", margin: "0 0 8px" }}>
                        Message sent!
                    </h3>
                    <p style={{ color: "#555", margin: 0 }}>
                        Thanks, <strong>{form.name}</strong>! We'll reach out to <strong>{form.email}</strong> soon.
                    </p>
                    <button
                        onClick={() => { setForm({ name: "", email: "", message: "" }); setSubmitted(false); }}
                        style={{
                            marginTop: "20px",
                            padding: "10px 24px",
                            backgroundColor: "#111",
                            color: "#fff",
                            border: "none",
                            borderRadius: "8px",
                            cursor: "pointer",
                            fontFamily: "'DM Sans', sans-serif",
                            fontSize: "14px",
                        }}
                    >
                        Send another
                    </button>
                </div>
            ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                    <div>
                        <label style={labelStyle}>Name</label>
                        <input
                            style={inputStyle}
                            type="text"
                            name="name"
                            placeholder="Your name"
                            value={form.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label style={labelStyle}>Email</label>
                        <input
                            style={inputStyle}
                            type="email"
                            name="email"
                            placeholder="your@email.com"
                            value={form.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label style={labelStyle}>Message</label>
                        <textarea
                            style={{ ...inputStyle, minHeight: "120px", resize: "vertical" }}
                            name="message"
                            placeholder="Tell us about yourself or your idea..."
                            value={form.message}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Error state display */}
                    {error && (
                        <p style={{ color: "#c0392b", fontSize: "14px", margin: 0 }}>{error}</p>
                    )}

                    <button
                        type="submit"
                        style={{
                            padding: "14px",
                            backgroundColor: "#111",
                            color: "#fff",
                            border: "none",
                            borderRadius: "8px",
                            fontSize: "15px",
                            cursor: "pointer",
                            fontFamily: "'DM Sans', sans-serif",
                            fontWeight: "500",
                        }}
                    >
                        Send Message
                    </button>
                </form>
            )}
        </section>
    );
}

export default Contact;
