import './style.css';

const navItems = [
  ['inicio', 'Início'],
  ['cardapio', 'Cardápio'],
  ['sobre', 'Sobre'],
  ['galeria', 'Galeria'],
  ['avaliacoes', 'Avaliações'],
  ['localizacao', 'Localização'],
];

const photos = [
  { src: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1400&q=85', alt: 'Carne grelhada fatiada sobre tábua de madeira', className: 'gallery-large' },
  { src: 'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=1000&q=85', alt: 'Corte de carne servido em prato escuro', className: 'gallery-tall' },
  { src: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=1000&q=85', alt: 'Bife grelhado em close', className: '' },
  { src: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=1000&q=85', alt: 'Mesa posta com prato brasileiro', className: '' },
  { src: 'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1000&q=85', alt: 'Detalhe de refeição servida à mesa', className: 'gallery-wide' },
];

const app = document.querySelector('#app');
app.innerHTML = `
  <header class="site-header" data-header>
    <a class="brand" href="#inicio" aria-label="Churrasqueto, início">
      <span class="brand-mark" aria-hidden="true">✦</span>
      <span>Churrasqueto</span>
    </a>
    <nav class="desktop-nav" aria-label="Navegação principal">
      ${navItems.map(([id, label]) => `<a href="#${id}" data-nav="${id}">${label}</a>`).join('')}
    </nav>
    <a class="header-cta" href="#localizacao">Visitar a casa <span aria-hidden="true">↗</span></a>
    <button class="menu-toggle" type="button" aria-label="Abrir menu" aria-expanded="false"><span></span><span></span></button>
    <nav class="mobile-nav" aria-label="Navegação móvel">
      ${navItems.map(([id, label]) => `<a href="#${id}" data-nav="${id}">${label}</a>`).join('')}
      <a href="#localizacao" class="mobile-cta">Visitar a casa ↗</a>
    </nav>
  </header>

  <main>
    <section class="hero" id="inicio">
      <div class="hero-image"></div>
      <div class="hero-grain"></div>
      <div class="hero-content">
        <p class="eyebrow"><span></span> República · São Paulo</p>
        <h1>O fogo que<br /><em>reúne.</em></h1>
        <p class="hero-copy">Carne, brasa e o pulso do centro de São Paulo. Uma experiência para chegar com fome e ficar pela atmosfera.</p>
        <div class="hero-actions"><a class="button button-solid" href="#cardapio">Ver cardápio <span>↘</span></a><a class="button button-ghost" href="#localizacao">Como chegar <span>↗</span></a></div>
      </div>
      <div class="hero-bottom"><span>R. 24 de Maio, 237</span><span class="scroll-note"><i></i> Scroll para explorar</span></div>
    </section>

    <section class="intro section-pad" id="sobre">
      <div class="section-kicker">01 <span></span> A casa</div>
      <div class="intro-grid">
        <h2>Uma pausa quente<br /><em>no coração da cidade.</em></h2>
        <div class="intro-text"><p>Churrasqueto está na República, em um dos endereços mais vivos do centro de São Paulo. Aqui, o encontro começa na brasa e continua à mesa.</p><p class="muted">Este projeto é uma apresentação digital independente. O endereço foi confirmado em fontes públicas; informações operacionais devem ser confirmadas diretamente com o restaurante.</p></div>
      </div>
      <div class="rule"></div>
      <div class="stat-row"><div><strong>R. 24</strong><span>de Maio</span></div><div><strong>República</strong><span>São Paulo · SP</span></div><div><strong>01041-001</strong><span>Brasil</span></div></div>
    </section>

    <section class="menu-section section-pad" id="cardapio">
      <div class="section-heading"><div class="section-kicker">02 <span></span> Seleção visual</div><h2>Da brasa<br /><em>à mesa.</em></h2><p>Uma leitura visual da cozinha de carnes e acompanhamentos brasileiros. Consulte o cardápio atual diretamente com a casa.</p></div>
      <div class="menu-grid">
        <article class="menu-feature"><div class="menu-photo photo-steak"></div><div class="menu-label"><span>01 / Grelha</span><h3>Cortes na brasa</h3><p>Texturas marcadas pelo fogo, servidas para compartilhar.</p></div></article>
        <article class="menu-card"><div class="menu-photo photo-sides"></div><div class="menu-label"><span>02 / Acompanhamentos</span><h3>Clássicos brasileiros</h3><p>O conforto que completa a mesa.</p></div></article>
        <article class="menu-card menu-card-dark"><div class="menu-icon">✦</div><div class="menu-label"><span>03 / Experiência</span><h3>Chegue com fome.</h3><p>Os itens e preços podem variar. Confirme a seleção disponível no dia.</p></div></article>
      </div>
    </section>

    <section class="gallery-section section-pad" id="galeria">
      <div class="gallery-top"><div><div class="section-kicker">03 <span></span> Galeria</div><h2>Fogo em<br /><em>primeiro plano.</em></h2></div><p>Imagens editoriais de referência para a proposta visual. Não são fotografias oficiais do estabelecimento.</p></div>
      <div class="gallery-grid">${photos.map((photo, index) => `<button class="gallery-item ${photo.className}" data-lightbox="${index}" aria-label="Ampliar imagem: ${photo.alt}"><img src="${photo.src}" alt="${photo.alt}" loading="lazy" /></button>`).join('')}</div>
    </section>

    <section class="quote-section"><div class="quote-mark">“</div><blockquote>O centro de São Paulo pede lugares com presença. Lugares que você reconhece pelo calor antes mesmo de sentar.</blockquote><span>— Uma proposta digital para Churrasqueto</span></section>

    <section class="reviews section-pad" id="avaliacoes"><div class="section-kicker">04 <span></span> Impressão</div><div class="reviews-grid"><h2>A cidade<br /><em>fala baixo.</em></h2><div class="review-note"><div class="stars" aria-label="Avaliações não exibidas">★★★★★</div><p>Não exibimos notas ou depoimentos sem uma fonte atual verificável. A reputação da casa merece dados reais, não números inventados.</p><a href="https://www.google.com/maps/search/?api=1&query=Churrasqueto%2C%20R.%2024%20de%20Maio%2C%20237%2C%20S%C3%A3o%20Paulo" target="_blank" rel="noreferrer">Ver avaliações atuais ↗</a></div></div></section>

    <section class="location section-pad" id="localizacao"><div class="location-copy"><div class="section-kicker">05 <span></span> Localização</div><h2>Encontre<br /><em>a brasa.</em></h2><p class="address">R. 24 de Maio, 237<br />República · São Paulo - SP<br />01041-001 · Brasil</p><a class="button button-solid" href="https://www.google.com/maps/dir/?api=1&destination=R.%2024%20de%20Maio%2C%20237%2C%20Rep%C3%BAblica%2C%20S%C3%A3o%20Paulo%20-%20SP" target="_blank" rel="noreferrer">Como chegar <span>↗</span></a></div><div class="map-wrap"><div id="map" aria-label="Mapa da localização do Churrasqueto"></div><div class="map-tag"><span></span> Churrasqueto · República</div></div></section>
  </main>

  <footer class="footer"><div class="footer-main"><a class="brand" href="#inicio"><span class="brand-mark" aria-hidden="true">✦</span><span>Churrasqueto</span></a><p>Carne, fogo e cidade.<br />República, São Paulo.</p><div class="footer-links">${navItems.slice(0, 4).map(([id, label]) => `<a href="#${id}">${label}</a>`).join('')}</div></div><div class="footer-bottom"><span>R. 24 de Maio, 237 · São Paulo - SP</span><span>Projeto demonstrativo independente — desenvolvido por AmeerTrc.</span></div></footer>
  <div class="lightbox" aria-hidden="true"><button class="lightbox-close" aria-label="Fechar imagem">×</button><img src="" alt="" /></div>
`;

const menuToggle = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('.mobile-nav');
menuToggle.addEventListener('click', () => { const open = menuToggle.getAttribute('aria-expanded') === 'true'; menuToggle.setAttribute('aria-expanded', String(!open)); mobileNav.classList.toggle('is-open', !open); });
document.querySelectorAll('.mobile-nav a').forEach(link => link.addEventListener('click', () => { menuToggle.setAttribute('aria-expanded', 'false'); mobileNav.classList.remove('is-open'); }));

const sections = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('[data-nav]');
const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) navLinks.forEach(link => link.classList.toggle('active', link.dataset.nav === entry.target.id)); }), { rootMargin: '-35% 0px -55% 0px' });
sections.forEach(section => observer.observe(section));

const lightbox = document.querySelector('.lightbox');
const lightboxImage = lightbox.querySelector('img');
document.querySelectorAll('[data-lightbox]').forEach(item => item.addEventListener('click', () => { lightboxImage.src = item.querySelector('img').src.replace(/w=[0-9]+/, 'w=1800'); lightboxImage.alt = item.querySelector('img').alt; lightbox.classList.add('is-visible'); lightbox.setAttribute('aria-hidden', 'false'); }));
const closeLightbox = () => { lightbox.classList.remove('is-visible'); lightbox.setAttribute('aria-hidden', 'true'); };
lightbox.addEventListener('click', event => { if (event.target === lightbox || event.target.classList.contains('lightbox-close')) closeLightbox(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeLightbox(); });

const map = L.map('map', { scrollWheelZoom: false, zoomControl: false }).setView([-23.5437, -46.6421], 16);
L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', { attribution: '&copy; OpenStreetMap &copy; CARTO', maxZoom: 19 }).addTo(map);
L.control.zoom({ position: 'bottomright' }).addTo(map);
const markerIcon = L.divIcon({ className: 'custom-marker', html: '<span></span>', iconSize: [22, 22], iconAnchor: [11, 11] });
L.marker([-23.5437, -46.6421], { icon: markerIcon }).addTo(map).bindPopup('<strong>Churrasqueto</strong><br>R. 24 de Maio, 237');
