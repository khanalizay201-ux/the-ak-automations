export default function Hero() {
  return (
    <section
      style={{
        padding: "100px 20px",
        textAlign: "center",
        background: "#1e293b",
        color: "white",
      }}
    >
      <h1 style={{ fontSize: "48px" }}>
        Welcome to AK Automations
      </h1>

      <p style={{ fontSize: "18px", marginTop: "20px" }}>
        We build AI-powered automation systems and modern web solutions
      </p>

      <button
        style={{
          marginTop: "30px",
          padding: "12px 24px",
          background: "#38bdf8",
          border: "none",
          borderRadius: "8px",
          color: "black",
          cursor: "pointer",
        }}
      >
        Get Started
      </button>
    </section>
  );
}