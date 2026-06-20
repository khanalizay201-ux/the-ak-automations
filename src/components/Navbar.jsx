import { useState, useEffect } from "react";

function Navbar() {
  const [active, setActive] = useState("home");

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // detect scroll section (active highlight)
  useEffect(() => {
    const sections = ["home", "about", "services", "projects", "contact"];

    const handleScroll = () => {
      let current = "home";

      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) {
            current = id;
          }
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>AK Automations</h2>

      <ul style={styles.links}>
        {["home", "about", "services", "projects", "contact"].map((item) => (
          <li
            key={item}
            onClick={() => scrollTo(item)}
            style={{
              ...styles.link,
              borderBottom: active === item ? "2px solid #00d4ff" : "none",
              color: active === item ? "#00d4ff" : "white",
            }}
          >
            {item.toUpperCase()}
          </li>
        ))}
      </ul>
    </nav>
  );
}

const styles = {
  nav: {
    position: "sticky",
    top: 0,
    zIndex: 1000,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 30px",
    backgroundColor: "#0f0f0f",
    color: "white",
  },
  logo: {
    margin: 0,
    fontSize: "20px",
    cursor: "pointer",
  },
  links: {
    display: "flex",
    gap: "25px",
    listStyle: "none",
    cursor: "pointer",
  },
  link: {
    paddingBottom: "5px",
    transition: "0.3s",
  },
};

export default Navbar;