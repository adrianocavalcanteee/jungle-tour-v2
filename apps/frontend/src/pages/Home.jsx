export default function Home() {
    return (
      <>
        {/* Hero */}
        <section className="hero">
          <div className="hero-content">
            <h1>Conheça a Amazônia</h1>
            <p>
              Descubra trilhas, rios e mistérios no coração da selva amazônica. Viva uma
              jornada inesquecível pela floresta mais rica e vibrante do planeta.
            </p>
          </div>
        </section>
  
        {/* Passeios */}
        <section className="tours">
          <div className="container">
            <div className="section-title">
              <h2>Aventure-se com nossos passeios</h2>
              <p>Explore a beleza da amazônia.</p>
            </div>
  
            <div className="tours-grid">
              {/* Card 1 */}
              <div className="tour-card">
                <div className="tour-image">
                  <img src="/img/boto.png" alt="Aventura na Amazônia" />
                </div>
                <div className="tour-info">
                  <h3>Experiência com botos e encontro das águas</h3>
                  <div className="tour-meta">
                    <span><i className="fas fa-calendar-alt"></i> 2 Dias</span>
                  </div>
                  <p className="tour-description">
                    Nade com os botos-cor-de-rosa e assista ao fenômeno do Encontro das Águas,
                    onde os rios Negro e Solimões correm lado a lado sem se misturar. Uma
                    experiência mágica que só a Amazônia pode oferecer!
                  </p>
                  <a className="cta-button" href="/passeios/boto">Saiba Mais</a>
                </div>
              </div>
  
              {/* Card 2 */}
              <div className="tour-card">
                <div className="tour-image">
                  <img src="/img/Teatro.png" alt="Teatro" />
                </div>
                <div className="tour-info">
                  <h3>Tour no centro histórico de manaus</h3>
                  <div className="tour-meta">
                    <span><i className="fas fa-calendar-alt"></i> 1 Dia</span>
                  </div>
                  <p className="tour-description">
                    Descubra a história da capital amazônica visitando o Teatro Amazonas,
                    o Mercado Municipal e o Porto Flutuante. Arquitetura imponente e cultura
                    vibrante em cada esquina!
                  </p>
                  <a className="cta-button" href="/passeios/centro">Saiba mais</a>
                </div>
              </div>
  
              {/* Card 3 */}
              <div className="tour-card">
                <div className="tour-image">
                  <img src="/img/indigena.png" alt="indigena" />
                </div>
                <div className="tour-info">
                  <h3>Inesquecivel Excursão à aldeia indígena</h3>
                  <div className="tour-meta">
                    <span><i className="fas fa-calendar-alt"></i> 1 Dia</span>
                  </div>
                  <p className="tour-description">
                    Viva um dia com comunidades indígenas, aprendendo sobre suas tradições,
                    artesanato e conexão com a floresta. Uma imersão cultural inesquecível!
                  </p>
                  <a className="cta-button" href="/passeios/indio">Saiba mais</a>
                </div>
              </div>
  
              {/* Card 4 */}
              <div className="tour-card">
                <div className="tour-image">
                  <img src="/img/c.png" alt="cachoeiras" />
                </div>
                <div className="tour-info">
                  <h3>Conheça as cachoeiras de Presidente Figueiredo</h3>
                  <div className="tour-meta">
                    <span><i className="fas fa-calendar-alt"></i> 3 Dias</span>
                  </div>
                  <p className="tour-description">
                    Conheça a "Terra das Cachoeiras", com quedas d'água deslumbrantes e cavernas
                    misteriosas. Aventura pura em meio à natureza intocada da floresta!
                  </p>
                  <a className="cta-button" href="/passeios/cachoeira">Saiba mais</a>
                </div>
              </div>
  
              {/* Card 5 */}
              <div className="tour-card">
                <div className="tour-image">
                  <img src="/img/MUSA.png" alt="MUSA" />
                </div>
                <div className="tour-info">
                  <h3>Museus: MUSA e INPA com vista a torre de observação</h3>
                  <div className="tour-meta">
                    <span><i className="fas fa-calendar-alt"></i> 1 Dia</span>
                  </div>
                  <p className="tour-description">
                    Explore o Museu da Amazônia (MUSA) e o INPA, onde ciência e natureza se
                    encontram. Conheça a biodiversidade local de perto!
                  </p>
                  <a className="cta-button" href="/passeios/museus">Saiba mais</a>
                </div>
              </div>
  
              {/* Card 6 */}
              <div className="tour-card">
                <div className="tour-image">
                  <img src="/img/tambaqui.png" alt="tambaqui" />
                </div>
                <div className="tour-info">
                  <h3>Tour gastronômico pela culinária local</h3>
                  <div className="tour-meta">
                    <span><i className="fas fa-calendar-alt"></i> 1 Dia</span>
                  </div>
                  <p className="tour-description">
                    Saboreie tacacá, pirarucu à casaca e cupuaçu, enquanto desvenda os sabores
                    autênticos da culinária amazônica.
                  </p>
                  <a className="cta-button" href="/passeios/culinaria">Saiba mais</a>
                </div>
              </div>
            </div>
          </div>
        </section>
  
        {/* Depoimentos / chamada */}
        <section className="testimonials">
          <div className="container">
            <div className="section-title">
              <h2>
                Desbrave novas trilhas e aprenda mais sobre a amazônia
              </h2>
              <p>
                Nosso camping é feito com muita diversidade, programações em grupo,
                sobrevivência na amazônia e conexão com a natureza
              </p>
              <br />
              <a href="#" className="button-testimonials">Saiba mais</a>
            </div>
          </div>
        </section>
  
        {/* Newsletter */}
        <section className="newsletter">
          <div className="container">
            <div className="section-title">
              <h2>Fique Atualizado</h2>
              <p>Assine nossa newsletter para receber as últimas novidades e ofertas especiais.</p>
            </div>
            <form className="newsletter-form" onSubmit={(e)=>e.preventDefault()}>
              <input type="email" placeholder="Digite seu e-mail" />
              <button type="submit" className="cta-button">Assinar</button>
            </form>
          </div>
        </section>
      </>
    );
  }
  