document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('upcastGrid');
  if (!grid) return;
  const cards = [...grid.querySelectorAll('.upcast-card')];
  const buttons = [...document.querySelectorAll('.upcast-filter__btn')];

  const applyFilter = (type) => {
    cards.forEach(c => {
      const cat = c.dataset.category;
      c.style.display = (type === 'all' || type === cat) ? '' : 'none';
    });
  };

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      applyFilter(btn.dataset.filter);
    });
  });

  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href').slice(1);
      const t = document.getElementById(id);
      if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth' }); }
    });
  });

  applyFilter('all');
});


