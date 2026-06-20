export default function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "20px",
        background: "#111827",
        color: "white",
        position: "sticky",
        top: 0,
      }}
    >
      <h2>AK Automations</h2>

      <div style={{ display: "flex", gap: "20px" }}>
        <a href="#home" style={{ color: "white" }}>Home</a>
        <a href="#about" style={{ color: "white" }}>About</a>
        <a href="#services" style={{ color: "white" }}>Services</a>
        <a href="#projects" style={{ color: "white" }}>Projects</a>
        <a href="#contact" style={{ color: "white" }}>Contact</a>
      </div>
    </nav>
  );
}