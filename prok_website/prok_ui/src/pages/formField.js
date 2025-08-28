import React, { useState } from "react";

function IdeaForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    idea: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Idea submitted!");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#1f2937",
        color: "#d1d5db",
        padding: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          maxWidth: "1000px",
          border: "2px solid #1e1e23",
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
        }}
      >
        <div
          style={{
            flex: 1,
            padding: "30px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            backgroundColor: "#1f2937",
          }}
        >
          <h2
            style={{
              fontSize: "2rem",
              fontWeight: "bold",
              marginBottom: "20px",
            }}
          >
            Got an innovative idea?
          </h2>
          <p style={{ fontSize: "1rem", lineHeight: "1.5" }}>
            As a company that thrives on innovation, we welcome all great ideas.
            Have you thought of something you think we’d love? Tell us about it!
          </p>
        </div>

        <div
          style={{
            flex: 1,
            padding: "30px",
            backgroundColor: "#111827",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
            }}
          >
            <label style={{ fontWeight: "bold", marginBottom: "4px" }}>
              First Name*
            </label>
            <input
              type="text"
              name="firstName"
              placeholder="Enter your first name"
              value={formData.firstName}
              onChange={handleChange}
              required
              style={{
                padding: "10px",
                borderRadius: "4px",
                border: "1px solid #ccc",
                marginBottom: "15px",
                width: "100%",
              }}
            />

            <label style={{ fontWeight: "bold", marginBottom: "4px" }}>
              Last Name*
            </label>
            <input
              type="text"
              name="lastName"
              placeholder="Enter your last name"
              value={formData.lastName}
              onChange={handleChange}
              required
              style={{
                padding: "10px",
                borderRadius: "4px",
                border: "1px solid #ccc",
                marginBottom: "15px",
                width: "100%",
              }}
            />

            <label style={{ fontWeight: "bold", marginBottom: "4px" }}>
              Email*
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                padding: "10px",
                borderRadius: "4px",
                border: "1px solid #ccc",
                marginBottom: "15px",
                width: "100%",
              }}
            />

            <label style={{ fontWeight: "bold", marginBottom: "4px" }}>
              What’s your idea?
            </label>
            <textarea
              name="idea"
              placeholder="Your innovative idea"
              value={formData.idea}
              onChange={handleChange}
              rows={4}
              required
              style={{
                padding: "10px",
                borderRadius: "4px",
                border: "1px solid #ccc",
                marginBottom: "20px",
                resize: "vertical",
                width: "100%",
              }}
            />

            <button
              type="submit"
              style={{
                padding: "12px 24px",
                borderRadius: "25px",
                border: "1px solid #facc15",
                backgroundColor: "transparent",
                color: "#facc15",
                fontWeight: "bold",
                cursor: "pointer",
                alignSelf: "flex-start",
                transition: "background-color 0.3s, color 0.3s",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#facc15";
                e.target.style.color = "#1f2937";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "transparent";
                e.target.style.color = "#facc15";
              }}
            >
              Share my idea
            </button>
          </form>
          <p
            style={{
              fontSize: "0.75rem",
              marginTop: "15px",
              color: "#9ca3af",
            }}
          >
            This site is protected by reCAPTCHA and the Google Privacy Policy and
            Terms of Service apply.
          </p>
        </div>
      </div>

      <style>
        {`
          @media (max-width: 768px) {
            div[style*="display: flex"][style*="width: 100%"] {
              flex-direction: column !important;
            }
            div[style*="padding: 30px"] {
              padding: 20px !important;
            }
          }
        `}
      </style>
    </div>
  );
}

export default IdeaForm;
