export default function MenuIcon({ onClick }: { onClick: () => void }) {
  return (
    <button className="menu-icon" onClick={onClick} aria-label="Abrir menu">
      <div className="grid">
        {Array.from({ length: 9 }).map((_, i) => (
          <span key={i} className="square"></span>
        ))}
      </div>
    </button>
  );
}
