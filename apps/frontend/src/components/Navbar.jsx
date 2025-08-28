import { Link, NavLink } from "react-router-dom";

export default function Navbar({ onLoginClick }) {
  return (
    <header>
      <div className="container header-container">
        <Link to="/" className="logo">Jungle<span>Tour</span></Link>
        <nav>
          <ul>
            <li><NavLink to="/">Início</NavLink></li>
            <li><NavLink to="/passeios">Passeios</NavLink></li>
            <li><NavLink to="/sobre">Sobre</NavLink></li>
            <li><NavLink to="/contato">Contato</NavLink></li>
            <li>
              {/* virou botão que abre o modal */}
              <button className="cta-button" onClick={onLoginClick}>Login</button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
