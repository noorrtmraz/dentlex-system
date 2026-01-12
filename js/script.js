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