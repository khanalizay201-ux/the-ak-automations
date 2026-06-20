export default function Hero() {
  return (
    <section style={styles.hero}>
      <h1 style={styles.title}>AK Automations</h1>

      <p style={styles.subtitle}>
        We build AI-powered automation systems and modern web solutions
      </p>

      <button style={styles.button}>Get Started</button>
    </section>
  );
}

const styles = {
  hero: {
    padding: "120px 20px",
    textAlign: "center",
    background: "linear-gradient(135deg, #0f0f0f, #1f1f1f)",
    color: "white",
  },

  title: {
    fontSize: "48px",
    marginBottom: "10px",
    color: "#ffffff",
    fontWeight: "bold",
    textShadow: "0px 0px 10px rgba(0, 212, 255, 0.6)",
  },

  subtitle: {
    fontSize: "18px",
    opacity: 0.85,
    marginBottom: "20px",
  },

  button: {
    padding: "12px 24px",
    fontSize: "16px",
    backgroundColor: "#00d4ff",
    color: "#000",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
  },
};