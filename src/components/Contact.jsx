export default function Contact() {
  return (
    <section style={styles.contact}>
      <h2 style={styles.heading}>Contact Us</h2>

      <form style={styles.form}>
        <input type="text" placeholder="Your Name" style={styles.input} />
        <input type="email" placeholder="Your Email" style={styles.input} />
        <textarea placeholder="Your Message" style={styles.textarea} />

        <button type="submit" style={styles.button}>
          Send Message
        </button>
      </form>
    </section>
  );
}

const styles = {
  contact: {
    padding: "100px 20px",
    textAlign: "center",
    backgroundColor: "#ffffff",
  },

  heading: {
    fontSize: "32px",
    marginBottom: "30px",
  },

  form: {
    maxWidth: "500px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },

  input: {
    padding: "12px",
    fontSize: "16px",
    borderRadius: "8px",
    border: "1px solid #ccc",
  },

  textarea: {
    padding: "12px",
    fontSize: "16px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    height: "120px",
    resize: "none",
  },

  button: {
    padding: "12px",
    fontSize: "16px",
    backgroundColor: "#00d4ff",
    color: "#000",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
  },
};