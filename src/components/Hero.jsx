export default function Hero() {
  return (
    <section
      style={{
        padding: "100px 20px",
        textAlign: "center",
        background: "linear-gradient(135deg, #0f172a, #1e293b)",
        color: "white",
      }}
    >
      <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>
        Welcome to AK Automations
      </h1>

      <p style={{ fontSize: "18px", marginBottom: "30px" }}>
        We build AI-powered automation systems and modern web solutions
      </p>

      <button
        style={{
          padding: "12px 24px",
          fontSize: "16px",
          background: "#38bdf8",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Get Started
      </button>
    </section>
  );
}