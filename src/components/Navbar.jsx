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
        zIndex: 1000,
      }}
    >
      <h2 style={{ color: "#38bdf8" }}>AK Automations</h2>

      <div style={{ display: "flex", gap: "20px" }}>
        {["Home", "About", "Services", "Projects", "Contact"].map((item) => (
          <a
            key={item}
            href="#"
            style={{
              color: "white",
              textDecoration: "none",
            }}
          >
            {item}
          </a>
        ))}
      </div>
    </nav>
  );
}