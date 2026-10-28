/**
 * RECEITAS DE CASEIRINHOS EM CASA — JAVASCRIPT PURO
 * Funcionalidades leves e essenciais:
 * - Atualização automática do ano no rodapé
 * - Menu móvel acessível
 * - Índice interativo com realce de secção ativa ao rolar (TOC)
 * - Botão de impressão / guardar PDF
 * - Botão voltar ao topo
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Atualização do ano corrente no rodapé
  const yearElements = document.querySelectorAll('.current-year');
  const currentYear = new Date().getFullYear();
  yearElements.forEach(el => {
    el.textContent = currentYear;
  });

  // 2. Menu móvel (Hamburger)
  const mobileBtn = document.querySelector('.mobile-menu-btn');
  const navMenu = document.querySelector('.nav-menu');

  if (mobileBtn && navMenu) {
    mobileBtn.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      mobileBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      mobileBtn.setAttribute('aria-label', isOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação');
    });

    // Fechar ao clicar num link
    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        mobileBtn.setAttribute('aria-expanded', 'false');
      });
    });

    // Fechar ao premir tecla Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navMenu.classList.contains('open')) {
        navMenu.classList.remove('open');
        mobileBtn.setAttribute('aria-expanded', 'false');
        mobileBtn.focus();
      }
    });

    // Fechar ao clicar fora do menu
    document.addEventListener('click', (e) => {
      if (navMenu.classList.contains('open') && !navMenu.contains(e.target) && !mobileBtn.contains(e.target)) {
        navMenu.classList.remove('open');
        mobileBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // 3. Índice lateral (TOC) com realce da secção ativa ao rolar a página
  const tocLinks = document.querySelectorAll('.toc-link');
  const sections = document.querySelectorAll('.legal-section-block');

  if (tocLinks.length > 0 && sections.length > 0) {
    const observerOptions = {
      root: null,
      rootMargin: '-80px 0px -60% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          tocLinks.forEach(link => {
            if (link.getAttribute('href') === `#${id}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));
  }

  // 4. Botão de Impressão da Página
  const printBtns = document.querySelectorAll('.btn-print-doc');
  printBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      window.print();
    });
  });

  // 5. Botão Voltar ao Topo
  const backToTopBtn = document.querySelector('.back-to-top');
  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 350) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }, { passive: true });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
});
