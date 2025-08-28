export default function LoginModal({ open, onClose }) {
    if (!open) return null;
  
    const handleBackdrop = (e) => {
      if (e.target.classList.contains("overlay")) onClose();
    };
  
    return (
      <div className="login-modal active">
        <div className="overlay" onClick={handleBackdrop}></div>
        <form className="form" onSubmit={(e) => e.preventDefault()}>
          <p className="form-title">
            Entre para ver o melhor do{" "}
            <a href="/" className="logo">Jungle<span>Tour</span></a>
          </p>
          <div className="input-container">
            <input type="email" placeholder="Digite o email" />
          </div>
          <div className="input-container">
            <input type="password" placeholder="Digite a senha" />
          </div>
          <button type="submit" className="submit">Log in</button>
          <p className="signup-link">
            Usuário novo? <Link to="/register" onClick={onClose}>Registre-se</Link>

          </p>
        </form>
      </div>
    );
  }
  