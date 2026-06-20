export default function Services() {
  return (
    <section style={styles.services}>
      <h2 style={styles.heading}>Our Services</h2>

      <div style={styles.grid}>
        <div
          style={styles.card}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-10px)";
            e.currentTarget.style.boxShadow = "0 15px 30px rgba(0,0,0,0.2)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.1)";
          }}
        >
          <h3>AI Automation</h3>
          <p>We build smart AI workflows that automate repetitive tasks.</p>
        </div>

        <div
          style={styles.card}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-10px)";
            e.currentTarget.style.boxShadow = "0 15px 30px rgba(0,0,0,0.2)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.1)";
          }}
        >
          <h3>Web Development</h3>
          <p>Modern, fast and responsive websites using React and modern tools.</p>
        </div>

        <div
          style={styles.card}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-10px)";
            e.currentTarget.style.boxShadow = "0 15px 30px rgba(0,0,0,0.2)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.1)";
          }}
        >
          <h3>Business Systems</h3>
          <p>Custom automation systems to improve productivity and scaling.</p>
        </div>
      </div>
    </section>
  );
}

const styles = {
  services: {
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
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
    transition: "0.3s ease",
    cursor: "pointer",
  },
};