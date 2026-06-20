export default function Projects() {
  return (
    <section style={styles.projects}>
      <h2 style={styles.heading}>Our Projects</h2>

      <div style={styles.grid}>
        <div style={styles.card}>
          <h3>AI Chatbot System</h3>
          <p>Automated customer support chatbot using AI workflows.</p>
        </div>

        <div style={styles.card}>
          <h3>Business Dashboard</h3>
          <p>Analytics dashboard for business performance tracking.</p>
        </div>

        <div style={styles.card}>
          <h3>Automation System</h3>
          <p>End-to-end workflow automation for business operations.</p>
        </div>
      </div>
    </section>
  );
}

const styles = {
  projects: {
    padding: "100px 20px",
    textAlign: "center",
    backgroundColor: "#f4f4f4",
  },

  heading: {
    fontSize: "32px",
    marginBottom: "40px",
  },

  grid: {
    display: "flex",
    justifyContent: "center",
    gap: "25px",
    flexWrap: "wrap",
  },

  card: {
    width: "260px",
    padding: "25px",
    backgroundColor: "white",
    borderRadius: "12px",
    boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
  },
};