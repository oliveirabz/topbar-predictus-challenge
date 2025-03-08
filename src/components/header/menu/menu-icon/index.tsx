export const MenuIcon = () => {
  return (
    <div className="menu-icon" title="Abrir Menu">
      <div className="menu-icon-grid">
        {Array.from({ length: 9 }).map((_, i) => (
          <span key={i} className="menu-icon-square"></span>
        ))}
      </div>
    </div>
  );
};
