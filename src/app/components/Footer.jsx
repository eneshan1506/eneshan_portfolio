export default function Footer() {
  return (
    <footer
      className="py-12 mt-20 text-white bg-linear-to-r"
      style={{
        backgroundImage: "linear-gradient(to right, var(--footer-from), var(--footer-to))",
      }}>
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p style={{ color: "var(--footer-text)" }}>© 2026 Portfolio. Alle Rechte vorbehalten.</p>
      </div>
    </footer>
  );
}
