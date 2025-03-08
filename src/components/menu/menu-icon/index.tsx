export default function MenuIcon({ onClick }: { onClick: () => void }) {
  return (
    <div className="menu-icon" onClick={onClick} aria-label="Abrir Menu">
      <div className="grid">
        {Array.from({ length: 9 }).map((_, i) => (
          <span key={i} className="square"></span>
        ))}
      </div>
    </div>
  );
}
