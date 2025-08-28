export default function Footer() {
    return (
      <footer>
        <div className="container">
          <div className="footer-grid">
            <div className="footer-column">
              <h3>JungleTour</h3>
              <p>Oferecendo experiências inesquecíveis de aventura na selva desde 2025.</p>
              <div className="social-links">
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-youtube"></i></a>
              </div>
            </div>
            <div className="footer-column">
              <h3>Links Rápidos</h3>
              <ul>
                <li><a href="/">Início</a></li>
                <li><a href="/sobre">Sobre Nós</a></li>
                <li><a href="/passeios">Passeios</a></li>
                <li><a href="/contato">Contato</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Suporte</h3>
              <ul>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Política de Reservas</a></li>
                <li><a href="#">Diretrizes de Segurança</a></li>
                <li><a href="#">Política de Privacidade</a></li>
                <li><a href="#">Termos de Serviço</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Contato</h3>
              <ul>
                <li><i className="fas fa-map-marker-alt"></i> Rua indiaporã, New City, Manaus-AM</li>
                <li><i className="fas fa-phone"></i> +55 (92) 99364-5482</li>
                <li><i className="fas fa-envelope"></i> contato@jungletour.com.br</li>
              </ul>
            </div>
          </div>
          <div className="copyright">
            <p>&copy; 2025 JungleTour. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    );
  }
  