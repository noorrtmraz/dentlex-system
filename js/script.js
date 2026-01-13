 document.addEventListener('DOMContentLoaded', () => {

    const currentPage = window.location.pathname.split('/').pop();
    const links = document.querySelectorAll('.sb-link');

    links.forEach(link => {
      const linkPage = link.getAttribute('href').split('/').pop();

      if (linkPage === currentPage) {
        link.classList.add('active');
      }
    });

  });


  const sidebar = document.querySelector('.sb-sidebar');
  const overlay = document.querySelector('.sb-overlay');
  const toggleBtn = document.querySelector('.sb-toggle-btn');

  toggleBtn.addEventListener('click', () => {
    sidebar.classList.add('is-open');
    overlay.classList.add('is-active');
  });

  overlay.addEventListener('click', () => {
    sidebar.classList.remove('is-open');
    overlay.classList.remove('is-active');
  });



