import { Outlet, Link, useLocation } from "react-router-dom";
import { BookOpen, Home, Map } from "lucide-react";

export default function Layout() {
  const location = useLocation();

  const navItems = [
    { to: "/", label: "Home", icon: Home },
    { to: "/lessons", label: "Lessons", icon: BookOpen },
    { to: "/roadmap", label: "Roadmap", icon: Map },
  ];

  return (
    <div className="app">
      <header className="app-header">
        <Link to="/" className="logo">
          <span className="logo-fidel">ፊደል</span>
          <span className="logo-text">Tigrinya Learn</span>
        </Link>
        <nav className="main-nav">
          {navItems.map(({ to, label, icon: Icon }) => (
            <Link
              key={to}
              to={to}
              className={`nav-link ${location.pathname === to ? "active" : ""}`}
            >
              <Icon size={18} />
              <span>{label}</span>
            </Link>
          ))}
        </nav>
      </header>
      <main className="app-main">
        <Outlet />
      </main>
    </div>
  );
}
