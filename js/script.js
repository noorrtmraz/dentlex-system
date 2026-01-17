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



const ctx = document.getElementById('citiesChart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['القدس', 'نابلس', 'رام الله', 'غزة', 'خان يونس', 'دير البلح'],
    datasets: [{
      data: [8, 14, 11, 18, 13, 9],
      backgroundColor: [
        '#EDEFEF',
        '#EDEFEF',
        '#EDEFEF',
        '#292D30', 
        '#EDEFEF',
        '#EDEFEF'
      ],
      borderRadius: 12,        
      borderSkipped: false,    
      barThickness: 50,       
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,

    plugins: {
      legend: { display: false },
      tooltip: { enabled: false }
    },

    scales: {
      x: {
        grid: {
          display: false,      // لا خطوط
          drawBorder: false    // ❌ لا baseline
        },

      border: {
        display: false       // ❌ مهم جدًا (Chart.js v3+)
      },

        ticks: {
          color: '#292D30',
          font: {
            size: 15,
            weight: '500',
            family: 'IBM Plex Sans Arabic, sans-serif',
          }
        }
      },
      y: {
        display: false,        // لا محور
        grid: { display: false,
          drawBorder: false
         },

         border: {
        display: false
      }

      }
    }
  }
});







const ctxx = document.getElementById('systemGauge');

new Chart(ctxx, {
  type: 'doughnut',
  data: {
    datasets: [{
      data: [84, 16],
      backgroundColor: ['#12B981', '#A7F3D0'],
      borderWidth: 0,
      cutout: '80%'
    }]
  },
  options: {
    rotation: -90,
    circumference: 180,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false }
    }
  }
});