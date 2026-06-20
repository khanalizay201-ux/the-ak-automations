export default function About() {
  return (
    <section style={styles.about}>
      <div style={styles.container}>
        <h2 style={styles.heading}>About Us</h2>

        <p style={styles.text}>
          AK Automations is focused on building intelligent AI systems,
          modern web applications, and business automation solutions that
          help companies scale faster and work smarter.
        </p>

        <p style={styles.text}>
          We combine technology, design, and automation to deliver high-quality
          digital products tailored to real business needs.
        </p>
      </div>
    </section>
  );
}

const styles = {
  about: {
    padding: "100px 20px",
    backgroundColor: "white",
    textAlign: "center",
  },

  container: {
    maxWidth: "700px",
    margin: "0 auto",
  },

  heading: {
    fontSize: "32px",
    marginBottom: "20px",
  },

  text: {
    fontSize: "16px",
    lineHeight: "1.7",
    color: "#444",
    marginBottom: "15px",
  },
};