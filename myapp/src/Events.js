// Events.js
// Concepts: Class Component, Constructor, Props, Props Validation, State

import React, { Component } from "react";
import PropTypes from "prop-types";

// ── Class Component: EventCard ────────────────────────────────
class EventCard extends Component {
    render() {
        const { title, date, tag, description } = this.props;

        return (
            <div
                style={{
                    border: "1px solid #e8e8e8",
                    borderRadius: "12px",
                    padding: "28px",
                    backgroundColor: "#fff",
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                    fontFamily: "'DM Sans', sans-serif",
                }}
            >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                    <span
                        style={{
                            fontSize: "11px",
                            fontWeight: "600",
                            letterSpacing: "1.5px",
                            textTransform: "uppercase",
                            padding: "4px 10px",
                            color: "#555",
                        }}
                    >
                        {tag}
                    </span>
                </div>

                <h3
                    style={{
                        fontFamily: "'DM Serif Display', serif",
                        fontSize: "20px",
                        color: "#111",
                        margin: 0,
                    }}
                >
                    {title}
                </h3>
                <p style={{ fontSize: "14px", color: "#888", margin: 0 }}>{date}</p>
                <p style={{ fontSize: "15px", color: "#444", margin: 0, lineHeight: 1.6 }}>
                    {description}
                </p>
            </div>
        );
    }
}

// ── Props Validation ──────────────────────────────────────────
EventCard.propTypes = {
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

// ── Events data ───────────────────────────────────────────────
const eventsData = [
    {
        id: 1,
        title: "Intro to React Workshop",
        date: "April 12, 2025 · 3:00 PM",
        tag: "Workshop",
        description:
            "A beginner-friendly session covering JSX, components, and state management. No prior experience needed.",
    },
    {
        id: 2,
        title: "Hackathon Prep Night",
        date: "April 19, 2025 · 6:00 PM",
        tag: "Hackathon",
        description:
            "Team formation, idea brainstorming, and tips from seniors who've won inter-college hackathons.",
    },
    {
        id: 3,
        title: "Open Source Sprint",
        date: "April 26, 2025 · 2:00 PM",
        tag: "Collaboration",
        description:
            "Pick an open source project, contribute a PR, and learn git workflows with help from club mentors.",
    },
    {
        id: 4,
        title: "Portfolio Review Session",
        date: "May 3, 2025 · 4:00 PM",
        tag: "Career",
        description:
            "Get honest feedback on your portfolio and resume from seniors and alumni currently working in the industry.",
    },
];

// ── Events Page (Functional) ──────────────────────────────────
function Events() {
    return (
        <section style={{ padding: "64px 48px", maxWidth: "1000px", margin: "0 auto", fontFamily: "'DM Sans', sans-serif" }}>
            <p style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "2px", textTransform: "uppercase", color: "#999", marginBottom: "8px" }}>
                Upcoming
            </p>
            <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "42px", color: "#111", margin: "0 0 40px 0", letterSpacing: "-0.5px" }}>
                Events
            </h2>
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                    gap: "24px",
                }}
            >
                {eventsData.map((event) => (
                    <EventCard
                        key={event.id}
                        title={event.title}
                        date={event.date}
                        tag={event.tag}
                        description={event.description}
                    />
                ))}
            </div>
        </section>
    );
}

export default Events;
